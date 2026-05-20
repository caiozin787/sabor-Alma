import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let db;

async function setupDatabase() {
  db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });

  // Criando tabelas baseadas no spec do SDD-014 - Fase 1
  await db.exec(`
    CREATE TABLE IF NOT EXISTS restaurant_tables (
      id TEXT PRIMARY KEY,
      table_number INTEGER,
      capacity INTEGER,
      location TEXT,
      status TEXT DEFAULT 'AVAILABLE'
    );

    CREATE TABLE IF NOT EXISTS reservations (
      id TEXT PRIMARY KEY,
      customer_name TEXT,
      customer_email TEXT,
      customer_phone TEXT,
      reservation_date TEXT,
      reservation_time TEXT,
      guests INTEGER,
      notes TEXT,
      status TEXT DEFAULT 'PENDING',
      table_id TEXT,
      confirmation_code TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(table_id) REFERENCES restaurant_tables(id)
    );
  `);

  // Popular mesas iniciais se não existirem
  const tableCount = await db.get('SELECT COUNT(*) as count FROM restaurant_tables');
  if (tableCount.count === 0) {
    const tables = [
      { id: uuidv4(), num: 1, cap: 2, loc: 'Janela' },
      { id: uuidv4(), num: 2, cap: 2, loc: 'Janela' },
      { id: uuidv4(), num: 3, cap: 4, loc: 'Centro' },
      { id: uuidv4(), num: 4, cap: 4, loc: 'Centro' },
      { id: uuidv4(), num: 5, cap: 6, loc: 'Terraço' },
      { id: uuidv4(), num: 6, cap: 8, loc: 'Sala Privativa' }
    ];
    for (const t of tables) {
      await db.run('INSERT INTO restaurant_tables (id, table_number, capacity, location) VALUES (?, ?, ?, ?)', [t.id, t.num, t.cap, t.loc]);
    }
    console.log('Mesas iniciais criadas com sucesso.');
  }
}

setupDatabase().catch(err => console.error("Database setup failed:", err));

// Endpoints da Fase 1 do SDD

// 1. Verificar disponibilidade
app.get('/api/v1/availability', async (req, res) => {
  const { date, guests } = req.query;
  try {
    // Para simplificar a lógica inicial do MVP: Retorna mesas que comportam a quantidade de convidados
    // Em uma versão futura consideraremos os horários e duração de 90/120min
    const tables = await db.all('SELECT * FROM restaurant_tables WHERE capacity >= ? AND status = "AVAILABLE" ORDER BY capacity ASC', [guests || 1]);
    res.json({ available_tables: tables });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Criar reserva
app.post('/api/v1/reservations', async (req, res) => {
  const { name, email, phone, date, time, guests, notes } = req.body;

  if (!name || !email || !date || !time || !guests) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
  }

  try {
    // Alocar a mesa mais apropriada (capacidade >= convidados, ordenado pela menor mesa possível)
    const tableInfo = await db.get('SELECT id FROM restaurant_tables WHERE capacity >= ? AND status = "AVAILABLE" ORDER BY capacity ASC LIMIT 1', [guests]);
    
    if (!tableInfo) {
      return res.status(400).json({ error: 'Nenhuma mesa disponível para esta capacidade de convidados.' });
    }

    const id = uuidv4();
    const confirmation_code = Math.random().toString(36).substring(2, 8).toUpperCase();
    
    await db.run(
      'INSERT INTO reservations (id, customer_name, customer_email, customer_phone, reservation_date, reservation_time, guests, notes, table_id, confirmation_code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [id, name, email, phone, date, time, guests, notes, tableInfo.id, confirmation_code]
    );

    res.status(201).json({ 
      message: 'Reserva criada com sucesso', 
      confirmation_code,
      assigned_table_id: tableInfo.id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Atualizar/Cancelar Reserva (Simples)
app.put('/api/v1/reservations/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // ex: CHECKED_IN, CANCELLED, COMPLETED
  try {
    const reservation = await db.get('SELECT table_id FROM reservations WHERE id = ?', [id]);
    if (!reservation) {
      return res.status(404).json({ error: 'Reserva não encontrada' });
    }

    await db.run('UPDATE reservations SET status = ? WHERE id = ?', [status, id]);

    // Lógica de gerenciar status da mesa
    if (status === 'CHECKED_IN') {
      await db.run('UPDATE restaurant_tables SET status = "OCCUPIED" WHERE id = ?', [reservation.table_id]);
    } else if (status === 'CANCELLED' || status === 'COMPLETED') {
      await db.run('UPDATE restaurant_tables SET status = "AVAILABLE" WHERE id = ?', [reservation.table_id]);
    }

    res.json({ message: 'Status da reserva atualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Endpoints de Admin e Analytics
app.get('/api/v1/admin/dashboard', async (req, res) => {
  try {
    const reservations = await db.all(`
      SELECT r.*, t.table_number, t.location 
      FROM reservations r 
      LEFT JOIN restaurant_tables t ON r.table_id = t.id
      ORDER BY r.reservation_date, r.reservation_time ASC
    `);
    const tables = await db.all('SELECT * FROM restaurant_tables');
    
    // Métricas
    const totalReservations = await db.get('SELECT COUNT(*) as count FROM reservations');
    const checkedIn = await db.get('SELECT COUNT(*) as count FROM reservations WHERE status = "CHECKED_IN"');
    const cancelled = await db.get('SELECT COUNT(*) as count FROM reservations WHERE status = "CANCELLED"');

    res.json({ 
      reservations, 
      tables,
      analytics: {
        total: totalReservations.count,
        active: checkedIn.count,
        cancelled: cancelled.count
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Reservation API v1 running on http://localhost:${port}`);
});
