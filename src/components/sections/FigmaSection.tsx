import React from 'react';
import { motion } from 'framer-motion';

const FigmaSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <iframe 
              style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
              width="800" 
              height="450" 
              src="https://embed.figma.com/design/gOgCbAp2M0om5X9K1vseCC/Bento-Maker---Ultimate-Bento-Grid--Community-?node-id=15-4006&embed-host=share" 
              allowFullScreen
              className="rounded-2xl w-full max-w-4xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FigmaSection;