import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMouseGradient } from '../../hooks/useMouseGradient';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  const gradientRef = useMouseGradient();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  return (
    <>
      <section ref={gradientRef} className="min-h-screen relative overflow-hidden flex flex-col">
        {/* Interactive gradient background with specific class */}
        <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 transition-all duration-1000 ease-out" />
        
        <div className="flex-1 relative z-10 p-4 md:p-6 lg:p-8 block">
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              {t('team.title')}
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="hidden md:grid grid-cols-5 grid-rows-3 gap-2 md:gap-3 lg:gap-4 h-[80vh] md:h-[85vh] lg:h-[90vh] max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            {/* Card 0 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-start-1 row-start-1 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">0</div>
              <img 
                src="/Pot.png" 
                alt="Pot illustration" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-start-1 row-start-3 col-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
              style={{ background: 'linear-gradient(to right, #5a9aa7 25%, #3a7a83 76%)' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">1</div>
              <img 
                src="/Beatiful bees (1) 1.png" 
                alt="Beautiful bees illustration" 
                className="absolute top-2 md:top-4 right-2 md:right-4 w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain z-20"
              />
              <div className="absolute inset-0 flex flex-col justify-center p-3 md:p-4 lg:p-6 z-10 pr-8 md:pr-12 lg:pr-16">
                <h3 className="text-white text-sm md:text-lg lg:text-xl font-bold mb-1 md:mb-2 leading-tight">
                  Alianza por el rural
                </h3>
                <p className="text-white/90 text-xs md:text-sm lg:text-base leading-relaxed">
                  Una unión entre vecinas y talento tecnológico para crear soluciones útiles que respondan a las necesidades reales del medio rural.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-start-2 row-start-1 col-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20 group"
              style={{ backgroundColor: '#647CFF' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">2</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-transparent text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(235,155,17,1)] group-hover:text-yellow-400" style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)' }}>
                    HACKER DAYS
                  </div>
                  <div className="text-transparent text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(235,155,17,1)] group-hover:text-yellow-400" style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)' }}>
                    HACKER DAYS
                  </div>
                  <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider">
                    HACKER DAYS
                  </div>
                  <div className="text-transparent text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wider transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(235,155,17,1)] group-hover:text-yellow-400" style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)' }}>
                    HACKER DAYS
                  </div>
                  <div className="text-transparent text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(235,155,17,1)] group-hover:text-yellow-400" style={{ WebkitTextStroke: '1px rgba(0, 0, 0, 0.3)' }}>
                    HACKER DAYS
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-start-2 row-start-2 col-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
              style={{ backgroundColor: '#EB9B11' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">3</div>
              <img 
                src="/Layer_1.svg" 
                alt="Layer 1 illustration" 
                className="absolute -bottom-4 md:-bottom-6 right-2 md:right-4 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain z-20"
              />
              <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4 lg:p-6 pb-16 md:pb-20 lg:pb-24">
                <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed text-center font-medium pb-4 md:pb-6 lg:pb-8">
                  Punto de Agua nació durante los Hackers Days de Rural Hackers, un encuentro colaborativo para crear una solución abierta y gratuita para la gestión comunitaria del agua.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="col-start-3 row-start-3 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
              style={{ backgroundColor: '#50A99A' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">4</div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-4 lg:p-6 text-center">
                <h3 className="text-white text-sm md:text-lg lg:text-xl font-bold mb-2 md:mb-4">
                  Conoce al equipo de Hackers
                </h3>
                <Link 
                  to="/contributors"
                  className="bg-white/20 hover:bg-white/30 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  Ver equipo
                </Link>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="col-start-4 row-start-1 col-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20 cursor-pointer"
              onClick={() => setSelectedImage('/foto1.png')}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">5</div>
              <img 
                src="/foto1.png" 
                alt="Foto 1" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Card 6 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="col-start-4 row-start-2 col-span-2 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20 cursor-pointer"
              style={{ background: 'linear-gradient(to bottom, #81C1E6 0%, #486E7A 82%)' }}
              onClick={() => window.open('https://www.ruralhackers.com', '_blank')}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">6</div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-8">
                <img 
                  src="/2 (2).png" 
                  alt="Computer illustration" 
                  className="w-80 h-80 md:w-96 md:h-96 object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile version - simplified layout */}
          <div className="md:hidden space-y-6 px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
              style={{ background: 'linear-gradient(to right, #5a9aa7 25%, #3a7a83 76%)' }}
            >
              <img 
                src="/Beatiful bees (1) 1.png" 
                alt="Beautiful bees illustration" 
                className="absolute top-2 right-2 w-8 h-8 object-contain z-20"
              />
              <div className="p-6 pr-12">
                <h3 className="text-white text-lg font-bold mb-2 leading-tight">
                  Alianza por el rural
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Una unión entre vecinas y talento tecnológico para crear soluciones útiles que respondan a las necesidades reales del medio rural.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
              style={{ backgroundColor: '#EB9B11' }}
            >
              <img 
                src="/Layer_1.svg" 
                alt="Layer 1 illustration" 
                className="absolute -bottom-2 right-2 w-12 h-12 object-contain z-20"
              />
              <div className="p-6 pb-16">
                <p className="text-white text-sm leading-relaxed text-center font-medium">
                  Punto de Agua nació durante los Hackers Days de Rural Hackers, un encuentro colaborativo para crear una solución abierta y gratuita para la gestión comunitaria del agua.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
              style={{ backgroundColor: '#50A99A' }}
            >
              <div className="p-6 text-center">
                <h3 className="text-white text-lg font-bold mb-4">
                  Conoce al equipo de Hackers
                </h3>
                <Link 
                  to="/contributors"
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  Ver equipo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Dark overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-black rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 border border-white/30"
            >
              <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </button>

            {/* Image container */}
            <div className="p-4 md:p-8">
              <img 
                src={selectedImage}
                alt="Selected image"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default TeamSection;