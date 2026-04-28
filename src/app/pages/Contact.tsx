import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle, Calendar, Users } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-amber-600 to-amber-700">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Contato & Reservas</h1>
          <p className="text-xl text-amber-100">Estamos ansiosos para recebê-lo</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif text-neutral-900 mb-8">Informações de Contato</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-1">Endereço</h3>
                    <p className="text-neutral-700">Av. Paulista, 1000</p>
                    <p className="text-neutral-700">Bela Vista - São Paulo, SP</p>
                    <p className="text-neutral-700">CEP 01310-100</p>
                    <a href="#" className="text-amber-600 hover:text-amber-700 text-sm mt-2 inline-block">
                      Ver no mapa →
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-1">Horário de Funcionamento</h3>
                    <p className="text-neutral-700">Terça a Quinta: 12h - 15h | 19h - 23h</p>
                    <p className="text-neutral-700">Sexta e Sábado: 12h - 15h | 19h - 00h</p>
                    <p className="text-neutral-700">Domingo: 12h - 17h</p>
                    <p className="text-red-600 mt-2">Segunda-feira: Fechado</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-1">Telefone</h3>
                    <p className="text-neutral-700">(11) 3456-7890</p>
                    <p className="text-neutral-700">(11) 98765-4321 (WhatsApp)</p>
                    <p className="text-neutral-600 text-sm mt-2">
                      Atendimento: Ter-Dom, 11h-22h
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900 mb-1">E-mail</h3>
                    <p className="text-neutral-700">contato@saborealma.com.br</p>
                    <p className="text-neutral-700">reservas@saborealma.com.br</p>
                    <p className="text-neutral-600 text-sm mt-2">
                      Respondemos em até 24 horas
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-neutral-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Mapa Interativo</p>
                  <p className="text-sm">Av. Paulista, 1000 - São Paulo</p>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <h2 className="text-3xl font-serif text-neutral-900 mb-8">Faça sua Reserva</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-900 mb-2">Reserva Enviada!</h3>
                  <p className="text-green-700">
                    Obrigado! Entraremos em contato em breve para confirmar sua reserva.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                        placeholder="(11) 98765-4321"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="date" className="block text-sm font-semibold text-neutral-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        Data *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-neutral-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Horário *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      >
                        <option value="">Selecione</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-semibold text-neutral-700 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      Número de Pessoas *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'pessoa' : 'pessoas'}
                        </option>
                      ))}
                      <option value="10+">Mais de 10 pessoas</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Observações
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent resize-none"
                      placeholder="Alguma preferência especial, restrição alimentar ou pedido especial?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 text-white px-6 py-4 rounded-lg hover:bg-amber-700 transition flex items-center justify-center gap-2 font-semibold text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Reserva
                  </button>

                  <p className="text-sm text-neutral-600 text-center">
                    * Campos obrigatórios. Você receberá uma confirmação por e-mail em até 24 horas.
                  </p>
                </form>
              )}

              {/* Additional Info */}
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-3">Política de Reservas</h3>
                <ul className="text-sm text-neutral-700 space-y-2">
                  <li>• Reservas para grupos acima de 10 pessoas, favor ligar diretamente</li>
                  <li>• Tolerância de 15 minutos de atraso para manter a reserva</li>
                  <li>• Cancelamentos devem ser feitos com 24h de antecedência</li>
                  <li>• Eventos especiais e feriados podem ter condições diferenciadas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
