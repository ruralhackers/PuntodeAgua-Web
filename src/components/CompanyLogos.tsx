import React from 'react';
import { motion } from 'framer-motion';

const CompanyLogos: React.FC = () => {
  const collaborators = [
    { 
      name: 'Eleven Yellow', 
      logo: '/eleven yellow.png',
      url: 'https://www.elevenyellow.com/'
    },
    { 
      name: 'SiteGround', 
      logo: '/Logo-SiteGround.png',
      url: 'https://www.siteground.es/'
    },
    { 
      name: 'Teimas', 
      logo: '/logo_teimas.png',
      url: 'https://www.teimas.com/'
    },
    { 
      name: 'Next Digital', 
      logo: '/PositivoNEXTdigital-ai.svg',
      url: 'https://www.nextdigital.es/'
    },
    { 
      name: 'Viko', 
      logo: '/logo_Viko.png',
      url: 'https://www.viko.net/'
    }
  ];

  const organizer = {
    name: 'Rural Hackers',
    logo: '/Logo Rural Hackers.png',
    url: 'https://ruralhackers.com/'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="mt-20 space-y-16"
    >
      {/* Organizer Section */}
      <div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 text-center mb-8">
          Organiza
        </h3>
        
        <div className="flex justify-center">
          <motion.a
            href={organizer.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 group hover:-translate-y-2 w-80 h-48"
            className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 group hover:-translate-y-2 w-96 h-64"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img 
                src={organizer.logo} 
                alt={organizer.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 p-2"
              />
            </div>
          </motion.a>
        </div>
      </div>

      {/* Collaborators Section */}
      <div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 text-center mb-12">
          Organizaciones de la alianza
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collaborators.map((company, index) => (
            <motion.a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-white/80 group hover:-translate-y-2 h-32 flex items-center justify-center"
            >
              <img 
                src={company.logo} 
                alt={company.name}
                className={`${
                  company.name === 'Viko' ? 'w-20 h-20' : 
                  company.name === 'Next Digital' || company.name === 'SiteGround' ? 'w-40 h-28' : 
                  'w-32 h-24'
                } object-contain group-hover:scale-110 transition-all duration-500 ${
                  company.name === 'Eleven Yellow' ? 'filter brightness-0' : ''
                }`}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyLogos;