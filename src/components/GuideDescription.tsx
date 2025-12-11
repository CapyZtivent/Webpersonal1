import { CheckCircle, Download } from 'lucide-react';

export function GuideDescription() {
  const benefits = [
    'Registro de entidad de trabajo ante INPSASEL',
    'Gestión de delegados de prevención',
    'Conformación del comité de seguridad',
    'Cumplimiento legal garantizado'
  ];

  return (
    <section id="guia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-900 mb-6">Guía práctica paso a paso</h2>
            <p className="text-gray-700 mb-8">
              Aprende todo lo que necesitas saber sobre el registro de tu entidad de trabajo, delegados de prevención y comité de seguridad ante INPSASEL. Con esta guía podrás asegurar el cumplimiento legal de tu empresa.
            </p>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg">
              <Download className="mr-2 w-5 h-5" />
              Descargar Ebook
            </button>
          </div>
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-blue-900 mb-2">Guía Digital</h3>
                  <p className="text-gray-600">Formato PDF descargable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
