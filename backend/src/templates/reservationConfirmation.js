export const buildReservationEmail = ({
  name,
  date,
  time,
  guests,
  confirmationCode,
  confirmUrl,
  cancelUrl
}) => {
  return {
    subject: 'Reserva confirmada - Sabor & Alma',
    html: `
      <div style="font-family: Arial, sans-serif; background: #f8f7f4; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 24px; border: 1px solid #f1e6d2;">
          <h1 style="margin: 0 0 12px; color: #5a3b1e; font-size: 24px;">Reserva confirmada</h1>
          <p style="margin: 0 0 16px; color: #6b7280; font-size: 14px;">Ola ${name}, sua reserva foi registrada com sucesso.</p>
          <div style="background: #fff7ed; padding: 16px; border-radius: 10px; border: 1px solid #fde5c4;">
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Data</p>
            <p style="margin: 0 0 12px; font-size: 16px; color: #111827;">${date}</p>
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Horario</p>
            <p style="margin: 0 0 12px; font-size: 16px; color: #111827;">${time}</p>
            <p style="margin: 0 0 6px; color: #6b7280; font-size: 13px;">Pessoas</p>
            <p style="margin: 0; font-size: 16px; color: #111827;">${guests}</p>
          </div>
          <div style="margin-top: 16px; padding: 12px; background: #f9fafb; border-radius: 8px;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">Codigo da reserva</p>
            <p style="margin: 4px 0 0; font-size: 18px; color: #b45309; letter-spacing: 1px;">${confirmationCode}</p>
          </div>
          <div style="margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="${confirmUrl}" style="display:inline-block; padding:10px 14px; background:#16a34a; color:#ffffff; text-decoration:none; border-radius:8px; font-size:13px;">
              Confirmar reserva
            </a>
            <a href="${cancelUrl}" style="display:inline-block; padding:10px 14px; background:#ef4444; color:#ffffff; text-decoration:none; border-radius:8px; font-size:13px;">
              Cancelar reserva
            </a>
          </div>
          <p style="margin: 16px 0 0; color: #6b7280; font-size: 12px;">Se precisar de ajuda, responda este email.</p>
        </div>
      </div>
    `
  };
};
