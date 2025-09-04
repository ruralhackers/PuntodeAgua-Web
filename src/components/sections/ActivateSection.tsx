import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Code } from 'lucide-react';

const ActivateSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-32 relative overflow-hidden bg-white px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content with three columns */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16 mb-20">
          {/* Left - Totalmente Gratis */}
          <div className="text-center lg:text-right flex-1">
            <h3 className="text-6xl lg:text-8xl font-serif font-bold text-gray-900 leading-tight">
              Totalmente Gratis
            </h3>
          </div>

          {/* Center - Lottie Animation */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 lg:w-56 lg:h-56 flex items-center justify-center">
              <iframe
                src="https://lottie.host/embed/84d1e7b6-0d59-48c0-9e60-bb1f0c8c0f79/AE71MNMra7.lottie"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  background: 'transparent'
                }}
                title="Water Management Animation"
              />
            </div>
          </div>

          {/* Right - Código Abierto */}
          <div className="text-center lg:text-left flex-1">
            <h3 className="text-6xl lg:text-8xl font-serif font-bold text-gray-900 leading-tight">
              Código Abierto
            </h3>
          </div>
        </div>

        {/* Elegant centered CTA button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            {/* Animated background glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary-light rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
            
            <Link 
              to="/activa-tu-pueblo"
              className="relative bg-gradient-to-r from-primary to-accent text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-primary-light hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 border border-white/20"
            >
              <span>Activa tu pueblo</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivateSection;