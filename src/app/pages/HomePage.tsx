import { Link } from 'react-router-dom';
import { AirVent, Recycle, Wrench } from 'lucide-react';
import { Header } from '../components/Header';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <WhatsAppButton />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to COOLTECH SERVICES
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for air conditioning solutions. Choose from brand new ACs, certified refurbished units, and professional maintenance services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand New ACs Card */}
          <Link to="/brand-new" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-6 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <AirVent className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Brand New Air Conditioners
                </h2>
                <p className="text-gray-600 mb-6">
                  Top brands with latest cooling technology. LG, Samsung, Voltas, Daikin, and Blue Star.
                </p>
                <div className="px-6 py-3 bg-blue-600 text-white rounded-lg inline-block font-medium group-hover:bg-blue-700 transition-colors">
                  Explore →
                </div>
              </div>
            </div>
          </Link>

          {/* Refurbished ACs Card */}
          <Link to="/refurbished" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-6 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                    <Recycle className="w-16 h-16 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Certified Refurbished ACs
                </h2>
                <p className="text-gray-600 mb-6">
                  Quality-checked and certified ACs at amazing prices with warranty coverage.
                </p>
                <div className="px-6 py-3 bg-blue-600 text-white rounded-lg inline-block font-medium group-hover:bg-blue-700 transition-colors">
                  Explore →
                </div>
              </div>
            </div>
          </Link>

          {/* Services Card */}
          <Link to="/services" className="group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="p-6 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                    <Wrench className="w-16 h-16 text-purple-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Maintenance & Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Professional AC services by certified technicians. From cleaning to repair.
                </p>
                <div className="px-6 py-3 bg-blue-600 text-white rounded-lg inline-block font-medium group-hover:bg-blue-700 transition-colors">
                  Explore →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
