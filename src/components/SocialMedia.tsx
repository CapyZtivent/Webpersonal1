import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function SocialMedia() {
  const contacts = [
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@inpsasel_gestion',
      href: 'https://instagram.com',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'INPSASEL Gestión',
      href: 'https://linkedin.com',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      icon: Mail,
      label: 'Correo electrónico',
      value: 'contacto@inpsaselgestion.com',
      href: 'mailto:contacto@inpsaselgestion.com',
      color: 'bg-gray-700 hover:bg-gray-800'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+58 424 123 4567',
      href: 'tel:+584241234567',
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-900 mb-4">Conéctate con nosotros</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Síguenos en redes sociales y mantente actualizado con las últimas novedades en gestión laboral
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 ${contact.color} rounded-lg flex items-center justify-center mb-4 transition`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2">{contact.label}</h4>
                <p className="text-sm text-gray-600 break-words">{contact.value}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
