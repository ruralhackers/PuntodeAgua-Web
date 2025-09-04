import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-32 relative overflow-hidden px-6 lg:px-8">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            {t('team.title')}
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
          {/* Hackers Days - Large box (spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full flex items-center">
              <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8 w-full">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-6 shadow-2xl flex-shrink-0"
                >
                  <Zap className="h-12 w-12 text-white" />
                </motion.div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-6 group-hover:text-accent transition-colors duration-300">
                    {t('team.hackersdays.title')}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {t('team.hackersdays.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alianza por el rural - Tall box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full flex flex-col justify-center items-center text-center">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-gradient-to-br from-accent to-primary rounded-3xl p-6 shadow-2xl mb-6"
              >
                <Globe className="h-12 w-12 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4 group-hover:text-primary-light transition-colors duration-300">
                {t('team.alliance.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('team.alliance.description')}
              </p>
            </div>
          </motion.div>

          {/* Background Image - Medium box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
          >
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 h-full overflow-hidden">
              <img 
                src="/def copy.png" 
                alt="Team Background" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* CTA Button - Medium box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-light rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500 animate-gradient bg-300%" />
            
            <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 h-full flex flex-col justify-center items-center text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/30"
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-serif font-bold text-white mb-6 leading-tight">
                {t('team.cta')}
              </h3>
              
              <Link 
                to="/contributors" 
                className="inline-flex items-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 group"
              >
                <span>{t('team.ctaButton')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;