import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1758691462615-beafbf50bf3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzYWZldHklMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1MzI3NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Seguridad laboral"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Guía práctica para la Gestión de Talento Humano y Seguridad Laboral
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100">
            Te enseño paso a paso cómo registrar tu entidad de trabajo, delegados de prevención y comité de seguridad ante INPSASEL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#productos" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition shadow-lg"
            >
              Descargar Ebook Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#servicios" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white border-2 border-white rounded-lg hover:bg-blue-900 transition"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
