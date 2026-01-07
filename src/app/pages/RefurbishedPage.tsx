import { useState } from 'react';
import { Header } from '../components/Header';
import { FilterBar } from '../components/FilterBar';
import { ProductCard } from '../components/ProductCard';
import { WhatsAppButton } from '../components/WhatsAppButton';

const BRAND_FILTERS = ['All', 'LG', 'Samsung', 'Voltas', 'Daikin', 'Blue Star'];
const CAPACITY_FILTERS = ['All', '1 Ton', '1.5 Ton', '2 Ton'];

const PRODUCTS = [
  { id: 1, brand: 'LG', capacity: '1 Ton', price: 18999, rating: 4, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 2, brand: 'Samsung', capacity: '1.5 Ton', price: 22999, rating: 5, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 3, brand: 'Voltas', capacity: '1 Ton', price: 16999, rating: 4, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 4, brand: 'Daikin', capacity: '1.5 Ton', price: 25999, rating: 5, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 5, brand: 'Blue Star', capacity: '2 Ton', price: 29999, rating: 4, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 6, brand: 'LG', capacity: '1.5 Ton', price: 20999, rating: 5, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 7, brand: 'Samsung', capacity: '2 Ton', price: 27999, rating: 5, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 8, brand: 'Voltas', capacity: '1.5 Ton', price: 19999, rating: 4, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { id: 9, brand: 'Daikin', capacity: '2 Ton', price: 31999, rating: 5, image: 'https://images.unsplash.com/photo-1634890437712-d312d94107e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXIlMjBjb25kaXRpb25lcnxlbnwxfHx8fDE3Njc3MTI2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

export function RefurbishedPage() {
  const [brandFilter, setBrandFilter] = useState('All');
  const [capacityFilter, setCapacityFilter] = useState('All');

  const filteredProducts = PRODUCTS.filter(product => {
    const brandMatch = brandFilter === 'All' || product.brand === brandFilter;
    const capacityMatch = capacityFilter === 'All' || product.capacity === capacityFilter;
    return brandMatch && capacityMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WhatsAppButton />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Certified Refurbished ACs
          </h1>
          <p className="text-lg text-gray-600">
            Quality-checked and certified ACs at amazing prices with warranty
          </p>
        </div>

        <div className="mb-8 p-6 bg-white rounded-xl shadow-sm">
          <FilterBar 
            title="Brand Filter"
            filters={BRAND_FILTERS}
            activeFilter={brandFilter}
            onFilterChange={setBrandFilter}
          />
          
          <FilterBar 
            title="Capacity Filter"
            filters={CAPACITY_FILTERS}
            activeFilter={capacityFilter}
            onFilterChange={setCapacityFilter}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              rating={product.rating}
              capacity={product.capacity}
              brand={product.brand}
              price={product.price}
              badges={[
                { text: 'Quality Checked', color: 'green' },
                { text: 'Certified Refurbished', color: 'blue' }
              ]}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">
              No products found with the selected filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
