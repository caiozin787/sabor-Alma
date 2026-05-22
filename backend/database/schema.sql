-- Supabase SQL
create extension if not exists "pgcrypto";

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  reservation_date date not null,
  reservation_time time not null,
  guests integer not null,
  notes text,
  status text not null default 'CONFIRMED',
  confirmation_code text not null,
  created_at timestamptz not null default now(),
  cancelled_at timestamptz
);

create index if not exists reservations_date_time_idx
  on public.reservations (reservation_date, reservation_time);

create index if not exists reservations_status_idx
  on public.reservations (status);
