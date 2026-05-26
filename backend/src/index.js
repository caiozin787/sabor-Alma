import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { env } from './config/env.js';
import reservationsRoutes from './routes/reservationsRoutes.js';
import { setSocketServer } from './lib/socket.js';

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

const httpServer = http.createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: env.frontendUrl || true
  }
});

setSocketServer(io);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // noop
  });
});

httpServer.listen(env.port, () => {
  console.log(`Reservation API running on http://localhost:${env.port}`);
});
