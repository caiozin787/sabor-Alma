import 'dotenv/config';

const required = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
};

const allowedTimes = (process.env.RESERVATION_ALLOWED_TIMES || '')
  .split(',')
  .map((time) => time.trim())
  .filter(Boolean);

export const env = {
  port: Number(process.env.RESERVATION_PORT || 3001),
  frontendUrl: process.env.RESERVATION_FRONTEND_URL || '',
  publicUrl: process.env.RESERVATION_PUBLIC_URL || '',
  timezone: process.env.RESERVATION_TIMEZONE || 'America/Sao_Paulo',
  maxGuestsPerSlot: Number(process.env.RESERVATION_MAX_GUESTS_PER_SLOT || 40),
  allowedTimes: allowedTimes.length
    ? allowedTimes
    : [
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
        '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
        '22:30', '23:00'
      ],
  supabaseUrl: required('SUPABASE_URL'),
  supabaseServiceRoleKey: required('SUPABASE_SERVICE_ROLE_KEY'),
  resendApiKey: required('RESEND_API_KEY'),
  resendFrom: required('RESEND_FROM')
};
