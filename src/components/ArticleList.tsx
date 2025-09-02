import React from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

interface Article {
  title: string;
  source: string;
  date: string;
  image?: string;
}

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      className="space-y-6 max-h-[600px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
    >
      {articles.map((article, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 group cursor-pointer hover:-translate-y-1"
        >
          <div className="flex space-x-4">
            <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              {article.image ? (
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                  <ImageIcon className="h-8 w-8 text-gray-500" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {article.source} – {article.date}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ArticleList;