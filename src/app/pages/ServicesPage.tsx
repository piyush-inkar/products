import { Header } from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { Wrench, Droplets, Fan, Settings, Download, CircuitBoard } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    Icon: Settings,
    title: 'General AC Service',
    price: '₹499'
  },
  {
    id: 2,
    Icon: Droplets,
    title: 'Deep Cleaning',
    price: '₹799'
  },
  {
    id: 3,
    Icon: Fan,
    title: 'Gas Refilling',
    price: '₹2,500'
  },
  {
    id: 4,
    Icon: Download,
    title: 'AC Installation',
    price: '₹1,200'
  },
  {
    id: 5,
    Icon: Wrench,
    title: 'AC Uninstallation',
    price: '₹800'
  },
  {
    id: 6,
    Icon: CircuitBoard,
    title: 'PCB Repair',
    price: 'Starts at ₹1,500'
  }
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WhatsAppButton />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Maintenance & Services
          </h1>
          <p className="text-lg text-gray-600">
            Professional AC services by certified technicians
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map(service => (
            <ServiceCard
              key={service.id}
              Icon={service.Icon}
              title={service.title}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
