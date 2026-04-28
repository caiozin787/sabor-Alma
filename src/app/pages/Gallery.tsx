import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('todos');

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1757358938541-c56a0c7c5846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Prato Gourmet com Flores',
      category: 'pratos',
    },
    {
      url: 'https://images.unsplash.com/photo-1757358957218-67e771ec07bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Prato Servido com Elegância',
      category: 'pratos',
    },
    {
      url: 'https://images.unsplash.com/photo-1757358976795-280d3b44bc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Aspargos Grelhados',
      category: 'preparacao',
    },
    {
      url: 'https://images.unsplash.com/photo-1757358947283-b0802b5cfdeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tartare de Carne Premium',
      category: 'pratos',
    },
    {
      url: 'https://images.unsplash.com/photo-1643757343278-5d50309dfa44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Mesa Servida',
      category: 'ambiente',
    },
    {
      url: 'https://images.unsplash.com/photo-1757358967353-0a256c8f8f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sobremesa Delicada',
      category: 'sobremesas',
    },
    {
      url: 'https://images.unsplash.com/photo-1757358961768-721e850416ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Chef em Ação',
      category: 'preparacao',
    },
    {
      url: 'https://images.unsplash.com/photo-1757358973365-af35f16722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Finalização da Sobremesa',
      category: 'sobremesas',
    },
    {
      url: 'https://images.unsplash.com/photo-1757358955539-de14567f6a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Molho sendo Adicionado',
      category: 'preparacao',
    },
    {
      url: 'https://images.unsplash.com/photo-1689997122000-c94449288dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8ZmluZSUyMGRpbmluZyUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc3NzI4OTEwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pratos Asiáticos',
      category: 'pratos',
    },
  ];

  const filters = [
    { id: 'todos', name: 'Todos', count: images.length },
    { id: 'pratos', name: 'Pratos', count: images.filter(img => img.category === 'pratos').length },
    { id: 'preparacao', name: 'Preparação', count: images.filter(img => img.category === 'preparacao').length },
    { id: 'sobremesas', name: 'Sobremesas', count: images.filter(img => img.category === 'sobremesas').length },
    { id: 'ambiente', name: 'Ambiente', count: images.filter(img => img.category === 'ambiente').length },
  ];

  const filteredImages = activeFilter === 'todos'
    ? images
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1757358976795-280d3b44bc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzc3Mjg5MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Galeria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Galeria</h1>
          <p className="text-xl text-neutral-200">Um olhar por trás das criações do Sabor & Alma</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore nossa coleção de imagens que capturam a essência da nossa culinária,
              desde a preparação meticulosa até a apresentação final dos pratos
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                {filter.name}
                <span className={`text-sm ${activeFilter === filter.id ? 'text-amber-200' : 'text-neutral-500'}`}>
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-neutral-200"
                onClick={() => openLightbox(index)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-neutral-300 capitalize">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <p className="text-neutral-500">Nenhuma imagem encontrada nesta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-600 transition z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-amber-600 transition z-50"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-amber-600 transition z-50"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-6xl max-h-full flex flex-col items-center">
            <ImageWithFallback
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-neutral-300 capitalize">{filteredImages[selectedImage].category}</p>
              <p className="text-neutral-400 text-sm mt-4">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-12 h-12 text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-neutral-900 mb-4">
            Siga-nos nas Redes Sociais
          </h2>
          <p className="text-neutral-600 mb-8">
            Acompanhe nosso Instagram @saborealma para ver mais fotos incríveis dos nossos pratos
            e novidades do restaurante
          </p>
          <a
            href="#"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
          >
            Seguir no Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
