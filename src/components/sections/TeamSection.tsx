import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Globe, Users, Code, Calendar, BarChart3 } from 'lucide-react';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-32 relative overflow-hidden px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="h-12 w-12 text-accent" />
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            {t('team.title')}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-5 md:grid-cols-5 grid-rows-3 md:grid-rows-3 gap-2 md:gap-2 m-4">
          {/* Card 0 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-start-1 row-start-1 row-span-2 md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2 bg-gradient-to-br from-primary to-primary-light rounded-3xl p-6 flex flex-col items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/Pot.png" 
              alt="Pot illustration" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-start-1 row-start-3 col-span-2 md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-6 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <Users className="h-8 w-8 mr-3" />
            <span className="font-bold">Comunidad</span>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-start-2 row-start-1 col-span-2 md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-6 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/HackerDays_grupo_2.JPG" 
              alt="Hacker Days group photo" 
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
            <div className="absolute bottom-4 left-4 right-4 text-center z-10">
              <h3 className="text-xl font-bold mb-1">HACKER DAYS</h3>
              <p className="text-xs opacity-90">Evento colaborativo</p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-start-2 row-start-2 col-span-2 md:col-start-2 md:row-start-2 md:col-span-2 md:row-span-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl p-6 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/Beatiful bees (1) 1.png" 
              alt="Abstract geometric figure" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 flex items-center">
              <Code className="h-8 w-8 mr-3" />
              <span className="font-bold">Desarrollo Open Source</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-start-3 row-start-3 md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/2 (2).png" 
              alt="Computer illustration" 
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Card 5 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-start-4 row-start-1 col-span-2 md:col-start-4 md:row-start-1 md:col-span-2 md:row-span-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-6 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/def copy.png" 
              alt="Alianza Rural image" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 rounded-3xl"
            />
            <div className="relative z-10 flex items-center">
              <Globe className="h-8 w-8 mr-3" />
              <span className="font-bold">Alianza Rural</span>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="col-start-4 row-start-2 col-span-2 row-span-2 md:col-start-4 md:row-start-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 flex flex-col items-center justify-center text-white hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="/Logo Rural Hackers.png" 
              alt="Rural Hackers logo" 
              className="w-32 h-32 object-contain mb-6"
            />
            <h3 className="text-2xl font-bold mb-2 text-center">RURAL HACKERS</h3>
            <p className="text-sm opacity-90 mb-6 text-center">Tecnología para el rural</p>
            <Link 
              to="/contributors" 
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            >
              <span>{t('team.ctaButton')}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;