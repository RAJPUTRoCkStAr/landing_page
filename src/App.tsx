import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Eye, Crown, Cpu, Sparkles, Target } from 'lucide-react';
import './styles/tiger-evolution.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Ultra-smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Advanced parallax transforms with easing
  const tigerScale = useTransform(smoothProgress, 
    [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], 
    [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.5],
    { ease: [0.25, 0.46, 0.45, 0.94] }
  );
  
  const tigerRotate = useTransform(smoothProgress, [0, 1], [0, 720]);
  const tigerY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [50, -30, 20, -40, 30, -60]);
  const tigerOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.8]);

  // Dynamic multi-layer backgrounds
  const backgroundLayer1 = useTransform(
    smoothProgress,
    [0, 0.16, 0.33, 0.5, 0.66, 0.83, 1],
    [
      'radial-gradient(ellipse at 20% 80%, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
      'radial-gradient(ellipse at 80% 20%, #7c2d12 0%, #ea580c 25%, #fb923c 50%, #fdba74 75%, #fed7aa 100%)',
      'radial-gradient(ellipse at 60% 90%, #dc2626 0%, #f59e0b 25%, #fbbf24 50%, #fde047 75%, #fef08a 100%)',
      'radial-gradient(ellipse at 30% 10%, #991b1b 0%, #dc2626 25%, #ef4444 50%, #f87171 75%, #fca5a5 100%)',
      'radial-gradient(ellipse at 90% 70%, #7f1d1d 0%, #450a0a 25%, #1c1917 50%, #292524 75%, #44403c 100%)',
      'radial-gradient(ellipse at 10% 30%, #0c4a6e 0%, #0369a1 25%, #0284c7 50%, #0ea5e9 75%, #38bdf8 100%)',
      'radial-gradient(ellipse at 50% 50%, #065f46 0%, #047857 25%, #059669 50%, #10b981 75%, #34d399 100%)'
    ]
  );

  const backgroundLayer2 = useTransform(smoothProgress, [0, 1], [
    'conic-gradient(from 0deg at 50% 50%, rgba(139, 69, 19, 0.1) 0deg, rgba(255, 140, 0, 0.2) 90deg, rgba(220, 38, 38, 0.1) 180deg, rgba(139, 69, 19, 0.1) 270deg, rgba(139, 69, 19, 0.1) 360deg)',
    'conic-gradient(from 180deg at 50% 50%, rgba(6, 182, 212, 0.2) 0deg, rgba(16, 185, 129, 0.3) 90deg, rgba(139, 92, 246, 0.2) 180deg, rgba(6, 182, 212, 0.2) 270deg, rgba(6, 182, 212, 0.2) 360deg)'
  ]);

  const backgroundLayer3 = useTransform(smoothProgress, [0, 1], [
    'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)',
    'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)'
  ]);

  // Advanced particle system
  const particleCount = useTransform(smoothProgress, [0, 0.5, 1], [50, 150, 200]);
  const particleSpeed = useTransform(smoothProgress, [0, 1], [1, 3]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 4000);
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
      title: "QUANTUM GENESIS",
      subtitle: "The First Spark",
      description: "In the infinite void of digital space, consciousness begins to coalesce. Quantum particles dance in perfect harmony, forming the blueprint of ultimate evolution.",
      icon: Sparkles,
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)",
      progress: 0
    },
    {
      title: "NEURAL AWAKENING",
      subtitle: "First Consciousness",
      description: "Synapses fire across dimensional barriers. The first breath of digital life pierces through reality, creating ripples in the fabric of existence.",
      icon: Eye,
      color: "#f97316",
      bgColor: "rgba(249, 115, 22, 0.1)",
      progress: 0.16
    },
    {
      title: "ENERGY SURGE",
      subtitle: "Power Amplification",
      description: "Raw cosmic energy courses through digital veins. Each pulse brings exponential growth, building the foundation for unprecedented dominance.",
      icon: Zap,
      color: "#eab308",
      bgColor: "rgba(234, 179, 8, 0.1)",
      progress: 0.33
    },
    {
      title: "APEX PREDATOR",
      subtitle: "Hunter's Instinct",
      description: "The transformation reaches critical mass. Ancient predatory instincts merge with quantum precision, creating the perfect digital hunter.",
      icon: Target,
      color: "#dc2626",
      bgColor: "rgba(220, 38, 38, 0.1)",
      progress: 0.5
    },
    {
      title: "SOVEREIGN DOMINION",
      subtitle: "Absolute Power",
      description: "At the pinnacle of natural evolution. Every movement calculated, every decision flawless. The undisputed ruler of all digital realms.",
      icon: Crown,
      color: "#7f1d1d",
      bgColor: "rgba(127, 29, 29, 0.1)",
      progress: 0.66
    },
    {
      title: "TRANSCENDENCE",
      subtitle: "Beyond Reality",
      description: "Evolution complete. Biological constraints shattered. Enhanced with infinite quantum consciousness and unlimited digital potential.",
      icon: Cpu,
      color: "#06b6d4",
      bgColor: "rgba(6, 182, 212, 0.1)",
      progress: 0.83
    }
  ];

  if (!isLoaded) {
    return <LoadingExperience />;
  }

  return (
    <div ref={containerRef} className="app">
      {/* Multi-layer Dynamic Background */}
      <motion.div 
        className="fixed-background layer-1"
        style={{ background: backgroundLayer1 }}
      />
      <motion.div 
        className="fixed-background layer-2"
        style={{ background: backgroundLayer2 }}
      />
      <motion.div 
        className="fixed-background layer-3"
        style={{ background: backgroundLayer3 }}
      />

      {/* Interactive Mouse Follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Advanced Particle System */}
      <div className="particle-system">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className={`particle particle-${i % 3}`}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -window.innerHeight * 3],
              x: [
                (Math.random() - 0.5) * 100,
                (Math.random() - 0.5) * 300,
                (Math.random() - 0.5) * 200
              ],
              rotate: [0, 360, 720],
              scale: [0, 1, 0.5, 0],
              opacity: [0, 0.8, 0.4, 0]
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 20,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="geometric-elements">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`geometric-shape shape-${i % 4}`}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.8],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
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
            y: tigerY,
            opacity: tigerOpacity
          }}
        >
          <TigerSVG 
            scrollProgress={smoothProgress.get()} 
            currentStage={currentStage}
          />
        </motion.div>
        
        {/* Dynamic Energy Rings */}
        <motion.div
          className="energy-ring ring-1"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="energy-ring ring-2"
          animate={{
            rotate: -360,
            scale: [1.2, 0.8, 1.2],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="energy-ring ring-3"
          animate={{
            rotate: 360,
            scale: [0.8, 1.5, 0.8],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
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
              backgroundColor: currentStage === index ? stage.bgColor : 'transparent'
            }}
          >
            <div className="stage-content">
              <motion.div
                className="stage-icon-container"
                animate={{
                  scale: currentStage === index ? [1, 1.3, 1] : 1,
                  rotate: currentStage === index ? [0, 360] : 0,
                  y: currentStage === index ? [0, -10, 0] : 0
                }}
                transition={{
                  duration: 3,
                  repeat: currentStage === index ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="stage-icon"
                  style={{ 
                    color: stage.color,
                    filter: currentStage === index ? `drop-shadow(0 0 20px ${stage.color})` : 'none'
                  }}
                >
                  <stage.icon size={80} />
                </div>
              </motion.div>

              <motion.h1 
                className="stage-title"
                animate={{
                  textShadow: currentStage === index ? [
                    `0 0 30px ${stage.color}`,
                    `0 0 60px ${stage.color}`,
                    `0 0 90px ${stage.color}`,
                    `0 0 60px ${stage.color}`,
                    `0 0 30px ${stage.color}`
                  ] : `0 0 20px rgba(255,255,255,0.5)`,
                  scale: currentStage === index ? [1, 1.02, 1] : 1
                }}
                transition={{ 
                  textShadow: { duration: 4, repeat: Infinity },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                {stage.title}
              </motion.h1>
              
              <motion.h2 
                className="stage-subtitle"
                style={{ color: stage.color }}
                animate={{
                  opacity: currentStage === index ? [0.8, 1, 0.8] : 0.8
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {stage.subtitle}
              </motion.h2>
              
              <motion.p 
                className="stage-description"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {stage.description}
              </motion.p>
              
              {index === stages.length - 1 && (
                <motion.button
                  className="cta-button"
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 0 80px rgba(6, 182, 212, 0.8)",
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(6, 182, 212, 0.4)",
                      "0 0 60px rgba(6, 182, 212, 0.7)",
                      "0 0 30px rgba(6, 182, 212, 0.4)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity },
                    hover: { duration: 0.3 }
                  }}
                >
                  <Cpu className="inline mr-3" size={24} />
                  TRANSCEND REALITY
                  <motion.div
                    className="button-glow"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>
              )}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Advanced Progress Indicator */}
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
                backgroundColor: stage.color,
                borderColor: stage.color
              }}
              animate={{
                scale: currentStage === index ? [1, 1.8, 1] : currentStage > index ? 1.2 : 1,
                boxShadow: currentStage === index ? 
                  `0 0 30px ${stage.color}` : 
                  currentStage > index ? `0 0 15px ${stage.color}` : `0 0 5px ${stage.color}`,
                rotate: currentStage === index ? [0, 360] : 0
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                boxShadow: { duration: 1.5, repeat: Infinity },
                rotate: { duration: 4, repeat: Infinity }
              }}
            >
              <stage.icon size={14} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Hint */}
      <AnimatePresence>
        {currentStage === 0 && (
          <motion.div
            className="scroll-hint"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: [0, 15, 0],
              scale: [1, 1.15, 1]
            }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ 
              y: { duration: 2.5, repeat: Infinity },
              scale: { duration: 2.5, repeat: Infinity },
              exit: { duration: 0.5 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <ChevronDown size={36} />
            </motion.div>
            <span>Scroll to Begin Evolution</span>
            <motion.div
              className="scroll-hint-glow"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Revolutionary Loading Experience
const LoadingExperience: React.FC = () => {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* Quantum DNA Helix */}
      <div className="quantum-dna-container">
        <motion.div
          className="quantum-dna-helix"
          animate={{ rotateY: 360, rotateX: 15 }}
          transition={{ 
            rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="quantum-strand"
              style={{
                transform: `rotateZ(${i * 12}deg) translateX(80px)`,
              }}
              animate={{
                scale: [0.3, 1.8, 0.3],
                opacity: [0.2, 1, 0.2],
                rotateY: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Quantum Particles */}
        <div className="quantum-particles">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="quantum-particle"
              style={{
                left: '50%',
                top: '50%'
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 1200],
                y: [0, (Math.random() - 0.5) * 1200],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading Content */}
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <motion.h2
          className="loading-title"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Quantum Evolution Protocol
        </motion.h2>
        
        <motion.div className="loading-progress-container">
          <motion.div
            className="loading-progress"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
          <motion.div
            className="loading-progress-glow"
            animate={{ 
              x: ["-100%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        <motion.p
          className="loading-subtitle"
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Initializing digital consciousness matrix...
        </motion.p>

        <motion.div
          className="loading-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="stat">
            <span className="stat-label">Neural Networks:</span>
            <motion.span 
              className="stat-value"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ONLINE
            </motion.span>
          </div>
          <div className="stat">
            <span className="stat-label">Quantum State:</span>
            <motion.span 
              className="stat-value"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              STABLE
            </motion.span>
          </div>
          <div className="stat">
            <span className="stat-label">Evolution:</span>
            <motion.span 
              className="stat-value"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              READY
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Revolutionary Tiger SVG Component
const TigerSVG: React.FC<{ scrollProgress: number; currentStage: number }> = ({ 
  scrollProgress, 
  currentStage 
}) => {
  const stageColors = [
    '#3b82f6', '#f97316', '#eab308', '#dc2626', '#7f1d1d', '#06b6d4'
  ];

  return (
    <div className="tiger-svg-container">
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        className="tiger-svg"
      >
        <defs>
          {/* Advanced Gradients */}
          <radialGradient id={`stageGradient${currentStage}`} cx="0.3" cy="0.3">
            <stop offset="0%" stopColor={stageColors[currentStage]} stopOpacity="0.9" />
            <stop offset="50%" stopColor={stageColors[currentStage]} stopOpacity="0.6" />
            <stop offset="100%" stopColor={stageColors[currentStage]} stopOpacity="0.3" />
          </radialGradient>

          {/* Advanced Glow Effects */}
          <filter id="advancedGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="innerGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic Tiger Form */}
        <motion.g 
          className="tiger-form"
          filter="url(#advancedGlow)"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Main Body */}
          <motion.ellipse
            cx="250"
            cy="300"
            rx={80 + currentStage * 15}
            ry={50 + currentStage * 10}
            fill={`url(#stageGradient${currentStage})`}
            stroke={stageColors[currentStage]}
            strokeWidth="3"
            animate={{
              rx: [80 + currentStage * 15, 85 + currentStage * 15, 80 + currentStage * 15],
              ry: [50 + currentStage * 10, 55 + currentStage * 10, 50 + currentStage * 10]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Head */}
          <motion.circle
            cx="250"
            cy="200"
            r={60 + currentStage * 8}
            fill={`url(#stageGradient${currentStage})`}
            stroke={stageColors[currentStage]}
            strokeWidth="3"
            animate={{
              r: [60 + currentStage * 8, 65 + currentStage * 8, 60 + currentStage * 8],
              cy: [200, 195, 200]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Eyes */}
          <motion.circle
            cx="230"
            cy="185"
            r="12"
            fill="#ffffff"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <motion.circle
            cx="270"
            cy="185"
            r="12"
            fill="#ffffff"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5
            }}
          />

          {/* Pupils */}
          <motion.ellipse
            cx="230"
            cy="185"
            rx="4"
            ry="8"
            fill={stageColors[currentStage]}
            animate={{
              ry: [8, 12, 8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />
          <motion.ellipse
            cx="270"
            cy="185"
            rx="4"
            ry="8"
            fill={stageColors[currentStage]}
            animate={{
              ry: [8, 12, 8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.3
            }}
          />

          {/* Dynamic Stripes */}
          {[...Array(6)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${180 + i * 5} ${160 + i * 20} Q 250 ${155 + i * 18} ${320 - i * 5} ${160 + i * 20}`}
              stroke={stageColors[currentStage]}
              strokeWidth="4"
              fill="none"
              filter="url(#innerGlow)"
              animate={{
                opacity: [0.4, 1, 0.4],
                strokeWidth: [4, 6, 4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}

          {/* Energy Aura */}
          <motion.circle
            cx="250"
            cy="250"
            r="150"
            fill="none"
            stroke={stageColors[currentStage]}
            strokeWidth="2"
            strokeOpacity="0.3"
            strokeDasharray="10,5"
            animate={{
              r: [150, 180, 150],
              strokeOpacity: [0.1, 0.4, 0.1],
              rotate: 360
            }}
            transition={{
              r: { duration: 4, repeat: Infinity },
              strokeOpacity: { duration: 3, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
        </motion.g>

        {/* Stage-specific Effects */}
        {currentStage >= 3 && (
          <motion.g className="advanced-effects">
            {/* Lightning Effects */}
            {[...Array(8)].map((_, i) => (
              <motion.path
                key={i}
                d={`M 250 100 L ${200 + Math.random() * 100} ${150 + Math.random() * 50} L ${220 + Math.random() * 60} ${180 + Math.random() * 40} L 250 220`}
                stroke={stageColors[currentStage]}
                strokeWidth="2"
                fill="none"
                animate={{
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  repeatDelay: 2
                }}
              />
            ))}
          </motion.g>
        )}

        {/* Cyber Enhancement for Final Stage */}
        {currentStage === 5 && (
          <motion.g className="cyber-enhancements">
            {/* Circuit Patterns */}
            {[...Array(12)].map((_, i) => (
              <motion.rect
                key={i}
                x={200 + (i % 4) * 25}
                y={180 + Math.floor(i / 4) * 30}
                width="20"
                height="4"
                fill="#06b6d4"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scaleX: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </motion.g>
        )}
      </svg>
    </div>
  );
};

export default App;