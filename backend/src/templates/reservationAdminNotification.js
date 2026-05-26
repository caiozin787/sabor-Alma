export const buildAdminReservationEmail = ({
  name,
  email,
  phone,
  date,
  time,
  guests,
  notes,
  reservationId
}) => {
  return {
    subject: 'Nova reserva recebida - Sabor & Alma',
    html: `
      <div style="font-family: Arial, sans-serif; background: #f8f7f4; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #f1e6d2;">
          <h1 style="margin: 0 0 12px; color: #5a3b1e; font-size: 22px;">Nova reserva recebida</h1>
          <p style="margin: 0 0 16px; color: #6b7280; font-size: 14px;">Detalhes da reserva:</p>
          <div style="background: #fff7ed; padding: 16px; border-radius: 10px; border: 1px solid #fde5c4;">
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Cliente</p>
            <p style="margin: 0 0 12px; font-size: 16px; color: #111827;">${name}</p>
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Contato</p>
            <p style="margin: 0 0 12px; font-size: 16px; color: #111827;">${email || '-'} | ${phone || '-'}</p>
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Data e horario</p>
            <p style="margin: 0 0 12px; font-size: 16px; color: #111827;">${date} as ${time}</p>
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Pessoas</p>
            <p style="margin: 0 0 12px; font-size: 16px; color: #111827;">${guests}</p>
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Observacoes</p>
            <p style="margin: 0; font-size: 14px; color: #111827;">${notes || 'Sem observacoes'}</p>
          </div>
          <p style="margin: 16px 0 0; color: #6b7280; font-size: 12px;">ID da reserva: ${reservationId}</p>
        </div>
      </div>
    `
  };
};
