import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Code } from 'lucide-react';

const ActivateSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-gray-50 px-6 lg:px-8">
      {/* Light elegant background */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-8">
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
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Punto de Agua nació durante los Hackers Days, un encuentro colaborativo para crear una solución abierta y gratuita.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-accent rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Completamente desarrollada en open source, está disponible para que cualquier comunidad de aguas la utilice.
                </p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/60 hover:bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start space-x-4">
                <div className="bg-primary rounded-2xl p-3 shadow-lg flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
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
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/60 max-w-md w-full hover:bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
                ¿Todo listo para empezar?
              </h3>
              
              <Link 
                to="/activa-tu-pueblo"
                className="w-full bg-primary text-white py-4 px-8 rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg flex items-center justify-center space-x-3 group"
              >
                <span>Activarme en Punto de Agua</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <p className="text-xs text-gray-500 text-center mt-4">
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