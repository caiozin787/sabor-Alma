import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Check, X, Clock, Users, Calendar, CheckCircle, TrendingUp, XCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

interface Reservation {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  reservation_date: string;
  reservation_time: string;
  guests: number;
  status: string;
  confirmation_code: string;
}

interface Analytics {
  total: number;
  active: number;
  cancelled: number;
}

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [analytics, setAnalytics] = useState<Analytics>({ total: 0, active: 0, cancelled: 0 });
  const [loading, setLoading] = useState(true);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/reservations');
      if (response.ok) {
        const data = await response.json();
        const items = data.reservations || [];
        setReservations(items);
        const total = items.length;
        const active = items.filter((item: Reservation) => item.status === 'PENDING' || item.status === 'CONFIRMED').length;
        const cancelled = items.filter((item: Reservation) => item.status === 'CANCELLED').length;
        setAnalytics({ total, active, cancelled });
      } else {
        toast.error('Erro ao carregar dados do dashboard.');
      }
    } catch (error) {
      toast.error('Erro de conexão com a API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const updateReservationStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        toast.success(`Reserva atualizada para ${status}.`);
        fetchDashboardData(); // Recarregar dados
      } else {
        toast.error('Erro ao atualizar reserva.');
      }
    } catch (error) {
      toast.error('Erro de conexão com a API.');
    }
  };

  const cancelReservation = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        toast.success('Reserva cancelada.');
        fetchDashboardData();
      } else {
        toast.error('Erro ao cancelar reserva.');
      }
    } catch (error) {
      toast.error('Erro de conexão com a API.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED': return 'bg-green-100 text-green-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="p-20 text-center text-xl">Carregando painel...</div>;
  }

  // Dashboard calculations
  const totalReservations = reservations.length;
  const activeReservations = analytics.active;
  const cancelledReservations = analytics.cancelled;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-serif text-neutral-900 mb-2">Painel Administrativo</h1>
        <p className="text-neutral-600">Gerencie as reservas e visualize a ocupação das mesas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 font-medium">Total de Reservas</p>
            <p className="text-2xl font-bold">{totalReservations}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-center gap-4">
          <div className="p-3 bg-yellow-100 text-yellow-700 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 font-medium">Reservas Ativas</p>
            <p className="text-2xl font-bold">{activeReservations}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-center gap-4">
          <div className="p-3 bg-red-100 text-red-700 rounded-lg">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 font-medium">Canceladas</p>
            <p className="text-2xl font-bold">{cancelledReservations}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex items-center gap-4">
          <div className="p-3 bg-purple-100 text-purple-700 rounded-lg">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-neutral-500 font-medium">Reservas Confirmadas</p>
            <p className="text-2xl font-bold">{reservations.filter(r => r.status === 'CONFIRMED').length}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista de Reservas */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Reservas Recentes</h2>
          
          {reservations.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-sm text-center text-neutral-500">
              Nenhuma reserva encontrada.
            </div>
          ) : (
            reservations.map((res) => (
              <div key={res.id} className="bg-white p-6 rounded-lg shadow-sm border border-neutral-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{res.customer_name}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${getStatusColor(res.status)}`}>
                      {res.status === 'PENDING' ? 'PENDENTE' :
                       res.status === 'CONFIRMED' ? 'CONFIRMADO' :
                       res.status === 'CANCELLED' ? 'CANCELADO' : res.status}
                    </span>
                    <span className="text-xs font-mono bg-neutral-100 px-2 py-1 rounded border border-neutral-200">
                      #{res.confirmation_code}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {res.reservation_date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {res.reservation_time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" /> {res.guests} Pessoas
                    </div>
                    <div className="flex items-center gap-2">
                      Email: {res.customer_email}
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                  {res.status === 'PENDING' && (
                    <>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
                        onClick={() => updateReservationStatus(res.id, 'CONFIRMED')}
                      >
                        <Check className="w-4 h-4 mr-1" /> Confirmar
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        className="w-full sm:w-auto"
                        onClick={() => cancelReservation(res.id)}
                      >
                        <X className="w-4 h-4 mr-1" /> Cancelar
                      </Button>
                    </>
                  )}
                  {res.status === 'CONFIRMED' && (
                    <Button 
                      size="sm" 
                      variant="destructive"
                      className="w-full sm:w-auto"
                      onClick={() => cancelReservation(res.id)}
                    >
                      <X className="w-4 h-4 mr-1" /> Cancelar
                    </Button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
