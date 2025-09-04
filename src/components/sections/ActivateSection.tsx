import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Code } from 'lucide-react';

const ActivateSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen py-32 relative overflow-hidden bg-white px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main content with three columns */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 lg:space-x-24 mb-24">
          {/* Left - Totalmente Gratis */}
          <div className="text-center lg:text-right flex-1">
            <h3 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
              <div className="text-center">Totalmente</div>
              <div className="text-center">Gratis</div>
            </h3>
          </div>

          {/* Center - Lottie Animation */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center mx-auto">
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
            <h3 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight">
              <div className="text-center">Código</div>
              <div className="text-center">Abierto</div>
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <Link 
              to="/activa-tu-pueblo"
              className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-primary-light hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Activa tu pueblo</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivateSection;