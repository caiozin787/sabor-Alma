import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export default function Reservations() {
  const [loading, setLoading] = useState(false);
  const [reservationCode, setReservationCode] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
    '22:30', '23:00',
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedTime) {
      toast.error('Selecione um horario para a reserva.');
      return;
    }

    if (!timeSlots.includes(selectedTime)) {
      toast.error('Horario selecionado invalido.');
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email') || '').trim();
    const date = String(formData.get('date') || '').trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('Email invalido.');
      setLoading(false);
      return;
    }

    if (!date) {
      toast.error('Informe a data da reserva.');
      setLoading(false);
      return;
    }

    const reservationDateTime = new Date(`${date}T${selectedTime}:00`);
    if (Number.isNaN(reservationDateTime.getTime())) {
      toast.error('Data ou horario invalido.');
      setLoading(false);
      return;
    }

    if (reservationDateTime < new Date()) {
      toast.error('Data ou horario no passado.');
      setLoading(false);
      return;
    }
    const data = {
      name: formData.get('name'),
      email,
      phone: formData.get('phone'),
      date,
      time: selectedTime,
      guests: Number(formData.get('guests')),
      notes: formData.get('notes'),
    };

    try {
      const response = await fetch('http://localhost:3001/api/v1/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setReservationCode(result.confirmation_code);
        toast.success('Reserva confirmada com sucesso!');
      } else {
        toast.error(result.error || 'Erro ao realizar reserva.');
      }
    } catch (error) {
      toast.error('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  if (reservationCode) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl font-serif text-neutral-900 mb-6">Reserva Confirmada!</h2>
        <div className="bg-amber-50 p-8 rounded-lg border border-amber-200">
          <p className="text-xl mb-4">Seu código de confirmação é:</p>
          <p className="text-4xl font-mono font-bold text-amber-600 tracking-wider bg-white py-4 rounded-md shadow-sm mb-6">
            {reservationCode}
          </p>
          <p className="text-neutral-600 mb-8">
            Aguardamos você! Um e-mail com os detalhes também será enviado.
          </p>
          <Button onClick={() => setReservationCode(null)} variant="outline" className="w-full sm:w-auto">
            Fazer Nova Reserva
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif text-neutral-900 mb-4">Reserve sua Mesa</h1>
        <p className="text-neutral-600">Garanta seu lugar no Restaurante Sabor & Alma.</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo</Label>
              <Input id="name" name="name" required placeholder="Ex: João da Silva" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" name="email" type="email" required placeholder="joao@exemplo.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input id="phone" name="phone" required placeholder="(+351) 000 000 000" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Número de Pessoas</Label>
              <Input id="guests" name="guests" type="number" min="1" max="20" required defaultValue="2" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Data da Reserva</Label>
              <Input id="date" name="date" type="date" required />
            </div>

            <div className="space-y-2">
              <Label>Horário</Label>
              <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
                <button
                  type="button"
                  onClick={() => setIsTimeOpen((prev) => !prev)}
                  className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-left text-sm font-medium text-neutral-700 hover:border-amber-400"
                  aria-expanded={isTimeOpen}
                >
                  {selectedTime ? `Horario selecionado: ${selectedTime}` : 'Clique para escolher o horario'}
                </button>

                {isTimeOpen ? (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setSelectedTime(time);
                          setIsTimeOpen(false);
                        }}
                        aria-pressed={selectedTime === time}
                        className={
                          selectedTime === time
                            ? 'w-full rounded-md border border-amber-600 bg-amber-600 text-white px-2 py-2 text-sm font-semibold shadow-sm'
                            : 'w-full rounded-md border border-neutral-200 bg-white text-neutral-700 px-2 py-2 text-sm font-medium hover:border-amber-400 hover:text-amber-700'
                        }
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : null}
                <p className="mt-2 text-xs text-neutral-500">Almoco: 12h - 15h. Jantar: 19h - 23h.</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Observações (Opcional)</Label>
            <Textarea 
              id="notes" 
              name="notes" 
              placeholder="Alérgias, comemorações especiais, necessidade de acessibilidade..." 
              className="resize-none h-24"
            />
          </div>

          <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white" disabled={loading}>
            {loading ? 'Processando...' : 'Confirmar Reserva'}
          </Button>
        </form>
      </div>
    </div>
  );
}
