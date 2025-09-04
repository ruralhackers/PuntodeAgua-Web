import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ContributorsPage from './pages/ContributorsPage';
import PressPage from './pages/PressPage';
import ActivatePage from './pages/ActivatePage';

const AppContent: React.FC = () => {
  const [isTeamSectionVisible, setIsTeamSectionVisible] = useState(false);
  const location = useLocation();

  // Listen for team section visibility changes
  useEffect(() => {
    const handleTeamSectionVisibility = (event: CustomEvent) => {
      setIsTeamSectionVisible(event.detail.isVisible);
    };

    window.addEventListener('teamSectionVisibility', handleTeamSectionVisibility as EventListener);
    return () => window.removeEventListener('teamSectionVisibility', handleTeamSectionVisibility as EventListener);
  }, []);

  // Reset team section visibility when navigating away from home
  useEffect(() => {
    if (location.pathname !== '/') {
      setIsTeamSectionVisible(false);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navigation isHidden={isTeamSectionVisible && location.pathname === '/'} />
      <Routes>
        <Route path="/" element={<HomePage onTeamSectionVisibility={setIsTeamSectionVisible} />} />
        <Route path="/contributors" element={<ContributorsPage />} />
        <Route path="/prensa" element={<PressPage />} />
        <Route path="/activa-tu-pueblo" element={<ActivatePage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;