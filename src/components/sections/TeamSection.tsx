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
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            {t('team.title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            {t('team.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Hackers Days */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-6 shadow-2xl mb-6 w-fit"
              >
                <Zap className="h-12 w-12 text-white" />
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {t('team.hackersdays.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t('team.hackersdays.description')}
              </p>
            </div>
          </motion.div>

          {/* Alianza por el rural */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-gradient-to-br from-accent to-primary rounded-3xl p-6 shadow-2xl mb-6 w-fit"
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
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-8">
            {t('team.cta')}
          </h3>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contributors"
              className="bg-gradient-to-r from-primary to-primary-light text-white px-8 py-3 rounded-2xl font-bold text-lg hover:from-primary-light hover:to-primary transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center space-x-3"
            >
              <span>{t('team.ctaButton')}</span>
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

export default TeamSection;