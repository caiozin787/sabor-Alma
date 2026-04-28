import { Link } from 'react-router';
import { Home, ChefHat } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <ChefHat className="w-24 h-24 text-amber-600 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-3xl font-serif text-neutral-800 mb-4">Página Não Encontrada</h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          Ops! Parece que esta página não está em nosso cardápio.
          Que tal voltar para a página inicial?
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
        >
          <Home className="w-5 h-5" />
          Voltar para Início
        </Link>
      </div>
    </div>
  );
}
