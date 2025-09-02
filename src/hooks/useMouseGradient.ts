import { useEffect, useRef } from 'react';

export const useMouseGradient = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;
        
        // Find the gradient background element
        const element = ref.current.querySelector('.gradient-bg') as HTMLElement;
        if (element) {
          element.style.background = `
            radial-gradient(circle at ${xPercent}% ${yPercent}%, 
              rgba(77, 137, 199, 0.4) 0%, 
              rgba(159, 188, 158, 0.25) 35%, 
              rgba(255, 255, 255, 0.8) 70%
            )
          `;
        }
      }
    };

    const handleScroll = () => {
      if (ref.current) {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        const element = ref.current.querySelector('.gradient-bg') as HTMLElement;
        if (element) {
          const baseOpacity = 0.2 + (scrollPercent * 0.3);
          element.style.background = `
            linear-gradient(135deg, 
              rgba(77, 137, 199, ${baseOpacity}) 0%, 
              rgba(159, 188, 158, ${baseOpacity * 0.8}) 50%, 
              rgba(255, 255, 255, 0.9) 100%
            )
          `;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ref;
};