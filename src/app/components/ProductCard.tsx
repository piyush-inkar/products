import { Star } from 'lucide-react';

interface Badge {
  text: string;
  color: 'green' | 'blue';
}

interface ProductCardProps {
  image: string;
  rating: number;
  capacity: string;
  brand: string;
  price: number;
  badges?: Badge[];
}

export function ProductCard({ image, rating, capacity, brand, price, badges }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/3] bg-gray-100">
        <img 
          src={image} 
          alt={`${brand} AC`}
          className="w-full h-full object-cover"
        />
        {badges && badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {badges.map((badge, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                  badge.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                }`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i}
              className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        <div className="mb-1 text-sm text-gray-600">{capacity}</div>
        <div className="mb-3 font-semibold text-gray-900">{brand}</div>
        
        <div className="mb-4 text-2xl font-bold text-blue-600">
          ₹{price.toLocaleString('en-IN')}
        </div>
        
        <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Inquiry
        </button>
      </div>
    </div>
  );
}
