import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Calendar, BarChart3 } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Users,
      title: t('features.userRegistry.title'),
      description: t('features.userRegistry.description'),
      gradient: 'from-blue-600 to-blue-500',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Calendar,
      title: t('features.calendar.title'),
      description: t('features.calendar.description'),
      gradient: 'from-indigo-600 to-indigo-500',
      bgColor: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: BarChart3,
      title: t('features.analytics.title'),
      description: t('features.analytics.description'),
      gradient: 'from-cyan-600 to-cyan-500',
      bgColor: 'from-cyan-50 to-cyan-100'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-gray-50 px-6 lg:px-8">
      {/* Modern gradient background */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 hover:-translate-y-1`}
            >
              <div className={`bg-gradient-to-br ${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;