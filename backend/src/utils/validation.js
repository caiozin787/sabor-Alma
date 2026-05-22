import { z } from 'zod';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { env } from '../config/env.js';

dayjs.extend(utc);
dayjs.extend(timezone);

export const reservationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  guests: z.preprocess((value) => Number(value), z.number().int().min(1).max(20)),
  notes: z.string().optional().nullable()
});

export const validateReservationTime = ({ date, time }) => {
  if (!env.allowedTimes.includes(time)) {
    return { ok: false, reason: 'Horario indisponivel.' };
  }

  const reservationMoment = dayjs.tz(`${date} ${time}`, 'YYYY-MM-DD HH:mm', env.timezone);
  if (!reservationMoment.isValid()) {
    return { ok: false, reason: 'Data ou horario invalido.' };
  }

  const now = dayjs().tz(env.timezone);
  if (reservationMoment.isBefore(now)) {
    return { ok: false, reason: 'Data ou horario no passado.' };
  }

  return { ok: true };
};
