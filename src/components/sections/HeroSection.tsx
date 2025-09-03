import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Play } from 'lucide-react';
import { useMouseGradient } from '../../hooks/useMouseGradient';

const HeroSection: React.FC = () => {
  const gradientRef = useMouseGradient();

  return (
    <section ref={gradientRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 lg:px-8">
      {/* Interactive gradient background with specific class */}
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 transition-all duration-1000 ease-out" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="text-6xl lg:text-8xl font-serif font-bold text-gray-900 mb-8 leading-tight"
            >
              Punto de Agua
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="text-lg text-gray-600 leading-relaxed font-light mb-12 max-w-xl"
            >
              Una herramienta gratuita que nace para hacer la gestión del agua de tu pueblo más sencilla, cuidando siempre de que el agua siga siendo un bien público.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
              className="flex justify-center lg:justify-start"
            >
              <button className="bg-gradient-to-r from-primary to-primary-light text-white px-12 py-4 rounded-2xl font-bold text-xl hover:from-primary-light hover:to-primary transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3">
                <Play className="h-5 w-5" />
                <span>Cómo funciona</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Mobile screenshots showcase */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Image 2 - Left and slightly higher */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: -5 }}
                  animate={{ opacity: 1, y: 0, rotate: -8 }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                  className="absolute left-0 top-0 z-10"
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl p-3 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[-10deg]">
                    <img 
                      src="/2.png" 
                      alt="Punto de Agua App - Pantalla 2" 
                      className="w-48 h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </motion.div>

                {/* Image 1 - Right */}
                <motion.div
                  initial={{ opacity: 0, y: 30, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, rotate: 8 }}
                  transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                  className="absolute right-0 top-16 z-20"
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-3xl p-3 shadow-2xl border border-white/60 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-[10deg]">
                    <img 
                      src="/1.png" 
                      alt="Punto de Agua App - Pantalla 1" 
                      className="w-48 h-auto rounded-2xl shadow-lg"
                    />
                  </div>
                </motion.div>

                {/* Decorative background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary-light/10 rounded-[4rem] blur-3xl -z-10 scale-110" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;