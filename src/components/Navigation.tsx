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
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 lg:px-6">
      <div className={`max-w-6xl mx-auto mt-6 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-2xl shadow-2xl border border-white/30' 
          : 'bg-white/10 backdrop-blur-xl shadow-xl border border-white/20'
      } rounded-3xl`}>
        <div className="flex justify-between items-center h-18 px-8">
          <Link to="/" className="flex items-center space-x-3 text-primary hover:text-primary-light transition-all duration-300 group">
            <div className="relative">
              <Droplets className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-serif font-bold text-xl">Punto de Agua</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl relative group ${
                isActive('/') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              Inicio
            </Link>
            <Link 
              to="/contributors" 
              className={`text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl relative group ${
                isActive('/contributors') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              Equipo
            </Link>
            <Link 
              to="/prensa" 
              className={`text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl relative group ${
                isActive('/prensa') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              Prensa
            </Link>
            <Link 
              to="/activa-tu-pueblo" 
              className={`text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl relative group ${
                isActive('/activa-tu-pueblo') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              Activa tu pueblo
            </Link>
            <button className="bg-white/80 text-gray-900 px-6 py-4 rounded-2xl text-sm font-semibold hover:bg-white transition-all duration-300 ml-4 border border-gray-200/50 hover:shadow-md">
              Iniciar sesión
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-2xl transition-all duration-300 text-gray-700 hover:bg-white/30"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-8 py-6 space-y-3 border-t border-white/20">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl ${
                  isActive('/') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/contributors" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl ${
                  isActive('/contributors') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                Equipo
              </Link>
              <Link 
                to="/prensa" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl ${
                  isActive('/prensa') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                Prensa
              </Link>
              <Link 
                to="/activa-tu-pueblo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-6 py-4 rounded-2xl ${
                  isActive('/activa-tu-pueblo') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                Activa tu pueblo
              </Link>
              <button className="w-full bg-white/80 text-gray-900 px-6 py-4 rounded-2xl text-sm font-semibold hover:bg-white transition-all duration-300 border border-gray-200/50">
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