import { Link } from 'react-router';
import { ArrowRight, Star, UtensilsCrossed, ChefHat, Clock, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Home() {
  const features = [
    { icon: Star, title: 'Qualidade Premium', description: 'Ingredientes selecionados e de primeira qualidade' },
    { icon: ChefHat, title: 'Chef Renomado', description: 'Equipe premiada com 15 anos de experiência' },
    { icon: Clock, title: 'Atendimento Impecável', description: 'Serviço atencioso e acolhedor' },
    { icon: Award, title: '5 Estrelas', description: 'Reconhecido pelos melhores guias gastronômicos' },
  ];

  const specialties = [
    {
      name: 'Filé Mignon Premium',
      description: 'Nosso prato mais famoso, preparado ao ponto perfeito',
      image: 'https://images.unsplash.com/photo-1757358957218-67e771ec07bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Risoto de Camarão',
      description: 'Cremoso e aromático, com camarões frescos do dia',
      image: 'https://images.unsplash.com/photo-1757358947283-b0802b5cfdeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sobremesa Artesanal',
      description: 'Criações únicas do nosso chef pâtissier',
      image: 'https://images.unsplash.com/photo-1757358967353-0a256c8f8f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757358938541-c56a0c7c5846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Prato gourmet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-6 text-amber-400">
            <Heart className="w-6 h-6" />
            <span className="text-sm tracking-widest uppercase">Experiência Gastronômica</span>
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif mb-6">Sabor & Alma</h2>
          <p className="text-xl md:text-2xl mb-4 text-neutral-200">Onde a culinária se encontra com a arte</p>
          <p className="text-lg mb-10 text-neutral-300 max-w-2xl mx-auto">
            Uma jornada sensorial através de sabores autênticos, preparados com paixão e técnica impecável
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cardapio"
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg hover:bg-amber-700 transition flex items-center justify-center gap-2"
            >
              Ver Cardápio
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/reservas"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition border border-white/30"
            >
              Fazer Reserva
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-neutral-900 mb-4">Por que nos escolher</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Dedicação em cada detalhe para proporcionar uma experiência única e memorável
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-600 transition">
                  <feature.icon className="w-8 h-8 text-amber-600 group-hover:text-white transition" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <UtensilsCrossed className="w-6 h-6" />
              <span className="text-sm tracking-widest uppercase">Destaques</span>
            </div>
            <h2 className="text-4xl font-serif text-neutral-900 mb-4">Especialidades da Casa</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Pratos exclusivos que conquistaram o coração de nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <ImageWithFallback
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-neutral-900">{specialty.name}</h3>
                <p className="text-neutral-600">{specialty.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/cardapio"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
            >
              Ver cardápio completo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-neutral-900 mb-4">O que dizem nossos clientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Maria Silva', text: 'Experiência incrível! A comida é divina e o atendimento impecável. Voltarei com certeza!', rating: 5 },
              { name: 'João Santos', text: 'Melhor risoto de camarão que já provei. Ambiente sofisticado e acolhedor.', rating: 5 },
              { name: 'Ana Costa', text: 'Cada prato é uma obra de arte. O chef realmente sabe o que faz. Recomendo!', rating: 5 },
            ].map((testimonial, index) => (
              <div key={index} className="bg-neutral-50 p-8 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-neutral-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">Pronto para uma experiência única?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Faça sua reserva agora e garanta sua mesa em um dos restaurantes mais exclusivos da cidade
          </p>
          <Link
            to="/reservas"
            className="inline-block bg-white text-amber-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-neutral-100 transition"
          >
            Reservar Agora
          </Link>
        </div>
      </section>
    </div>
  );
}
