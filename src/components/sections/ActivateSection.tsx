import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Code } from 'lucide-react';

const ActivateSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden px-6 lg:px-8">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/def.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-8">
            Activa tu pueblo
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Punto de Agua nació durante los Hackers Days, un encuentro colaborativo para crear una solución abierta y gratuita.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Completamente desarrollada en open source, está disponible para que cualquier comunidad de aguas la utilice.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Si tu pueblo quiere beneficiarse de una herramienta sencilla, puede empezar hoy mismo.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="bg-white/15 backdrop-blur-2xl rounded-3xl p-8 shadow-xl border border-white/30 hover:border-white/50 max-w-md w-full transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-serif font-bold text-white mb-6 text-center">
                ¿Todo listo para empezar?
              </h3>
              
              <Link 
                to="/activa-tu-pueblo"
                className="w-full bg-white text-gray-900 py-4 px-8 rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg flex items-center justify-center space-x-3 group"
              >
                <span>Activarme en Punto de Agua</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                Solución gratuita y open source
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ActivateSection;