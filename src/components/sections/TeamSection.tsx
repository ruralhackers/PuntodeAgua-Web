import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X, ChevronDown } from 'lucide-react';

interface TeamSectionProps {
  onEnterSection?: () => void;
  onLeaveSection?: () => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ onEnterSection, onLeaveSection }) => {

  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnterSection?.();
        } else {
          onLeaveSection?.();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [onEnterSection, onLeaveSection]);
  
  return (
    <>
      <section 
        ref={sectionRef}
        className="min-h-screen relative overflow-hidden bg-black flex flex-col snap-start"
      >
        {/* Parallax scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm font-light mb-2">Scroll to explore</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>

        <div className="flex-1 relative z-10 p-4 md:p-6 lg:p-8">
          {/* Bento Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-6 grid-rows-4 gap-2 md:gap-3 lg:gap-4 h-[80vh] md:h-[85vh] lg:h-[90vh] max-w-6xl mx-auto px-4 md:px-8 lg:px-12"
          >
            {/* Card 0 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-start-1 col-span-2 row-start-1 row-span-3 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-500 relative border border-white/20 shadow-2xl"
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
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-start-1 col-span-3 row-start-4 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-500 relative border border-white/20 shadow-2xl"
              style={{ background: 'linear-gradient(to right, #5a9aa7 25%, #3a7a83 76%)' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">1</div>
              <img 
                src="/Beatiful bees (1) 1.png" 
                alt="Beautiful bees illustration" 
                className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 object-contain z-20"
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: -50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-start-3 col-span-2 row-start-1 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-500 relative border border-white/20 shadow-2xl"
              style={{ backgroundColor: '#647CFF' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">2</div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-start-3 col-span-2 row-start-2 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-500 relative border border-white/20 shadow-2xl"
              style={{ backgroundColor: '#EB9B11' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">3</div>
              <img 
                src="/Layer_1.svg" 
                alt="Layer 1 illustration" 
                className="absolute -bottom-6 right-4 w-16 h-16 md:w-20 md:h-20 object-contain z-20"
              />
            </motion.div>

            {/* Card 4 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="col-start-4 row-start-4 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 hover:rotate-2 transition-all duration-500 relative border border-white/20 shadow-2xl"
              style={{ backgroundColor: '#50A99A' }}
            >
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-30">4</div>
            </motion.div>

            {/* Card 5 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="col-start-5 col-span-2 row-start-1 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 hover:-rotate-1 transition-all duration-500 relative border border-white/20 cursor-pointer shadow-2xl"
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
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="col-start-5 col-span-2 row-start-3 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 hover:rotate-1 transition-all duration-500 relative border border-white/20 cursor-pointer shadow-2xl"
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
          </motion.div>
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
                alt="Foto ampliada"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default TeamSection;