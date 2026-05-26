import { randomBytes } from 'crypto';
import { supabase } from '../lib/supabase.js';
import { env } from '../config/env.js';
import { validateReservationTime } from '../utils/validation.js';
import { sendMail } from '../lib/mailer.js';
import { buildReservationEmail } from '../templates/reservationConfirmation.js';
import { buildAdminReservationEmail } from '../templates/reservationAdminNotification.js';
import { emitReservationEvent } from '../lib/socket.js';

const generateConfirmationCode = () => randomBytes(3).toString('hex').toUpperCase();

export const checkAvailability = async ({ date, time, guests }) => {
  const timeValidation = validateReservationTime({ date, time });
  if (!timeValidation.ok) {
    return { available: false, reason: timeValidation.reason };
  }

  const { data, error } = await supabase
    .from('reservations')
    .select('guests')
    .eq('reservation_date', date)
    .eq('reservation_time', time)
    .in('status', ['PENDING', 'CONFIRMED']);

  if (error) {
    throw new Error(error.message);
  }

  const alreadyBooked = (data || []).reduce((sum, item) => sum + (item.guests || 0), 0);
  const available = alreadyBooked + guests <= env.maxGuestsPerSlot;

  return {
    available,
    reason: available ? null : 'Horario sem disponibilidade para esta quantidade de pessoas.'
  };
};

export const createReservation = async ({
  name,
  email,
  phone,
  date,
  time,
  guests,
  notes
}) => {
  const availability = await checkAvailability({ date, time, guests });
  if (!availability.available) {
    return { ok: false, reason: availability.reason };
  }

  const confirmationCode = generateConfirmationCode();

  const { data, error } = await supabase
    .from('reservations')
    .insert({
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      reservation_date: date,
      reservation_time: time,
      guests,
      notes,
      status: 'PENDING',
      confirmation_code: confirmationCode
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const publicUrl = env.publicUrl || `http://localhost:${env.port}`;
  const confirmUrl = `${publicUrl}/api/v1/reservations/${data.id}/confirm?code=${confirmationCode}`;
  const cancelUrl = `${publicUrl}/api/v1/reservations/${data.id}/cancel?code=${confirmationCode}`;

  const emailContent = buildReservationEmail({
    name,
    date,
    time,
    guests,
    confirmationCode,
    confirmUrl,
    cancelUrl
  });

  await sendMail({
    to: email,
    subject: emailContent.subject,
    html: emailContent.html
  });

  if (env.adminEmail) {
    const adminEmailContent = buildAdminReservationEmail({
      name,
      email,
      phone,
      date,
      time,
      guests,
      notes,
      reservationId: data.id
    });

    await sendMail({
      to: env.adminEmail,
      subject: adminEmailContent.subject,
      html: adminEmailContent.html
    });
  }

  emitReservationEvent('reservation:new', data);

  return { ok: true, reservation: data, confirmationCode };
};

export const listReservations = async ({ date, status }) => {
  let query = supabase.from('reservations').select('*').order('created_at', { ascending: false });

  if (date) {
    query = query.eq('reservation_date', date);
  }

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) {
    throw new Error(error.message);
  }

  return data || [];
};

export const cancelReservation = async ({ id }) => {
  const { data, error } = await supabase
    .from('reservations')
    .update({ status: 'CANCELLED', cancelled_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  emitReservationEvent('reservation:update', data);

  return data;
};

export const updateReservationStatus = async ({ id, status }) => {
  const { data, error } = await supabase
    .from('reservations')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  emitReservationEvent('reservation:update', data);

  return data;
};

export const findReservationByCode = async ({ id, code }) => {
  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .eq('id', id)
    .eq('confirmation_code', code)
    .single();

  if (error) {
    return null;
  }

  return data;
};

export const confirmReservationByCode = async ({ id, code }) => {
  const reservation = await findReservationByCode({ id, code });
  if (!reservation) {
    return { ok: false, reason: 'Reserva nao encontrada.' };
  }

  if (reservation.status === 'CONFIRMED') {
    return { ok: true, reservation };
  }

  const updated = await updateReservationStatus({ id, status: 'CONFIRMED' });
  return { ok: true, reservation: updated };
};

export const cancelReservationByCode = async ({ id, code }) => {
  const reservation = await findReservationByCode({ id, code });
  if (!reservation) {
    return { ok: false, reason: 'Reserva nao encontrada.' };
  }

  if (reservation.status === 'CANCELLED') {
    return { ok: true, reservation };
  }

  const updated = await cancelReservation({ id });
  return { ok: true, reservation: updated };
};

export const sendTestEmail = async () => {
  const html = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Teste de email - Sabor & Alma</h2>
      <p>Se voce recebeu esta mensagem, o SMTP esta configurado corretamente.</p>
      <p>Data: ${new Date().toISOString()}</p>
    </div>
  `;

  await sendMail({
    to: env.adminEmail,
    subject: 'Teste SMTP - Sabor & Alma',
    html
  });
};
