import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import EggSection from './components/EggSection';
import CubSection from './components/CubSection';
import JuvenileSection from './components/JuvenileSection';
import AdultSection from './components/AdultSection';
import CyberSection from './components/CyberSection';
import LoadingExperience from './components/LoadingExperience';
import ParallaxBackground from './components/ParallaxBackground';
import './styles/cyber-tiger.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
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
          <ParallaxBackground currentSection={currentSection} />
          
          <HeroSection />
          <EggSection />
          <CubSection />
          <JuvenileSection />
          <AdultSection />
          <CyberSection />
          
          {/* Navigation Dots */}
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
            {['Origin', 'Birth', 'Growth', 'Hunt', 'Power', 'Cyber'].map((label, i) => (
              <motion.div
                key={i}
                className="group cursor-pointer"
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  window.scrollTo({
                    top: i * window.innerHeight,
                    behavior: 'smooth'
                  });
                }}
              >
                <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                  currentSection === i 
                    ? 'bg-orange-500 border-orange-500 shadow-lg shadow-orange-500/50' 
                    : 'border-white/30 hover:border-orange-400'
                }`} />
                <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-xs font-bold text-white/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;