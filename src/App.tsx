import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import QuantumSection from './components/QuantumSection';
import DimensionalSection from './components/DimensionalSection';
import NeuralSection from './components/NeuralSection';
import CosmicSection from './components/CosmicSection';
import TranscendenceSection from './components/TranscendenceSection';
import LoadingExperience from './components/LoadingExperience';
import './styles/quantum.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Preload experience
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-black text-white">
      <AnimatePresence>
        {!isLoaded && <LoadingExperience key="loading" />}
      </AnimatePresence>

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {/* Quantum Cursor */}
          <div className="quantum-cursor" />
          
          {/* Reality Distortion Field */}
          <div className="reality-field" />
          
          {/* Sections */}
          <HeroSection />
          <QuantumSection />
          <DimensionalSection />
          <NeuralSection />
          <CosmicSection />
          <TranscendenceSection />
          
          {/* Navigation Dots */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-3 h-3 rounded-full border-2 cursor-pointer transition-all duration-500 ${
                  currentSection === i 
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                    : 'border-white/30 hover:border-white/60'
                }`}
                whileHover={{ scale: 1.5 }}
                onClick={() => {
                  window.scrollTo({
                    top: i * window.innerHeight,
                    behavior: 'smooth'
                  });
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;