import { BookOpen, FileText, Download } from 'lucide-react';

export function FreeProducts() {
  const products = [
    {
      icon: BookOpen,
      title: 'Ebook Gratis: Gestión de Talento Humano',
      description: 'Obtén este Ebook gratuito para mejorar la gestión del talento humano dentro de tu empresa. Incluye consejos prácticos y herramientas esenciales.',
      buttonText: 'Descargar ahora',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Formato de expediente de Talento Humano y SST',
      description: 'Accede a este formato gratuito para organizar y mantener los documentos necesarios para cumplir con las normativas de seguridad y salud laboral.',
      buttonText: 'Descargar formato',
      color: 'green'
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 mb-4">Productos Gratuitos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descarga recursos gratuitos para mejorar la gestión de tu empresa
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const colorClasses = product.color === 'blue' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-green-600 hover:bg-green-700';
            const iconBgClasses = product.color === 'blue'
              ? 'bg-blue-100 text-blue-600'
              : 'bg-green-100 text-green-600';
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
              >
                <div className={`w-16 h-16 ${iconBgClasses} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <button className={`inline-flex items-center px-6 py-3 ${colorClasses} text-white rounded-lg transition shadow-md w-full justify-center`}>
                  <Download className="mr-2 w-5 h-5" />
                  {product.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
