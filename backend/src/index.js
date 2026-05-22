import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import reservationsRoutes from './routes/reservationsRoutes.js';

const app = express();

app.use(
  cors({
    origin: env.frontendUrl || true
  })
);
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/v1', reservationsRoutes);

app.listen(env.port, () => {
  console.log(`Reservation API running on http://localhost:${env.port}`);
});
