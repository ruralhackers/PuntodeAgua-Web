import React from 'react';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  source: string;
  date: string;
  image: string;
  featured?: boolean;
  link?: string;
}

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <motion.a 
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative group cursor-pointer block"
    >
      <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/60">
        <img 
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        
        <div className="absolute top-8 left-8">
          <span className="bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-2xl text-sm font-bold uppercase tracking-wide shadow-lg backdrop-blur-md border border-white/40">
            Destacada
          </span>
        </div>
        
        <div className="absolute bottom-8 left-8 right-8">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4 leading-tight">
            {article.title}
          </h2>
          
          <p className="text-white/95 font-semibold">
            {article.source} – {article.date}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default FeaturedArticle;