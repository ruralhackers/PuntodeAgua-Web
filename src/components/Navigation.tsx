import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Droplets, Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
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

          <div className="hidden lg:flex items-center space-x-3 h-full py-3">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl relative group my-1 ${
                isActive('/') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/contributors" 
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl relative group my-1 ${
                isActive('/contributors') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              {t('nav.team')}
            </Link>
            <Link 
              to="/prensa" 
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl relative group my-1 ${
                isActive('/prensa') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              {t('nav.press')}
            </Link>
            <Link 
              to="/activa-tu-pueblo" 
              className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl relative group my-1 ${
                isActive('/activa-tu-pueblo') 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-primary hover:text-white hover:shadow-md'
              }`}
            >
              {t('nav.activate')}
            </Link>
            <LanguageSelector />
            <button className="bg-white/80 text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white transition-all duration-300 ml-4 border border-gray-200/50 hover:shadow-md my-1">
              {t('nav.login')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl transition-all duration-300 text-gray-700 hover:bg-white/30"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-8 py-4 space-y-3 border-t border-white/20">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/contributors" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/contributors') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.team')}
              </Link>
              <Link 
                to="/prensa" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/prensa') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.press')}
              </Link>
              <Link 
                to="/activa-tu-pueblo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/activa-tu-pueblo') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.activate')}
              </Link>
              <button className="w-full bg-white/80 text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white transition-all duration-300 border border-gray-200/50 mx-2">
                {t('nav.login')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl transition-all duration-300 text-gray-700 hover:bg-white/30"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-8 py-4 space-y-3 border-t border-white/20">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/contributors" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/contributors') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.team')}
              </Link>
              <Link 
                to="/prensa" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/prensa') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.press')}
              </Link>
              <Link 
                to="/activa-tu-pueblo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium transition-all duration-300 px-4 py-2 rounded-xl mx-2 ${
                  isActive('/activa-tu-pueblo') 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-primary hover:text-white'
                }`}
              >
                {t('nav.activate')}
              </Link>
              <div className="mx-2 my-2 flex justify-center">
                <LanguageSelector />
              </div>
              <button className="w-full bg-white/80 text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white transition-all duration-300 border border-gray-200/50 mx-2">
                {t('nav.login')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;