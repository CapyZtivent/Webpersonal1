import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Users, FileCheck, MessageSquare } from 'lucide-react';

export function Services() {
  const features = [
    {
      icon: Shield,
      title: 'Registro INPSASEL',
      description: 'Registro completo de tu entidad de trabajo'
    },
    {
      icon: Users,
      title: 'Delegados de Prevención',
      description: 'Gestión y capacitación de delegados'
    },
    {
      icon: FileCheck,
      title: 'Comité de Seguridad',
      description: 'Conformación y documentación legal'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Servicios Profesionales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Asesoría especializada para el cumplimiento de normativas laborales
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTI3NDE2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipo profesional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-gray-900 mb-6">Asesoría para el registro ante INPSASEL</h3>
            <p className="text-gray-700 mb-8">
              Te ayudamos a registrar tu entidad de trabajo, delegados de prevención y comité de seguridad ante INPSASEL de manera efectiva y sin complicaciones.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg">
              <MessageSquare className="mr-2 w-5 h-5" />
              Solicitar asesoría
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
