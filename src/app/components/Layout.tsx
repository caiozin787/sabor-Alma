import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, ChefHat, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-amber-600" />
              <h1 className="text-2xl font-serif text-neutral-900">Sabor & Alma</h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`transition ${isActive('/') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className={`transition ${isActive('/sobre') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
              >
                Sobre
              </Link>
              <Link
                to="/cardapio"
                className={`transition ${isActive('/cardapio') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
              >
                Cardápio
              </Link>
              <Link
                to="/galeria"
                className={`transition ${isActive('/galeria') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
              >
                Galeria
              </Link>
              <Link
                to="/contato"
                className={`transition ${isActive('/contato') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
              >
                Contato
              </Link>
              <Link
                to="/contato"
                className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition"
              >
                Reservar
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition text-left ${isActive('/') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
                >
                  Início
                </Link>
                <Link
                  to="/sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition text-left ${isActive('/sobre') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
                >
                  Sobre
                </Link>
                <Link
                  to="/cardapio"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition text-left ${isActive('/cardapio') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
                >
                  Cardápio
                </Link>
                <Link
                  to="/galeria"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition text-left ${isActive('/galeria') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
                >
                  Galeria
                </Link>
                <Link
                  to="/contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`transition text-left ${isActive('/contato') ? 'text-amber-600' : 'text-neutral-700 hover:text-amber-600'}`}
                >
                  Contato
                </Link>
                <Link
                  to="/contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition text-center"
                >
                  Reservar
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-6 h-6 text-amber-600" />
                <span className="font-serif text-xl text-white">Sabor & Alma</span>
              </div>
              <p className="text-sm">Onde cada prato conta uma história</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Navegação</h3>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/" className="hover:text-amber-600 transition">Início</Link>
                <Link to="/sobre" className="hover:text-amber-600 transition">Sobre</Link>
                <Link to="/cardapio" className="hover:text-amber-600 transition">Cardápio</Link>
                <Link to="/galeria" className="hover:text-amber-600 transition">Galeria</Link>
                <Link to="/contato" className="hover:text-amber-600 transition">Contato</Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Horário</h3>
              <div className="text-sm">
                <p>Terça a Domingo</p>
                <p>Almoço: 12h - 15h</p>
                <p>Jantar: 19h - 23h</p>
                <p className="mt-2 text-amber-600">Segunda: Fechado</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-amber-600 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-amber-600 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-amber-600 transition">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <p className="text-sm mt-4">@saborealma</p>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Sabor & Alma. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
