import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplets, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/40 backdrop-blur-lg shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pr-8 lg:pr-12">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 text-primary hover:text-primary-light transition-all duration-300 group">
            <div className="relative">
              <Droplets className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-serif font-bold text-xl">Punto de Agua</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1 ml-auto">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg relative group ${
                isActive('/') 
                  ? 'bg-primary text-white' 
                  : isScrolled 
                    ? 'text-gray-900 hover:bg-primary hover:text-white' 
                  : 'text-gray-900 hover:bg-primary/80 hover:text-white'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/contributors" 
              className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg relative group ${
                isActive('/contributors') 
                  ? 'bg-primary text-white' 
                  : isScrolled 
                    ? 'text-gray-900 hover:bg-primary hover:text-white' 
                  : 'text-gray-900 hover:bg-primary/80 hover:text-white'
              }`}
            >
              Equipo
            </Link>
            <Link 
              to="/prensa" 
              className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg relative group ${
                isActive('/prensa') 
                  ? 'bg-primary text-white' 
                  : isScrolled 
                    ? 'text-gray-900 hover:bg-primary hover:text-white' 
                  : 'text-gray-900 hover:bg-primary/80 hover:text-white'
              }`}
            >
              Prensa
            </Link>
            <Link 
              to="/activa-tu-pueblo" 
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl group ${
                isActive('/activa-tu-pueblo') 
                  ? 'bg-primary text-white shadow-lg' 
                  : isScrolled 
                    ? 'text-gray-900 hover:bg-primary hover:text-white' 
                    : 'text-gray-900 hover:bg-primary/80 hover:text-white'
            }`}>
              Activa tu pueblo
            </Link>
            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-300 ml-3">
              Iniciar sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/40 backdrop-blur-lg shadow-lg">
            <div className="px-6 py-6 space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-900 text-sm font-medium hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/contributors" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-900 text-sm font-medium hover:text-primary transition-colors"
              >
                Equipo
              </Link>
              <Link 
                to="/prensa" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-900 text-sm font-medium hover:text-primary transition-colors"
              >
                Prensa
              </Link>
              <Link 
                to="/activa-tu-pueblo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-900 text-sm font-medium hover:text-primary transition-colors"
              >
                Activa tu pueblo
              </Link>
              <button className="w-full bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-300">
                Iniciar sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;