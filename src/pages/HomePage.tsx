import React, { useEffect, useRef } from 'react';
import { useMouseGradient } from '../hooks/useMouseGradient';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ActivateSection from '../components/sections/ActivateSection';
import TeamSection from '../components/sections/TeamSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const gradientRef = useMouseGradient();

  return (
    <div ref={gradientRef} className="relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 transition-all duration-1000 ease-out -z-10" />
      <HeroSection />
      <FeaturesSection />
      <ActivateSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default HomePage;