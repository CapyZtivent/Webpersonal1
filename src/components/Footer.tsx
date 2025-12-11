import { Shield, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white">INPSASEL Gestión</h3>
                <p className="text-sm text-gray-400">Seguridad y Salud Laboral</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Expertos en gestión de talento humano y cumplimiento de normativas de seguridad laboral ante INPSASEL.
            </p>
          </div>
          
          {/* Información de contacto */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-sm">Av. Principal, Caracas 1050, Venezuela</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-sm">+58 424 123 4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-sm">contacto@inpsaselgestion.com</span>
              </div>
            </div>
          </div>
          
          {/* Enlaces legales */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-blue-400 transition">
                  Aviso legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} INPSASEL Gestión. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
