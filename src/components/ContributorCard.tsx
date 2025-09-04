import React from 'react';
import { motion } from 'framer-motion';

interface Contributor {
  name: string;
  company: string;
  role?: string;
  photo?: string;
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
      className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 group hover:-translate-y-1 hover:rotate-1"
    >
      <div className="text-center">
        {/* Polaroid-style photo container */}
        <div className="relative mx-auto mb-4 group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500">
          <div className="bg-white p-2 rounded-lg shadow-xl border border-gray-200 transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
            {contributor.photo ? (
              <img 
                src={contributor.photo}
                alt={contributor.name}
                className="w-24 h-24 object-cover rounded-md"
              />
            ) : (
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {contributor.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
          {/* Polaroid tape effect */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-yellow-100 opacity-80 rounded-sm shadow-sm border border-yellow-200"></div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
          {contributor.name}
        </h3>
        
        {contributor.company && (
          <p className="text-primary font-semibold text-sm">
            {contributor.company}
          </p>
        )}
        
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