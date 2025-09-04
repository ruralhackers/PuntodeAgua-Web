import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplets, Github, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white/20 backdrop-blur-md border-t border-white/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <Droplets className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-lg text-gray-900 drop-shadow-sm">Punto de Agua</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a 
              href="https://github.com/ruralhackers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <Github className="h-4 w-4 text-gray-700 hover:text-primary drop-shadow-sm" />
            </a>
            <a 
              href="https://instagram.com/ruralhackers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              <Instagram className="h-4 w-4 text-gray-700 hover:text-primary drop-shadow-sm" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-700 drop-shadow-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;