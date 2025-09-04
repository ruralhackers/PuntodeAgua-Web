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
      className="group hover:scale-105 hover:-rotate-1 transition-all duration-500 cursor-pointer"
    >
      {/* Polaroid container */}
      <div className="bg-white p-4 pb-16 rounded-lg shadow-xl border border-gray-100 transform rotate-1 group-hover:rotate-0 transition-transform duration-500 max-w-[200px] mx-auto">
        {/* Photo */}
        <div className="w-full aspect-square mb-4 overflow-hidden">
          {contributor.photo ? (
            <img 
              src={contributor.photo}
              alt={contributor.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
              <span className="text-white font-bold text-2xl">
                {contributor.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
        
        {/* Text area - like polaroid bottom */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
            {contributor.name}
          </h3>
          
          {contributor.company && (
            <p className="text-primary font-semibold text-sm">
              {contributor.company}
            </p>
          )}
        </div>
      </div>
      
      {/* Tape effect */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-100 opacity-80 rounded-sm shadow-sm border border-yellow-200 -rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
    </motion.div>
  );
};

export default ContributorCard;