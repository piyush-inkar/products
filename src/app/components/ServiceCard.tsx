import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  price: string;
}

export function ServiceCard({ Icon, title, price }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow text-center">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-blue-100 rounded-full">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      
      <h3 className="mb-3 text-lg font-semibold text-gray-900">{title}</h3>
      
      <div className="mb-4 text-2xl font-bold text-blue-600">{price}</div>
      
      <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Book Service
      </button>
    </div>
  );
}
