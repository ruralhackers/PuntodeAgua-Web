import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ActivateSection from '../components/sections/ActivateSection';
import TeamSection from '../components/sections/TeamSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {

  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ActivateSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default HomePage;