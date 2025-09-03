import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
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
            className="relative bg-black rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[90vh] border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 border border-white/30"
            >
              <X className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </button>

            {/* Video container */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative px-4 md:px-8">
              {/* Placeholder for video - you can replace this with actual video element */}
              <div className="text-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto border border-white/30"
                >
                  <Play className="h-8 w-8 md:h-12 md:w-12 text-white ml-1" />
                </motion.div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 px-4">
                  Cómo funciona Punto de Agua
                </h3>
                <p className="text-sm md:text-base text-gray-300 max-w-xs md:max-w-md mx-auto px-4 leading-relaxed">
                  Aquí irá el video explicativo de la aplicación
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 md:top-8 md:left-8 w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-6 right-6 md:top-12 md:right-12 w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute bottom-4 left-6 md:bottom-8 md:left-12 w-1.5 h-1.5 md:w-2 md:h-2 bg-primary-light rounded-full animate-pulse delay-500" />
            </div>

            {/* Optional: Video description area */}
            <div className="p-4 md:p-6 lg:p-8 bg-gradient-to-r from-gray-900 to-black border-t border-white/10">
              <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 text-center md:text-left">
                Descubre la gestión del agua simplificada
              </h4>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center md:text-left">
                En este video te mostramos paso a paso cómo Punto de Agua transforma 
                la gestión comunitaria del agua en una tarea sencilla y eficiente.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;