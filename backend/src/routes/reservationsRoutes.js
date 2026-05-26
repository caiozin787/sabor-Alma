import { Router } from 'express';
import {
  cancelReservationByEmail,
  deleteReservation,
  confirmReservationByEmail,
  getAvailability,
  getReservations,
  postReservation,
  sendAdminTestEmail,
  putReservationStatus
} from '../controllers/reservationsController.js';

const router = Router();

router.get('/availability', getAvailability);
router.get('/reservations', getReservations);
router.get('/admin/email-test', sendAdminTestEmail);
router.post('/reservations', postReservation);
router.put('/reservations/:id/status', putReservationStatus);
router.delete('/reservations/:id', deleteReservation);
router.get('/reservations/:id/confirm', confirmReservationByEmail);
router.get('/reservations/:id/cancel', cancelReservationByEmail);

export default router;
