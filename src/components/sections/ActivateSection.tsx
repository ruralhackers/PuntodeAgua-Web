import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Code } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';

const ActivateSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-32 relative overflow-hidden bg-white px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Central content with Lottie and text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-20"
        >
          <div className="flex items-center space-x-8 lg:space-x-16">
            {/* Left text - Totalmente Gratis */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="h-6 w-6 text-accent" />
                <span className="text-2xl lg:text-3xl font-serif font-bold text-gray-900">
                  Totalmente Gratis
                </span>
              </div>
              <p className="text-sm text-gray-600 max-w-32">
                Sin costes ocultos ni suscripciones
              </p>
            </motion.div>

            {/* Center Lottie animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-xl border border-white/60">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/84d1e7b6-0d59-48c0-9e60-bb1f0c8c0f79/AE71MNMra7.json"
                  style={{ height: '120px', width: '120px' }}
                  className="lg:w-36 lg:h-36"
                />
              </div>
            </motion.div>

            {/* Right text - Open Source */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center space-x-2 mb-2">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-2xl lg:text-3xl font-serif font-bold text-gray-900">
                  Open Source
                </span>
              </div>
              <p className="text-sm text-gray-600 max-w-32">
                Código abierto y transparente
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Centered CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="group"
          >
            <Link 
              to="/activa-tu-pueblo"
              className="bg-gradient-to-r from-primary to-accent text-white py-6 px-12 rounded-3xl font-bold text-xl hover:from-primary-light hover:to-primary transition-all duration-300 hover:shadow-2xl shadow-xl flex items-center space-x-4 group border border-white/20"
            >
              <span>{t('activate.ctaButton')}</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivateSection;