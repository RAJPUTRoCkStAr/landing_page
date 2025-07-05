import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './styles/tiger-evolution.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Transform the tiger based on scroll progress
  const tigerScale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.3, 0.5, 0.7, 0.9, 1.1, 1.3]);
  const tigerRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Background color transitions
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 100%)', // Dark purple - Origin
      'linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)', // Orange - Birth
      'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)', // Red-Orange - Growth
      'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)', // Deep Red - Hunt
      'linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)', // Dark Red - Power
      'linear-gradient(135deg, #0c4a6e 0%, #06b6d4 100%)'  // Cyber Blue - Evolution
    ]
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const stages = [
    {
      title: "THE ORIGIN",
      subtitle: "From Digital Void",
      description: "In the quantum realm, consciousness begins to stir. The first spark of digital life awakens.",
      progress: 0
    },
    {
      title: "FIRST BREATH",
      subtitle: "Life Emerges",
      description: "Breaking free from the digital egg, the young predator takes its first steps into existence.",
      progress: 0.2
    },
    {
      title: "GROWING STRONG",
      subtitle: "Building Power",
      description: "Each day brings new strength. Muscles develop, instincts sharpen, the hunter awakens.",
      progress: 0.4
    },
    {
      title: "THE HUNT BEGINS",
      subtitle: "Predator Awakens",
      description: "No longer prey, but predator. The tiger learns the ancient art of the hunt.",
      progress: 0.6
    },
    {
      title: "APEX ACHIEVED",
      subtitle: "King of the Wild",
      description: "At the pinnacle of natural evolution. Raw power, perfect instincts, unmatched dominance.",
      progress: 0.8
    },
    {
      title: "CYBER EVOLUTION",
      subtitle: "Beyond Nature",
      description: "Transcending biological limits. Enhanced with quantum processors and digital consciousness.",
      progress: 1
    }
  ];

  const currentStage = Math.floor(scrollYProgress.get() * stages.length);

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-tiger">
          <div className="tiger-silhouette"></div>
        </div>
        <h2>Initializing Evolution...</h2>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Fixed Background */}
      <motion.div 
        className="fixed-background"
        style={{ background: backgroundColor }}
      />

      {/* Fixed Tiger in Center */}
      <div className="tiger-container">
        <motion.div
          className="tiger-evolution"
          style={{ 
            scale: tigerScale,
            rotateY: tigerRotation
          }}
        >
          <TigerForm scrollProgress={scrollYProgress.get()} />
        </motion.div>
      </div>

      {/* Scrollable Content */}
      <div className="content-container">
        {stages.map((stage, index) => (
          <motion.section
            key={index}
            className="stage-section"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="stage-content">
              <motion.h1 
                className="stage-title"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {stage.title}
              </motion.h1>
              <h2 className="stage-subtitle">{stage.subtitle}</h2>
              <p className="stage-description">{stage.description}</p>
              
              {index === stages.length - 1 && (
                <motion.button
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EXPERIENCE THE FUTURE
                </motion.button>
              )}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <motion.div
          className="progress-bar"
          style={{ scaleY: scrollYProgress }}
        />
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="scroll-hint"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
        <span>Scroll to Evolve</span>
      </motion.div>
    </div>
  );
}

// Tiger Component that changes based on scroll
const TigerForm: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const stage = Math.floor(scrollProgress * 6);
  
  return (
    <div className="tiger-form">
      {/* Stage 0: Egg */}
      {stage === 0 && (
        <motion.div
          className="tiger-egg"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(249, 115, 22, 0.5)",
              "0 0 40px rgba(249, 115, 22, 0.8)",
              "0 0 20px rgba(249, 115, 22, 0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="egg-cracks"></div>
        </motion.div>
      )}

      {/* Stage 1: Newborn Cub */}
      {stage === 1 && (
        <motion.div
          className="tiger-cub"
          animate={{
            y: [0, -5, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="cub-body"></div>
          <div className="cub-head"></div>
          <div className="cub-ears"></div>
          <div className="cub-eyes"></div>
          <div className="cub-stripes"></div>
        </motion.div>
      )}

      {/* Stage 2: Young Tiger */}
      {stage === 2 && (
        <motion.div
          className="tiger-young"
          animate={{
            y: [0, -8, 0],
            x: [0, 3, -3, 0]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="young-body"></div>
          <div className="young-head"></div>
          <div className="young-ears"></div>
          <div className="young-eyes"></div>
          <div className="young-stripes"></div>
          <div className="young-tail"></div>
        </motion.div>
      )}

      {/* Stage 3: Hunting Tiger */}
      {stage === 3 && (
        <motion.div
          className="tiger-hunter"
          animate={{
            y: [0, -10, 0],
            scaleX: [1, 1.05, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="hunter-body"></div>
          <div className="hunter-head"></div>
          <div className="hunter-ears"></div>
          <div className="hunter-eyes"></div>
          <div className="hunter-stripes"></div>
          <div className="hunter-tail"></div>
          <div className="hunter-paws"></div>
        </motion.div>
      )}

      {/* Stage 4: Adult Tiger */}
      {stage === 4 && (
        <motion.div
          className="tiger-adult"
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="adult-body"></div>
          <div className="adult-head"></div>
          <div className="adult-ears"></div>
          <div className="adult-eyes"></div>
          <div className="adult-stripes"></div>
          <div className="adult-tail"></div>
          <div className="adult-paws"></div>
          <div className="adult-mane"></div>
        </motion.div>
      )}

      {/* Stage 5: Cyber Tiger */}
      {stage >= 5 && (
        <motion.div
          className="tiger-cyber"
          animate={{
            y: [0, -15, 0],
            boxShadow: [
              "0 0 30px rgba(6, 182, 212, 0.5)",
              "0 0 60px rgba(6, 182, 212, 0.8)",
              "0 0 30px rgba(6, 182, 212, 0.5)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="cyber-body"></div>
          <div className="cyber-head"></div>
          <div className="cyber-ears"></div>
          <div className="cyber-eyes"></div>
          <div className="cyber-stripes"></div>
          <div className="cyber-tail"></div>
          <div className="cyber-paws"></div>
          <div className="cyber-enhancements"></div>
        </motion.div>
      )}
    </div>
  );
};

export default App;