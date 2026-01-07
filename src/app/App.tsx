import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { BrandNewPage } from './pages/BrandNewPage';
import { RefurbishedPage } from './pages/RefurbishedPage';
import { ServicesPage } from './pages/ServicesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand-new" element={<BrandNewPage />} />
        <Route path="/refurbished" element={<RefurbishedPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
