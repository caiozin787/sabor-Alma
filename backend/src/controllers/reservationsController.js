import { reservationSchema } from '../utils/validation.js';
import {
  cancelReservation,
  cancelReservationByCode,
  checkAvailability,
  confirmReservationByCode,
  createReservation,
  listReservations,
  updateReservationStatus
} from '../services/reservationsService.js';
import { buildStatusPage } from '../templates/reservationStatusPage.js';

export const getAvailability = async (req, res) => {
  try {
    const { date, time, guests } = req.query;
    const guestsNumber = Number(guests || 0);

    if (!date || !time || !guestsNumber) {
      return res.status(400).json({ error: 'Parametros obrigatorios: date, time, guests.' });
    }

    const availability = await checkAvailability({
      date: String(date),
      time: String(time),
      guests: guestsNumber
    });

    return res.json(availability);
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Erro ao verificar disponibilidade.' });
  }
};

export const postReservation = async (req, res) => {
  try {
    const parsed = reservationSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Dados invalidos.', details: parsed.error.flatten() });
    }

    const result = await createReservation(parsed.data);
    if (!result.ok) {
      return res.status(400).json({ error: result.reason });
    }

    return res.status(201).json({
      message: 'Reserva criada com sucesso.',
      confirmation_code: result.confirmationCode,
      reservation: result.reservation
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Erro ao criar reserva.' });
  }
};

export const getReservations = async (req, res) => {
  try {
    const { date, status } = req.query;
    const reservations = await listReservations({
      date: date ? String(date) : undefined,
      status: status ? String(status) : undefined
    });

    return res.json({ reservations });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Erro ao listar reservas.' });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'ID obrigatorio.' });
    }

    const reservation = await cancelReservation({ id });
    return res.json({ message: 'Reserva cancelada.', reservation });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Erro ao cancelar reserva.' });
  }
};

export const putReservationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ error: 'ID e status obrigatorios.' });
    }

    if (!['PENDING', 'CONFIRMED', 'CANCELLED'].includes(status)) {
      return res.status(400).json({ error: 'Status invalido.' });
    }

    const reservation = await updateReservationStatus({ id, status });
    return res.json({ message: 'Status atualizado.', reservation });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Erro ao atualizar status.' });
  }
};

export const confirmReservationByEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { code } = req.query;

    if (!id || !code) {
      return res.status(400).send(buildStatusPage({
        title: 'Reserva nao encontrada',
        message: 'O link informado esta incompleto.'
      }));
    }

    const result = await confirmReservationByCode({ id, code: String(code) });
    if (!result.ok) {
      return res.status(404).send(buildStatusPage({
        title: 'Reserva nao encontrada',
        message: result.reason
      }));
    }

    return res.send(buildStatusPage({
      title: 'Reserva confirmada',
      message: 'Sua reserva foi confirmada com sucesso.'
    }));
  } catch (error) {
    return res.status(500).send(buildStatusPage({
      title: 'Erro ao confirmar',
      message: 'Nao foi possivel confirmar a reserva agora.'
    }));
  }
};

export const cancelReservationByEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const { code } = req.query;

    if (!id || !code) {
      return res.status(400).send(buildStatusPage({
        title: 'Reserva nao encontrada',
        message: 'O link informado esta incompleto.'
      }));
    }

    const result = await cancelReservationByCode({ id, code: String(code) });
    if (!result.ok) {
      return res.status(404).send(buildStatusPage({
        title: 'Reserva nao encontrada',
        message: result.reason
      }));
    }

    return res.send(buildStatusPage({
      title: 'Reserva cancelada',
      message: 'Sua reserva foi cancelada com sucesso.'
    }));
  } catch (error) {
    return res.status(500).send(buildStatusPage({
      title: 'Erro ao cancelar',
      message: 'Nao foi possivel cancelar a reserva agora.'
    }));
  }
};
