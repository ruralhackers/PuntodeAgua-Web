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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16 mb-20"
        >
          {/* Left - Totalmente Gratis */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-right flex-1"
          >
            <div className="flex flex-col items-center lg:items-end space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-4 shadow-xl"
              >
                <Heart className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">
                  Totalmente Gratis
                </h3>
                <p className="text-gray-600 text-sm lg:text-base max-w-48">
                  Sin costes ocultos ni suscripciones mensuales
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-40 h-40 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-primary/10 via-white to-accent/10 flex items-center justify-center shadow-2xl border border-white/60 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-xl animate-pulse" />
              
              {/* Lottie container */}
              <div className="relative z-10 w-32 h-32 lg:w-44 lg:h-44 flex items-center justify-center">
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
            </motion.div>
          </motion.div>

          {/* Right - Open Source */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex-1"
          >
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-4 shadow-xl"
              >
                <Code className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">
                  Open Source
                </h3>
                <p className="text-gray-600 text-sm lg:text-base max-w-48">
                  Código abierto y transparente para todos
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Elegant centered CTA button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            {/* Animated background glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary-light rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-gradient bg-300%" />
            
            <Link 
              to="/activa-tu-pueblo"
              className="relative bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-primary-light hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-3 border border-white/20"
            >
              <span>{t('activate.ctaButton')}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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