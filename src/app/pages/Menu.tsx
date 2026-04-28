import { useState } from 'react';
import { Wine, Coffee, Flame, Leaf, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('entradas');

  const menuItems = {
    entradas: [
      {
        name: 'Carpaccio de Mignon',
        description: 'Lâminas finas de filé mignon, azeite trufado, alcaparras e lascas de grana padano',
        price: '€ 42,00',
        tags: ['Mais pedido', 'Sem Glúten'],
      },
      {
        name: 'Bruschetta Pomodoro',
        description: 'Pão italiano tostado, tomates frescos, alho, manjericão e azeite extravirgem',
        price: '€ 28,00',
        tags: ['Vegetariano'],
      },
      {
        name: 'Ceviche de Peixe Branco',
        description: 'Peixe branco fresco cítrico, cebola roxa, pimenta dedo-de-moça e coentro',
        price: '€ 48,00',
        tags: ['Leve', 'Sem Glúten'],
      },
      {
        name: 'Burrata ao Pesto',
        description: 'Burrata cremosa, creme de pesto, tomates confitados e torradas artesanais',
        price: '€ 65,00',
        tags: ['Vegetariano'],
      },
      {
        name: 'Tartare de Salmão',
        description: 'Salmão fresco com abacate, azeite de gergelim, cebolinha e chips de batata doce',
        price: '€ 58,00',
        tags: ['Fresco'],
      },
      {
        name: 'Camarões Crocantes',
        description: 'Camarões empanados em panko com toque de coco, molho agridoce picante',
        price: '€ 52,00',
        tags: ['Novo'],
      },
    ],
    principais: [
      {
        name: 'Filé Mignon ao Poivre',
        description: 'Medalhão de filé mignon ao molho de pimentas verdes, acompanhado de gratin dauphinois',
        price: '€ 78,00',
        tags: ['Chef Recomenda'],
      },
      {
        name: 'Risoto de Limão Siciliano',
        description: 'Arroz arbóreo, limão siciliano, vinho branco, manteiga e parmesão',
        price: '€ 68,00',
        tags: ['Vegetariano'],
      },
      {
        name: 'Salmão Grelhado',
        description: 'Posta de salmão grelhada com crosta de ervas, purê de mandioquinha e aspargos',
        price: '€ 72,00',
        tags: ['Saudável', 'Sem Glúten'],
      },
      {
        name: 'Ravioli de Costela',
        description: 'Massa fresca recheada com costela bovina desfiada, molho roti e sálvia',
        price: '€ 58,00',
      },
      {
        name: 'Carré de Cordeiro',
        description: 'Carré de cordeiro grelhado ao molho de hortelã, cuscuz marroquino com damascos',
        price: '€ 85,00',
        tags: ['Premium'],
      },
      {
        name: 'Polvo à Lagareiro',
        description: 'Polvo confitado em azeite, batatas ao murro, alho confit e brócolis',
        price: '€ 68,00',
        tags: ['Especialidade'],
      },
      {
        name: 'Magret de Canard',
        description: 'Peito de pato grelhado ao molho de frutas vermelhas, purê de batata baroa e aspargos',
        price: '€ 76,00',
        tags: ['Gourmet'],
      },
      {
        name: 'Linguine ai Frutti di Mare',
        description: 'Massa artesanal longa com frutos do mar selecionados, molho de tomate fresco e ervas',
        price: '€ 82,00',
      },
    ],
    sobremesas: [
      {
        name: 'Tiramisù Clássico',
        description: 'Biscoito savoiardi, café expresso, queijo mascarpone e cacau em pó',
        price: '€ 28,00',
        tags: ['Italiano'],
      },
      {
        name: 'Cheesecake de Frutas Vermelhas',
        description: 'Cheesecake cremosa com calda de frutas vermelhas e base de biscoito amanteigado',
        price: '€ 26,00',
        tags: ['Mais vendido'],
      },
      {
        name: 'Petit Gâteau',
        description: 'Bolinho de chocolate meio amargo com casquinha crocante e recheio cremoso, sorvete de baunilha',
        price: '€ 24,00',
      },
      {
        name: 'Crème Brûlée',
        description: 'Creme de baunilha de Madagascar com crosta de açúcar caramelizado',
        price: '€ 22,00',
        tags: ['Francês', 'Sem Glúten'],
      },
      {
        name: 'Torta de Maçã',
        description: 'Torta rústica de maçã com canela e amêndoas, servida quente com sorvete de caramelo salgado',
        price: '€ 26,00',
        tags: ['Conforto'],
      },
      {
        name: 'Pudim de Leite Condensado',
        description: 'Pudim cremoso sem furinhos, calda de caramelo dourado e fava de baunilha',
        price: '€ 24,00',
      },
    ],
    bebidas: [
      {
        name: 'Vinho Tinto Reserva',
        description: 'Cabernet Sauvignon chileno, aromas de frutas negras e toque de carvalho',
        price: '€ 32,00 / € 145,00',
        tags: ['Taça / Garrafa'],
      },
      {
        name: 'Vinho Branco Blend',
        description: 'Chardonnay e Sauvignon Blanc argentino, fresco e frutado',
        price: '€ 28,00 / € 120,00',
        tags: ['Taça / Garrafa'],
      },
      {
        name: 'Espumante Brut',
        description: 'Espumante brasileiro premiado, método tradicional com notas de maçã verde',
        price: '€ 25,00 / € 110,00',
        tags: ['Taça / Garrafa'],
      },
      {
        name: 'Coquetel Signature Sabor & Alma',
        description: 'Gin premium, xarope de hibisco, limão siciliano, tônica e espuma de gengibre',
        price: '€ 36,00',
        tags: ['Exclusivo'],
      },
      {
        name: 'Suco Natural',
        description: 'Laranja, limão, maracujá, abacaxi com hortelã ou melancia',
        price: '€ 12,00',
        tags: ['Sem Álcool'],
      },
      {
        name: 'Refrigerantes e Água',
        description: 'Coca-Cola, Guaraná Antarctica, Água com ou sem gás',
        price: '€ 8,00',
        tags: ['Sem Álcool'],
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
