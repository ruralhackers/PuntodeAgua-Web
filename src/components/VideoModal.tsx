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
              className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Video container */}
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
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
                  className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 mx-auto border border-white/30"
                >
                  <Play className="h-12 w-12 text-white ml-1" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Cómo funciona Punto de Agua
                </h3>
                <p className="text-gray-300 max-w-md mx-auto">
                  Aquí irá el video explicativo de la aplicación
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-12 right-12 w-3 h-3 bg-accent rounded-full animate-pulse delay-1000" />
              <div className="absolute bottom-8 left-12 w-2 h-2 bg-primary-light rounded-full animate-pulse delay-500" />
            </div>

            {/* Optional: Video description area */}
            <div className="p-8 bg-gradient-to-r from-gray-900 to-black border-t border-white/10">
              <h4 className="text-xl font-bold text-white mb-3">
                Descubre la gestión del agua simplificada
              </h4>
              <p className="text-gray-300 leading-relaxed">
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