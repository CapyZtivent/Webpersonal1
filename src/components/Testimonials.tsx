import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      company: 'Empresa Manufacturera XYZ',
      text: 'Gracias a esta guía logramos cumplir con todos los requisitos de INPSASEL sin complicaciones. El proceso fue claro y sencillo de seguir.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'Servicios Industriales ABC',
      text: 'La asesoría profesional nos ayudó a conformar nuestro comité de seguridad correctamente. Excelente servicio y atención personalizada.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      company: 'Comercializadora DEF',
      text: 'Los formatos gratuitos nos facilitaron enormemente la organización de nuestros expedientes. Muy recomendado para cualquier empresa.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Testimonios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a otras empresas a cumplir con las normativas de seguridad y salud laboral.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-2xl transition-shadow"
            >
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <p className="text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
