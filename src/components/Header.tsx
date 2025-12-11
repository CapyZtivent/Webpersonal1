import { Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-blue-900">INPSASEL</h1>
              <p className="text-sm text-gray-600">Gestión Laboral</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#guia" className="text-gray-700 hover:text-blue-600 transition">Guía</a>
            <a href="#productos" className="text-gray-700 hover:text-blue-600 transition">Productos</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
