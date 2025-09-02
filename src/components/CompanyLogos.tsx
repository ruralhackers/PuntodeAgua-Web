import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogos: React.FC = () => {
  const companies = [
    { name: 'Teimas', logo: 'T' },
    { name: 'SiteGround', logo: 'SG' },
    { name: 'Eleven Yellow', logo: 'EY' },
    { name: 'Anceu Coliving', logo: 'AC' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="mt-20"
    >
      <h3 className="text-2xl font-serif font-bold text-gray-900 text-center mb-12">
        Organizaciones colaboradoras
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 group flex flex-col items-center justify-center hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
              <span className="text-gray-600 font-bold text-lg">
                {company.logo}
              </span>
            </div>
            <h4 className="text-lg font-bold text-gray-900 text-center group-hover:text-primary transition-colors duration-300">
              {company.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompanyLogos;