import React from 'react';
import { motion } from 'framer-motion';
import { useMouseGradient } from '../hooks/useMouseGradient';
import ContributorCard from '../components/ContributorCard';
import CompanyLogos from '../components/CompanyLogos';
import Footer from '../components/Footer';
import { contributorsData } from '../data/contributors';

const ContributorsPage: React.FC = () => {
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
            <h1 className="text-6xl lg:text-7xl font-display font-black text-gray-900 mb-8 tracking-tight">
              Equipo
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light max-w-4xl mx-auto">
              Gracias a estas personas y organizaciones, Punto de Agua es hoy un recurso abierto y gratuito. 
              Su trabajo y compromiso durante los Hackers Days hicieron posible una solución que cualquier 
              comunidad puede adoptar y adaptar.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {contributorsData.map((contributor, index) => (
              <ContributorCard 
                key={index} 
                contributor={contributor} 
                index={index} 
              />
            ))}
          </motion.div>

          <CompanyLogos />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContributorsPage;