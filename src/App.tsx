import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ContributorsPage from './pages/ContributorsPage';
import PressPage from './pages/PressPage';
import ActivatePage from './pages/ActivatePage';

const AppContent: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contributors" element={<ContributorsPage />} />
        <Route path="/prensa" element={<PressPage />} />
        <Route path="/activa-tu-pueblo" element={<ActivatePage />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;