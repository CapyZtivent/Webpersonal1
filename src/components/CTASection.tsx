import { GraduationCap, MessageCircle, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* CTA 1 - Curso */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h3 className="mb-4">¿Quieres profundizar más?</h3>
            <p className="text-blue-100 mb-8">
              Únete a nuestro curso de gestión de talento humano y seguridad laboral. Aprende de expertos con años de experiencia.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-blue-50 transition shadow-lg">
              Ver curso
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          {/* CTA 2 - Contacto */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="mb-4">¿Tienes dudas o necesitas asesoría personalizada?</h3>
            <p className="text-green-100 mb-8">
              Nuestro equipo de expertos está listo para ayudarte. Contáctanos y resolveremos todas tus inquietudes.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-green-900 rounded-lg hover:bg-green-50 transition shadow-lg">
              Contáctanos
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
