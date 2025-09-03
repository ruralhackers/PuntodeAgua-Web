import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black px-6 lg:px-8">
      {/* Modern animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(77,137,199,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(159,188,158,0.2)_0%,transparent_50%)] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(77,137,199,0.1)_50%,transparent_70%)] animate-gradient bg-300%" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="h-12 w-12 text-accent" />
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            Quién está detrás
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-accent to-primary animate-gradient bg-300%">
              del proyecto
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-10"
          >
            {/* Hackers Days Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden min-h-[200px] lg:h-48"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full flex items-center">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-3 lg:p-4 shadow-2xl flex-shrink-0 mx-auto sm:mx-0"
                  >
                    <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-accent transition-colors duration-300 text-center sm:text-left">
                      Hackers Days
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base text-center sm:text-left">
                      Punto de Agua nació durante los{' '}
                      <a 
                        href="https://www.hackerdays.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-white font-semibold underline decoration-accent/50 hover:decoration-white/80 transition-all duration-300"
                      >
                        Hackers Days
                      </a>{' '}
                      de{' '}
                      <a 
                        href="https://www.ruralhackers.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent hover:text-white font-semibold underline decoration-accent/50 hover:decoration-white/80 transition-all duration-300"
                      >
                        Rural Hackers
                      </a>, 
                      un encuentro colaborativo para crear una solución abierta y gratuita para la gestión comunitaria del agua.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Alianza por el rural Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden min-h-[200px] lg:h-48"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full flex items-center">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    className="bg-gradient-to-br from-accent to-primary rounded-2xl p-3 lg:p-4 shadow-2xl flex-shrink-0 mx-auto sm:mx-0"
                  >
                    <Globe className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4 group-hover:text-primary-light transition-colors duration-300 text-center sm:text-left">
                      Alianza por el rural
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm lg:text-base text-center sm:text-left">
                      Una unión entre vecinas y talento tecnológico para crear soluciones útiles que respondan a las necesidades reales del medio rural.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Modern CTA Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start lg:sticky lg:top-32"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative overflow-hidden max-w-sm w-full h-fit"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary-light rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500 animate-gradient bg-300%" />
              
              <div className="relative bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500">
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/30"
                  >
                    <Sparkles className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                    Conoce al equipo
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
                      de Hackers
                    </span>
                  </h3>
                  
                  <Link 
                    to="/contributors" 
                    className="inline-flex items-center space-x-3 bg-white text-gray-900 px-6 py-3 rounded-2xl font-bold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-white/20 group"
                  >
                    <span>Ver equipo</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;