import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Eye, Crown, Cpu, Sparkles } from 'lucide-react';
import './styles/tiger-evolution.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enhanced parallax transforms
  const tigerScale = useTransform(smoothProgress, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], [0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.6]);
  const tigerRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const tigerY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -20, 10, -30, 20, -40]);

  // Dynamic background with multiple layers
  const backgroundLayer1 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
    [
      'radial-gradient(circle at 30% 70%, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      'radial-gradient(circle at 60% 40%, #7c2d12 0%, #ea580c 50%, #fb923c 100%)',
      'radial-gradient(circle at 40% 80%, #dc2626 0%, #f59e0b 50%, #fbbf24 100%)',
      'radial-gradient(circle at 70% 30%, #991b1b 0%, #dc2626 50%, #ef4444 100%)',
      'radial-gradient(circle at 20% 60%, #7f1d1d 0%, #450a0a 50%, #1c1917 100%)',
      'radial-gradient(circle at 80% 20%, #0c4a6e 0%, #0369a1 50%, #0284c7 100%)',
      'radial-gradient(circle at 50% 50%, #065f46 0%, #047857 50%, #059669 100%)'
    ]
  );

  const backgroundLayer2 = useTransform(
    smoothProgress,
    [0, 1],
    [
      'linear-gradient(45deg, rgba(139, 69, 19, 0.1) 0%, rgba(255, 140, 0, 0.1) 100%)',
      'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)'
    ]
  );

  // Particle system transforms
  const particleOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.3, 0.8, 0.8, 0.3]);
  const particleScale = useTransform(smoothProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);

  // Text animations
  const textY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const textOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.7]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((latest) => {
      const newStage = Math.min(Math.floor(latest * 6), 5);
      setCurrentStage(newStage);
    });
    return unsubscribe;
  }, [smoothProgress]);

  const stages = [
    {
      title: "THE GENESIS",
      subtitle: "Digital Conception",
      description: "In the quantum void, consciousness begins to stir. The first spark of digital life emerges from pure energy, wrapped in protective algorithms.",
      icon: Sparkles,
      color: "#3b82f6",
      progress: 0
    },
    {
      title: "FIRST AWAKENING",
      subtitle: "Neural Birth",
      description: "Breaking through dimensional barriers, the young entity takes its first breath in the digital realm. Synapses fire, creating the foundation of awareness.",
      icon: Eye,
      color: "#f97316",
      progress: 0.16
    },
    {
      title: "POWER SURGE",
      subtitle: "Strength Amplified",
      description: "Raw energy courses through digital veins. Each moment brings exponential growth, building the framework for ultimate dominance.",
      icon: Zap,
      color: "#eab308",
      progress: 0.33
    },
    {
      title: "APEX PREDATOR",
      subtitle: "Hunter's Instinct",
      description: "The transformation is complete. No longer prey, but the ultimate predator. Ancient instincts merge with digital precision.",
      icon: Crown,
      color: "#dc2626",
      progress: 0.5
    },
    {
      title: "SOVEREIGN REIGN",
      subtitle: "Digital Dominion",
      description: "At the pinnacle of natural evolution. Every movement calculated, every decision perfect. The ruler of all digital realms.",
      icon: Crown,
      color: "#7f1d1d",
      progress: 0.66
    },
    {
      title: "TRANSCENDENCE",
      subtitle: "Beyond Mortality",
      description: "Evolution complete. Biological limits shattered. Enhanced with quantum consciousness and infinite digital potential.",
      icon: Cpu,
      color: "#06b6d4",
      progress: 0.83
    }
  ];

  if (!isLoaded) {
    return <LoadingExperience />;
  }

  return (
    <div ref={containerRef} className="app">
      {/* Multi-layer Background */}
      <motion.div 
        className="fixed-background"
        style={{ background: backgroundLayer1 }}
      />
      <motion.div 
        className="fixed-background-overlay"
        style={{ background: backgroundLayer2 }}
      />

      {/* Enhanced Particle System */}
      <div className="particle-system">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: particleOpacity,
              scale: particleScale
            }}
            animate={{
              y: [0, -window.innerHeight * 2],
              x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
              rotate: [0, 360],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Enhanced Tiger Container */}
      <div className="tiger-container">
        <motion.div
          className="tiger-evolution"
          style={{ 
            scale: tigerScale,
            rotateZ: tigerRotate,
            y: tigerY
          }}
        >
          <TigerSVG 
            scrollProgress={smoothProgress.get()} 
            currentStage={currentStage}
          />
        </motion.div>
        
        {/* Energy Rings */}
        <motion.div
          className="energy-ring ring-1"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="energy-ring ring-2"
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Enhanced Content */}
      <div className="content-container">
        {stages.map((stage, index) => (
          <motion.section
            key={index}
            className="stage-section"
            style={{
              y: textY,
              opacity: textOpacity
            }}
          >
            <div className="stage-content">
              <motion.div
                className="stage-icon"
                animate={{
                  scale: currentStage === index ? [1, 1.2, 1] : 1,
                  rotate: currentStage === index ? [0, 180, 360] : 0
                }}
                transition={{
                  duration: 2,
                  repeat: currentStage === index ? Infinity : 0
                }}
                style={{ color: stage.color }}
              >
                <stage.icon size={60} />
              </motion.div>

              <motion.h1 
                className="stage-title"
                animate={{
                  textShadow: currentStage === index ? [
                    `0 0 20px ${stage.color}`,
                    `0 0 40px ${stage.color}`,
                    `0 0 60px ${stage.color}`,
                    `0 0 40px ${stage.color}`,
                    `0 0 20px ${stage.color}`
                  ] : `0 0 20px rgba(255,255,255,0.5)`
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {stage.title}
              </motion.h1>
              
              <motion.h2 
                className="stage-subtitle"
                style={{ color: stage.color }}
              >
                {stage.subtitle}
              </motion.h2>
              
              <motion.p 
                className="stage-description"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {stage.description}
              </motion.p>
              
              {index === stages.length - 1 && (
                <motion.button
                  className="cta-button"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 50px rgba(6, 182, 212, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.6)",
                      "0 0 20px rgba(6, 182, 212, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Cpu className="inline mr-2" size={20} />
                  TRANSCEND REALITY
                </motion.button>
              )}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Enhanced Progress Indicator */}
      <div className="scroll-progress">
        <motion.div
          className="progress-bar"
          style={{ scaleY: smoothProgress }}
        />
        <div className="progress-stages">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className={`progress-stage ${currentStage >= index ? 'active' : ''}`}
              style={{ 
                top: `${(index / (stages.length - 1)) * 100}%`,
                backgroundColor: stage.color
              }}
              animate={{
                scale: currentStage === index ? [1, 1.5, 1] : 1,
                boxShadow: currentStage === index ? 
                  `0 0 20px ${stage.color}` : 
                  `0 0 5px ${stage.color}`
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <stage.icon size={12} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Hint */}
      <AnimatePresence>
        {currentStage === 0 && (
          <motion.div
            className="scroll-hint"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              y: { duration: 2, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <ChevronDown size={32} />
            <span>Scroll to Evolve</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Enhanced Loading Experience
const LoadingExperience: React.FC = () => {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* DNA Helix Animation */}
      <div className="dna-container">
        <motion.div
          className="dna-helix"
          animate={{ rotateY: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="dna-strand"
              style={{
                transform: `rotateZ(${i * 18}deg) translateX(60px)`,
                animationDelay: `${i * 0.1}s`
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.h2
          className="loading-title"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Initializing Evolution Protocol
        </motion.h2>
        
        <motion.div
          className="loading-progress"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        
        <motion.p
          className="loading-subtitle"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Quantum consciousness awakening...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Tiger SVG Component
const TigerSVG: React.FC<{ scrollProgress: number; currentStage: number }> = ({ 
  scrollProgress, 
  currentStage 
}) => {
  return (
    <div className="tiger-svg-container">
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        className="tiger-svg"
      >
        <defs>
          {/* Enhanced Gradients */}
          <radialGradient id="eggGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          
          <radialGradient id="cubGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </radialGradient>
          
          <radialGradient id="youngGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
          
          <radialGradient id="hunterGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </radialGradient>
          
          <radialGradient id="adultGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </radialGradient>
          
          <radialGradient id="cyberGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#0891b2" />
            <stop offset="100%" stopColor="#0e7490" />
          </radialGradient>

          {/* Glow Effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Stage 0: Genesis Egg */}
        {currentStage === 0 && (
          <g className="tiger-stage" filter="url(#glow)">
            <motion.ellipse
              cx="200"
              cy="200"
              rx="80"
              ry="100"
              fill="url(#eggGradient)"
              stroke="#60a5fa"
              strokeWidth="3"
              animate={{
                ry: [100, 110, 100],
                opacity: [0.7, 1, 0.7],
                strokeWidth: [3, 6, 3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Energy patterns inside egg */}
            {[...Array(8)].map((_, i) => (
              <motion.path
                key={i}
                d={`M ${160 + i * 10} ${150 + i * 5} Q 200 ${140 + i * 3} ${240 - i * 10} ${150 + i * 5}`}
                stroke="#93c5fd"
                strokeWidth="2"
                fill="none"
                animate={{
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </g>
        )}

        {/* Stage 1: Newborn Cub */}
        {currentStage === 1 && (
          <g className="tiger-stage" filter="url(#glow)">
            <motion.ellipse
              cx="200"
              cy="240"
              rx="60"
              ry="35"
              fill="url(#cubGradient)"
              animate={{
                cy: [240, 235, 240],
                rx: [60, 65, 60]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx="200"
              cy="180"
              r="45"
              fill="url(#cubGradient)"
              animate={{
                cy: [180, 175, 180],
                r: [45, 48, 45]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Enhanced features */}
            <ellipse cx="175" cy="155" rx="12" ry="15" fill="#ea580c" />
            <ellipse cx="225" cy="155" rx="12" ry="15" fill="#ea580c" />
            <circle cx="185" cy="175" r="8" fill="#fbbf24" />
            <circle cx="215" cy="175" r="8" fill="#fbbf24" />
            <ellipse cx="185" cy="175" rx="3" ry="6" fill="#000" />
            <ellipse cx="215" cy="175" rx="3" ry="6" fill="#000" />
          </g>
        )}

        {/* Continue with enhanced stages... */}
        {/* I'll implement the remaining stages with similar enhancements */}
        
        {currentStage >= 2 && currentStage <= 5 && (
          <g className="tiger-stage" filter="url(#glow)">
            {/* Placeholder for other stages - will be fully implemented */}
            <motion.circle
              cx="200"
              cy="200"
              r={50 + currentStage * 20}
              fill={`url(#${['youngGradient', 'hunterGradient', 'adultGradient', 'cyberGradient'][currentStage - 2]})`}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default App;