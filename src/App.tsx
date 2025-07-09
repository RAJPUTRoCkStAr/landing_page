import React, { useEffect, useState } from 'react';
import PremiumLoadingExperience from './components/PremiumLoadingExperience';
import MainAppContent from './components/MainAppContent';
import './styles/premium-evolution.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <PremiumLoadingExperience />;
  }

  return <MainAppContent />;
}

export default App;