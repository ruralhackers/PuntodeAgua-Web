import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMouseGradient } from '../hooks/useMouseGradient';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleList from '../components/ArticleList';
import Footer from '../components/Footer';
import { pressData } from '../data/press';

const PressPage: React.FC = () => {
  const { t } = useTranslation();
  const gradientRef = useMouseGradient();

  return (
    <div ref={gradientRef} className="min-h-screen relative">
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 transition-all duration-1000 ease-out -z-10" />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-8 uppercase tracking-tight">
            <h1 className="text-6xl lg:text-7xl font-serif font-bold text-gray-900 mb-8 uppercase tracking-tight">
              {t('press.title')}
            </h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              {t('press.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <FeaturedArticle article={pressData.featured} />
            <ArticleList articles={pressData.articles} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PressPage;
  )
}