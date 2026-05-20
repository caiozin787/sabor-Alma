import { Users, Award, Heart, TrendingUp, Leaf, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const values = [
    { icon: Heart, title: 'Paixão', description: 'Amor pela culinária em cada prato preparado' },
    { icon: Award, title: 'Excelência', description: 'Compromisso com a qualidade superior' },
    { icon: Leaf, title: 'Sustentabilidade', description: 'Ingredientes orgânicos e fornecedores locais' },
    { icon: Globe, title: 'Diversidade', description: 'Inspirações culinárias de todo o mundo' },
  ];

  const team = [
    { name: 'Chef Caio Santos', role: 'Chef Executivo', description: '20 anos de experiência em restaurantes estrelados na Europa' },
    { name: 'Chef João Lucas', role: 'Sous Chef', description: 'Especialista em culinária contemporânea brasileira' },
    { name: 'Deficiente Anthony Soares', role: 'Deficiente', description: 'Curador de nossa carta de vinhos premiada' },
  ];

  const timeline = [
    { year: '2010', event: 'Fundação', description: 'Abertura do Sabor & Alma com um sonho e muita dedicação' },
    { year: '2013', event: 'Primeira Estrela', description: 'Reconhecimento pelo Guia Gastronômico Nacional' },
    { year: '2016', event: 'Expansão', description: 'Renovação completa do espaço e ampliação da cozinha' },
    { year: '2020', event: 'Prêmio de Excelência', description: 'Eleito melhor restaurante da região' },
    { year: '2024', event: '5 Estrelas', description: 'Conquista da classificação máxima em qualidade' },
    { year: '2026', event: 'Presente', description: 'Continuamos nossa jornada de inovação e excelência' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1643757343278-5d50309dfa44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Sobre o restaurante"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Nossa História</h1>
          <p className="text-xl text-neutral-200">Uma jornada de sabor, paixão e dedicação</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-neutral-900 mb-6">O Início de Uma Paixão</h2>
              <p className="text-neutral-700 mb-4">
                O <strong>Sabor & Alma</strong> nasceu em 2010 do sonho de criar um espaço onde a gastronomia
                fosse mais do que apenas alimentação - um lugar onde cada refeição se tornasse uma experiência
                memorável e transformadora.
              </p>
              <p className="text-neutral-700 mb-4">
                Fundado pelo renomado Chef Alessandro Martini, que trouxe sua vasta experiência de restaurantes
                estrelados na Europa, nosso restaurante rapidamente se tornou referência em alta gastronomia.
              </p>
              <p className="text-neutral-700 mb-4">
                Ao longo dos anos, mantivemos nosso compromisso inabalável com a excelência, inovação e
                hospitalidade genuína. Cada prato que sai de nossa cozinha é preparado com ingredientes
                cuidadosamente selecionados e técnicas refinadas.
              </p>
              <p className="text-neutral-700">
                Hoje, com mais de 15 anos de história, continuamos a surpreender e encantar nossos clientes,
                sempre buscando a perfeição em cada detalhe.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1757358976795-280d3b44bc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Chef preparando"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1757358961768-721e850416ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Prato sendo preparado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg -mt-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1757358955539-de14567f6a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Molho sendo servido"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1757358973365-af35f16722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Sobremesa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-neutral-900 mb-4">Nossos Valores</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Princípios que guiam cada decisão e ação em nosso restaurante
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-neutral-900">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <Users className="w-6 h-6" />
              <span className="text-sm tracking-widest uppercase">Nossa Equipe</span>
            </div>
            <h2 className="text-4xl font-serif text-neutral-900 mb-4">Conheça Quem Faz Acontecer</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Profissionais apaixonados e dedicados à arte da gastronomia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 rounded-full bg-neutral-200 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-24 h-24 text-neutral-400" />
                </div>
                <h3 className="font-semibold text-xl mb-1 text-neutral-900">{member.name}</h3>
                <p className="text-amber-600 mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <TrendingUp className="w-6 h-6" />
              <span className="text-sm tracking-widest uppercase">Nossa Jornada</span>
            </div>
            <h2 className="text-4xl font-serif text-neutral-900 mb-4">Linha do Tempo</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-300"></div>

            {timeline.map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'} md:w-1/2`}>
                <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 md:block hidden">
                    <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white"></div>
                  </div>
                  <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {item.year}
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-neutral-900">{item.event}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-amber-100">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-amber-100">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-amber-100">Pratos Únicos</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-amber-100">Prêmios Conquistados</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
