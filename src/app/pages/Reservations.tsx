import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export default function Reservations() {
  const [loading, setLoading] = useState(false);
  const [reservationCode, setReservationCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      time: formData.get('time'),
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
              <Label htmlFor="time">Horário</Label>
              <Input id="time" name="time" type="time" required />
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
