import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor } from 'lucide-react';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-32 relative overflow-hidden bg-black px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            {t('team.title')}
          </h2>
        </motion.div>

        {/* Grid layout matching the image exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {/* Top row */}
          {/* Top left - Mural/Community image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-3xl h-64 overflow-hidden group hover:scale-105 transition-all duration-500"
          >
            <img 
              src="/def copy.png" 
              alt="Mural comunitario"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Top center - HACKER DAYS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl h-64 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500"
          >
            <div className="text-center">
              <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1 opacity-40">
                HACKER DAYS
              </div>
              <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1 opacity-60">
                HACKER DAYS
              </div>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide mb-1">
                HACKER DAYS
              </h3>
              <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1 opacity-60">
                HACKER DAYS
              </div>
              <div className="text-blue-200 text-xs font-bold uppercase tracking-wider opacity-40">
                HACKER DAYS
              </div>
            </div>
          </motion.div>

          {/* Top right - Team photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl h-64 overflow-hidden group hover:scale-105 transition-all duration-500"
          >
            <img 
              src="/def.png" 
              alt="Equipo de trabajo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Bottom row */}
          {/* Bottom left - Computer/Development */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-3xl h-64 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500"
          >
            <div className="text-center">
              <Monitor className="h-16 w-16 text-white mb-4 mx-auto" />
            </div>
          </motion.div>

          {/* Bottom center - Orange section with black element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl h-64 flex items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500"
          >
            {/* Black element in bottom right corner */}
            <div className="absolute bottom-4 right-4">
              <div className="w-8 h-16 bg-black rounded-t-full flex items-end justify-center pb-2">
                <div className="w-4 h-4 bg-purple-500 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Bottom right - Rural Hackers with tree icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl h-64 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-all duration-500"
          >
            <div className="text-center">
              {/* Tree-like network icon */}
              <div className="relative mb-4">
                <div className="flex justify-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex justify-center space-x-4 mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-8 h-1 bg-white rounded"></div>
                </div>
              </div>
              <h3 className="text-yellow-400 text-lg font-bold uppercase tracking-wide">
                RURAL HACKERS
              </h3>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            to="/contributors" 
            className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl group"
          >
            <span>{t('team.ctaButton')}</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;