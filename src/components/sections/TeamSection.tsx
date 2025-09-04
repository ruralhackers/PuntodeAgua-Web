import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Globe, Users, Code, Calendar, BarChart3 } from 'lucide-react';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex flex-col">
      <div className="flex-1 relative z-10 p-4 md:p-6 lg:p-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4 md:mb-6"
          >
            <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-accent" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 md:mb-8 leading-tight">
            {t('team.title')}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-5 grid-rows-3 gap-2 md:gap-3 lg:gap-4 h-[60vh] md:h-[70vh] lg:h-[75vh] max-w-7xl mx-auto">
          {/* Card 0 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-start-1 row-start-1 row-span-2 bg-gradient-to-br from-primary to-primary-light rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <img 
              src="/Pot.png" 
              alt="Pot illustration" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-start-1 row-start-3 col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center text-white hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Users className="h-4 w-4 md:h-8 md:w-8 mr-2 md:mr-3" />
              <span className="font-bold text-sm md:text-base">Comunidad</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-start-2 row-start-1 col-span-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <img 
              src="/HackerDays_grupo_2.JPG" 
              alt="Hacker Days group photo" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-center z-10 text-white">
              <h3 className="text-sm md:text-xl font-bold mb-1">HACKER DAYS</h3>
              <p className="text-xs opacity-90 hidden md:block">Evento colaborativo</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-start-2 row-start-2 col-span-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <img 
              src="/Beatiful bees (1) 1.png" 
              alt="Abstract geometric figure" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
              <Code className="h-4 w-4 md:h-8 md:w-8 mr-2 md:mr-3" />
              <span className="font-bold text-xs md:text-base text-center">Desarrollo Open Source</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-start-3 row-start-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <img 
              src="/2 (2).png" 
              alt="Computer illustration" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Card 5 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-start-4 row-start-1 col-span-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <img 
              src="/def copy.png" 
              alt="Alianza Rural image" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
              <Globe className="h-4 w-4 md:h-8 md:w-8 mr-2 md:mr-3" />
              <span className="font-bold text-sm md:text-base">Alianza Rural</span>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="col-start-4 row-start-2 col-span-2 row-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-8">
              <img 
                src="/Logo Rural Hackers.png" 
                alt="Rural Hackers logo" 
                className="w-16 h-16 md:w-32 md:h-32 object-contain mb-3 md:mb-6"
              />
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">RURAL HACKERS</h3>
              <p className="text-xs md:text-sm opacity-90 mb-4 md:mb-6 text-center">Tecnología para el rural</p>
              <Link 
                to="/contributors" 
                className="inline-flex items-center space-x-2 bg-white text-gray-900 px-3 md:px-4 py-2 rounded-xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg text-xs md:text-sm"
              >
                <span>{t('team.ctaButton')}</span>
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;