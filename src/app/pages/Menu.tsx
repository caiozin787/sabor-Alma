import { useState } from 'react';
import { Wine, Coffee, Flame, Leaf, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('entradas');

  const menuItems = {
    entradas: [
      {
        name: 'Carpaccio de Salmão',
        description: 'Lâminas finas de salmão fresco com alcaparras, rúcula selvagem e azeite trufado',
        price: 'R$ 42,00',
        tags: ['Recomendado', 'Sem Glúten'],
        spicy: false
      },
      {
        name: 'Bruschetta Italiana',
        description: 'Pão artesanal torrado com tomate concassé, manjericão fresco e queijo burrata importado',
        price: 'R$ 28,00',
        tags: ['Vegetariano'],
        spicy: false
      },
      {
        name: 'Camarão ao Alho',
        description: 'Camarões rosa salteados em azeite de alho defumado com pimenta calabresa e limão siciliano',
        price: 'R$ 48,00',
        tags: ['Picante'],
        spicy: true
      },
      {
        name: 'Tábua de Frios Artesanais',
        description: 'Seleção de queijos artesanais, frios nobres europeus, geleias caseiras, frutas secas e pães',
        price: 'R$ 65,00',
        tags: ['Para Compartilhar'],
        spicy: false
      },
      {
        name: 'Ostras Frescas',
        description: 'Meia dúzia de ostras frescas servidas com molho mignonette e limão',
        price: 'R$ 58,00',
        tags: ['Premium'],
        spicy: false
      },
      {
        name: 'Vieiras Grelhadas',
        description: 'Vieiras seladas com purê de ervilhas e crispy de bacon',
        price: 'R$ 52,00',
        tags: ['Chef Recomenda'],
        spicy: false
      },
    ],
    principais: [
      {
        name: 'Filé Mignon ao Molho Madeira',
        description: 'Filé mignon argentino grelhado ao ponto com molho madeira, batatas rústicas e legumes da estação',
        price: 'R$ 78,00',
        tags: ['Mais Pedido', 'Premium'],
        spicy: false
      },
      {
        name: 'Risoto de Camarão',
        description: 'Risoto cremoso de arroz arbóreo com camarões rosa frescos, tomate seco e raspas de parmesão reggiano',
        price: 'R$ 68,00',
        tags: ['Especialidade'],
        spicy: false
      },
      {
        name: 'Salmão Grelhado',
        description: 'Filé de salmão norueguês grelhado com molho de maracujá, quinoa tricolor e aspargos',
        price: 'R$ 72,00',
        tags: ['Saudável', 'Sem Glúten'],
        spicy: false
      },
      {
        name: 'Massa ao Funghi Porcini',
        description: 'Tagliatelle caseiro com cogumelos porcini selvagens e creme de trufas negras',
        price: 'R$ 58,00',
        tags: ['Vegetariano', 'Premium'],
        spicy: false
      },
      {
        name: 'Cordeiro Confitado',
        description: 'Carré de cordeiro confitado com crosta de ervas, purê de batata-doce e redução de vinho tinto',
        price: 'R$ 85,00',
        tags: ['Premium', 'Chef Recomenda'],
        spicy: false
      },
      {
        name: 'Peixe do Dia',
        description: 'Pescado fresco do dia preparado com molho especial do chef (consulte nosso garçom)',
        price: 'R$ 68,00',
        tags: ['Fresco'],
        spicy: false
      },
      {
        name: 'Magret de Pato',
        description: 'Peito de pato selado com molho de laranja e gengibre, polenta cremosa',
        price: 'R$ 76,00',
        tags: ['Premium'],
        spicy: false
      },
      {
        name: 'Ossobuco',
        description: 'Ossobuco bovino braseado por 8 horas com risoto milanês',
        price: 'R$ 82,00',
        tags: ['Especialidade'],
        spicy: false
      },
    ],
    sobremesas: [
      {
        name: 'Petit Gâteau',
        description: 'Bolo quente de chocolate belga com recheio cremoso, acompanhado de sorvete de baunilha Madagascar',
        price: 'R$ 28,00',
        tags: ['Mais Pedido'],
        spicy: false
      },
      {
        name: 'Tiramisù Clássico',
        description: 'Tradicional sobremesa italiana com camadas de café expresso, mascarpone e cacau',
        price: 'R$ 26,00',
        tags: ['Tradicional'],
        spicy: false
      },
      {
        name: 'Cheesecake de Frutas Vermelhas',
        description: 'Cheesecake cremoso de baunilha com calda de frutas vermelhas frescas e coulis',
        price: 'R$ 24,00',
        tags: ['Leve'],
        spicy: false
      },
      {
        name: 'Panna Cotta',
        description: 'Panna cotta de baunilha com redução de frutas cítricas e hortelã',
        price: 'R$ 22,00',
        tags: ['Refrescante'],
        spicy: false
      },
      {
        name: 'Brownie com Sorvete',
        description: 'Brownie caseiro de chocolate com nozes, sorvete de pistache e calda quente',
        price: 'R$ 26,00',
        tags: ['Indulgente'],
        spicy: false
      },
      {
        name: 'Crème Brûlée',
        description: 'Creme de baunilha com crosta caramelizada e frutas frescas',
        price: 'R$ 24,00',
        tags: ['Clássico'],
        spicy: false
      },
    ],
    bebidas: [
      {
        name: 'Vinho Tinto Reserva',
        description: 'Seleção premium de vinhos tintos (Malbec, Cabernet Sauvignon, Merlot)',
        price: 'R$ 32,00 / R$ 145,00',
        tags: ['Carta Completa'],
        spicy: false
      },
      {
        name: 'Vinho Branco',
        description: 'Vinhos brancos selecionados (Chardonnay, Sauvignon Blanc, Riesling)',
        price: 'R$ 28,00 / R$ 125,00',
        tags: [],
        spicy: false
      },
      {
        name: 'Espumante Brut',
        description: 'Espumantes brasileiros e importados',
        price: 'R$ 35,00 / R$ 160,00',
        tags: ['Celebração'],
        spicy: false
      },
      {
        name: 'Champagne',
        description: 'Champagnes franceses premium (Moët, Veuve Clicquot, Dom Pérignon)',
        price: 'A partir de R$ 380,00',
        tags: ['Premium'],
        spicy: false
      },
      {
        name: 'Drinks Autorais',
        description: 'Criações exclusivas do nosso mixologista (consulte nosso bar menu especial)',
        price: 'A partir de R$ 24,00',
        tags: ['Exclusivo'],
        spicy: false
      },
      {
        name: 'Sucos Naturais',
        description: 'Laranja, limão, abacaxi, morango, maracujá (frescos e sem conservantes)',
        price: 'R$ 12,00',
        tags: ['Natural'],
        spicy: false
      },
      {
        name: 'Café Especial',
        description: 'Espresso, cappuccino, macchiato com grãos selecionados',
        price: 'R$ 8,00 - R$ 14,00',
        tags: [],
        spicy: false
      },
      {
        name: 'Água com Gás / Sem Gás',
        description: 'Águas minerais nacionais e importadas',
        price: 'R$ 6,00 - R$ 12,00',
        tags: [],
        spicy: false
      },
    ],
  };

  const categories = [
    { id: 'entradas', name: 'Entradas', icon: Leaf },
    { id: 'principais', name: 'Pratos Principais', icon: Flame },
    { id: 'sobremesas', name: 'Sobremesas', icon: Coffee },
    { id: 'bebidas', name: 'Bebidas', icon: Wine },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757358938541-c56a0c7c5846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cardápio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Nosso Cardápio</h1>
          <p className="text-xl text-neutral-200">Sabores cuidadosamente elaborados para você</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-6">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg text-neutral-900 group-hover:text-amber-600 transition">
                        {item.name}
                      </h3>
                      {item.spicy && <Flame className="w-4 h-4 text-red-500" />}
                    </div>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-amber-600 font-semibold whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Info Boxes */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-neutral-900">Alergias e Restrições</h3>
              </div>
              <p className="text-sm text-neutral-700">
                Informe nossos garçons sobre qualquer alergia ou restrição alimentar. Adaptamos nossos pratos
                para atender suas necessidades.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Wine className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-neutral-900">Harmonização</h3>
              </div>
              <p className="text-sm text-neutral-700">
                Consulte nosso sommelier para recomendações de vinhos e drinks que harmonizam perfeitamente
                com seu prato.
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-amber-600" />
                <h3 className="font-semibold text-neutral-900">Ingredientes Frescos</h3>
              </div>
              <p className="text-sm text-neutral-700">
                Trabalhamos com fornecedores locais e ingredientes orgânicos sempre que possível, garantindo
                frescor e qualidade.
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <p className="text-neutral-600 text-sm">
              * Os preços e disponibilidade dos pratos podem variar. Consulte nosso cardápio físico para informações
              atualizadas.
            </p>
            <p className="text-neutral-600 text-sm mt-2">
              * Taxa de serviço de 10% opcional não inclusa nos preços.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-neutral-900 mb-4">
            Pronto para experimentar nossos pratos?
          </h2>
          <p className="text-neutral-600 mb-8">
            Faça sua reserva e garanta uma mesa em nosso restaurante
          </p>
          <a
            href="/contato"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
          >
            Fazer Reserva
          </a>
        </div>
      </section>
    </div>
  );
}
