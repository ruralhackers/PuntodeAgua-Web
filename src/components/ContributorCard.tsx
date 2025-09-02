import React from 'react';
import { motion } from 'framer-motion';

interface Contributor {
  name: string;
  company: string;
  role?: string;
}

interface ContributorCardProps {
  contributor: Contributor;
  index: number;
}

const ContributorCard: React.FC<ContributorCardProps> = ({ contributor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 group hover:-translate-y-1"
    >
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
          <span className="text-white font-bold text-xl">
            {contributor.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {contributor.name}
        </h3>
        
        <p className="text-primary font-semibold">
          {contributor.company}
        </p>
        
        {contributor.role && (
          <p className="text-sm text-gray-500 mt-2">
            {contributor.role}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ContributorCard;