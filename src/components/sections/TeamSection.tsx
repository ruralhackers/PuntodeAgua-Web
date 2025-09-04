import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Globe, Users, Code, Calendar, BarChart3 } from 'lucide-react';

const TeamSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex flex-col">
      <div className="flex-1 relative z-10 p-4 md:p-6 lg:p-8">
        {/* Bento Grid */}
        <div className="grid grid-cols-5 grid-rows-3 gap-2 md:gap-3 lg:gap-4 h-[80vh] md:h-[85vh] lg:h-[90vh] max-w-7xl mx-auto">
          {/* Card 0 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-start-1 row-start-1 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
          >
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
            style={{ background: 'linear-gradient(to right, #a4eef5 25%, #6DBDC6 76%)' }}
          >
            <img 
              src="/Beatiful bees (1) 1.png" 
              alt="Beautiful bees illustration" 
              className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 object-contain z-20"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-start-2 row-start-1 col-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
            style={{ backgroundColor: '#647CFF' }}
          >
            <img 
              src="/HackerDays_grupo_2.JPG" 
              alt="Hacker Days group photo" 
              className="w-full h-full object-cover"
            />
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
            <img 
              src="/Layer_1.svg" 
              alt="Layer 1 illustration" 
              className="absolute bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 object-contain z-20"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-start-3 row-start-3 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
          >
            <img 
              src="/HackerDays_grupo_2.JPG" 
              alt="Hacker Days group photo" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Card 5 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-start-4 row-start-1 col-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
          >
          </motion.div>

          {/* Card 6 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="col-start-4 row-start-2 col-span-2 row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 relative border border-white/20"
            style={{ background: 'linear-gradient(to bottom, #81C1E6 0%, #486E7A 82%)' }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 md:p-8">
              <img 
                src="/2 (2).png" 
                alt="Computer illustration" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;