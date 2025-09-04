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
                  src="https://lottie.host/embed/84d1e7b6-0d59-48c0-9e60-bb1f0c8c0f79/AE71MNMra7.lottie"
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 hover:border-white/80 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('activate.step1')}
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 hover:border-white/80 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-accent to-primary rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('activate.step2')}
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 hover:border-white/80 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('activate.step3')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 hover:border-white/80 max-w-md w-full transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                {t('activate.ready')}
              </h3>
              
              <Link 
                to="/activa-tu-pueblo"
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-8 rounded-2xl font-semibold hover:from-primary-light hover:to-primary transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg flex items-center justify-center space-x-3 group"
              >
                <span>{t('activate.ctaButton')}</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                {t('activate.freeText')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivateSection;