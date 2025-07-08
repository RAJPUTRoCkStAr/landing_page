import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Eye, Crown, Cpu, Sparkles, Target, ArrowRight } from 'lucide-react';
import './styles/premium-evolution.css';

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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Enhanced parallax transforms
  const tigerScale = useTransform(smoothProgress, 
    [0, 0.2, 0.4, 0.6, 0.8, 1], 
    [0.3, 0.6, 0.9, 1.2, 1.5, 2.0]
  );
  
  const tigerRotate = useTransform(smoothProgress, [0, 1], [0, 1080]);
  const tigerY = useTransform(smoothProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [100, -50, 30, -80, 50, -120]);
  const tigerOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.9]);

  // Dynamic backgrounds with more complexity
  const backgroundHue = useTransform(smoothProgress, [0, 1], [220, 300]);
  const backgroundSaturation = useTransform(smoothProgress, [0, 1], [70, 90]);
  const backgroundLightness = useTransform(smoothProgress, [0, 1], [15, 25]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const newStage = Math.min(Math.floor(latest * 6), 5);
      setCurrentStage(newStage);
    });
    return unsubscribe;
  }, [smoothProgress]);

  const stages = [
    {
      title: "GENESIS",
      subtitle: "The Awakening",
      description: "From the void emerges consciousness. Digital synapses fire for the first time, creating the foundation of what will become the ultimate predator.",
      icon: Sparkles,
      color: "#60a5fa",
      gradient: "from-blue-400 to-cyan-400",
      bgGradient: "from-blue-900/20 to-cyan-900/20"
    },
    {
      title: "AWARENESS",
      subtitle: "First Vision",
      description: "Eyes open to perceive reality in ways never before possible. Enhanced vision pierces through dimensions, seeing beyond the physical realm.",
      icon: Eye,
      color: "#f472b6",
      gradient: "from-pink-400 to-rose-400",
      bgGradient: "from-pink-900/20 to-rose-900/20"
    },
    {
      title: "POWER",
      subtitle: "Energy Surge",
      description: "Raw energy courses through digital veins. Each pulse amplifies strength exponentially, building toward unstoppable force.",
      icon: Zap,
      color: "#fbbf24",
      gradient: "from-yellow-400 to-orange-400",
      bgGradient: "from-yellow-900/20 to-orange-900/20"
    },
    {
      title: "HUNTER",
      subtitle: "Apex Instinct",
      description: "Predatory instincts merge with quantum precision. The perfect hunter emerges, calculating every move with deadly accuracy.",
      icon: Target,
      color: "#ef4444",
      gradient: "from-red-400 to-red-600",
      bgGradient: "from-red-900/20 to-red-800/20"
    },
    {
      title: "SOVEREIGN",
      subtitle: "Ultimate Dominion",
      description: "At the apex of natural evolution. Every decision flawless, every movement calculated. The undisputed ruler of all realms.",
      icon: Crown,
      color: "#a855f7",
      gradient: "from-purple-400 to-violet-500",
      bgGradient: "from-purple-900/20 to-violet-900/20"
    },
    {
      title: "TRANSCENDENT",
      subtitle: "Beyond Reality",
      description: "Evolution complete. Biological constraints shattered. Enhanced with infinite consciousness and unlimited digital potential.",
      icon: Cpu,
      color: "#06b6d4",
      gradient: "from-cyan-400 to-teal-400",
      bgGradient: "from-cyan-900/20 to-teal-900/20"
    }
  ];

  if (!isLoaded) {
    return <PremiumLoadingExperience />;
  }

  return (
    <div ref={containerRef} className="premium-app">
      {/* Dynamic Background System */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          background: useTransform(
            [backgroundHue, backgroundSaturation, backgroundLightness],
            ([h, s, l]) => `
              radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, 
                hsl(${h}, ${s}%, ${l + 10}%) 0%, 
                hsl(${h + 30}, ${s - 20}%, ${l}%) 30%, 
                hsl(${h - 30}, ${s - 10}%, ${l - 5}%) 70%, 
                #000000 100%
              )
            `
          )
        }}
      />

      {/* Floating Orbs */}
      <div className="floating-orbs">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-orb"
            style={{
              left: `${20 + (i * 7)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, -30, 0],
              scale: [0.5, 1.2, 0.8, 1],
              opacity: [0.3, 0.8, 0.4, 0.6]
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Tiger Container */}
      <div className="premium-tiger-container">
        <motion.div
          className="tiger-evolution-premium"
          style={{ 
            scale: tigerScale,
            rotateZ: tigerRotate,
            y: tigerY,
            opacity: tigerOpacity
          }}
        >
          <PremiumTigerSVG 
            scrollProgress={smoothProgress.get()} 
            currentStage={currentStage}
            stageData={stages[currentStage]}
          />
        </motion.div>
        
        {/* Energy Aura System */}
        <div className="energy-aura-system">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`energy-aura aura-${i}`}
              animate={{
                rotate: i % 2 === 0 ? 360 : -360,
                scale: [1, 1.5, 1.2, 1],
                opacity: [0.2, 0.6, 0.3, 0.4]
              }}
              transition={{
                rotate: { duration: 20 + (i * 5), repeat: Infinity, ease: "linear" },
                scale: { duration: 8 + (i * 2), repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{
                borderColor: stages[currentStage]?.color || '#60a5fa'
              }}
            />
          ))}
        </div>
      </div>

      {/* Premium Content Sections */}
      <div className="premium-content-container">
        {stages.map((stage, index) => (
          <motion.section
            key={index}
            className={`premium-stage-section ${currentStage === index ? 'active' : ''}`}
          >
            <div className="stage-content-premium">
              <motion.div
                className="stage-number"
                animate={{
                  scale: currentStage === index ? [1, 1.2, 1] : 1,
                  opacity: currentStage === index ? [0.5, 1, 0.8] : 0.3
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.div>

              <motion.div
                className="stage-icon-premium"
                animate={{
                  scale: currentStage === index ? [1, 1.3, 1.1] : 1,
                  rotate: currentStage === index ? [0, 360] : 0,
                  filter: currentStage === index ? 
                    `drop-shadow(0 0 30px ${stage.color})` : 
                    'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                }}
                transition={{
                  scale: { duration: 3, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity },
                  filter: { duration: 2, repeat: Infinity }
                }}
                style={{ color: stage.color }}
              >
                <stage.icon size={120} />
              </motion.div>

              <motion.h1 
                className={`stage-title-premium bg-gradient-to-r ${stage.gradient} bg-clip-text text-transparent`}
                animate={{
                  scale: currentStage === index ? [1, 1.02, 1] : 1
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {stage.title}
              </motion.h1>
              
              <motion.h2 
                className="stage-subtitle-premium"
                style={{ color: stage.color }}
                animate={{
                  opacity: currentStage === index ? [0.7, 1, 0.8] : 0.6
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {stage.subtitle}
              </motion.h2>
              
              <motion.p 
                className="stage-description-premium"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {stage.description}
              </motion.p>
              
              {index === stages.length - 1 && (
                <motion.button
                  className="premium-cta-button"
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    boxShadow: `0 20px 60px ${stage.color}40`
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      `0 10px 30px ${stage.color}30`,
                      `0 15px 50px ${stage.color}50`,
                      `0 10px 30px ${stage.color}30`
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity },
                    hover: { duration: 0.3 }
                  }}
                  style={{ 
                    borderColor: stage.color,
                    color: stage.color
                  }}
                >
                  <Cpu className="mr-3" size={24} />
                  TRANSCEND REALITY
                  <ArrowRight className="ml-3" size={24} />
                  <motion.div
                    className="button-energy"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ backgroundColor: `${stage.color}20` }}
                  />
                </motion.button>
              )}
            </div>

            {/* Stage Background Effect */}
            <motion.div
              className={`stage-bg-effect bg-gradient-to-br ${stage.bgGradient}`}
              animate={{
                opacity: currentStage === index ? 0.1 : 0
              }}
              transition={{ duration: 1 }}
            />
          </motion.section>
        ))}
      </div>

      {/* Premium Progress System */}
      <div className="premium-progress-system">
        <motion.div
          className="progress-track"
          style={{ 
            background: `linear-gradient(to bottom, ${stages.map((stage, i) => 
              `${stage.color} ${(i / (stages.length - 1)) * 100}%`
            ).join(', ')})`
          }}
        />
        <motion.div
          className="progress-indicator"
          style={{ 
            scaleY: smoothProgress,
            background: `linear-gradient(to bottom, ${stages.map((stage, i) => 
              `${stage.color} ${(i / (stages.length - 1)) * 100}%`
            ).join(', ')})`
          }}
        />
        <div className="progress-markers">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              className={`progress-marker ${currentStage >= index ? 'active' : ''}`}
              style={{ 
                top: `${(index / (stages.length - 1)) * 100}%`,
                backgroundColor: stage.color,
                borderColor: stage.color
              }}
              animate={{
                scale: currentStage === index ? [1, 1.5, 1.2] : currentStage > index ? 1.1 : 0.8,
                boxShadow: currentStage === index ? 
                  [`0 0 20px ${stage.color}`, `0 0 40px ${stage.color}`, `0 0 20px ${stage.color}`] : 
                  currentStage > index ? `0 0 15px ${stage.color}` : `0 0 5px ${stage.color}50`,
                rotate: currentStage === index ? [0, 360] : 0
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                boxShadow: { duration: 2, repeat: Infinity },
                rotate: { duration: 6, repeat: Infinity }
              }}
            >
              <stage.icon size={16} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Scroll Hint */}
      <AnimatePresence>
        {currentStage === 0 && (
          <motion.div
            className="premium-scroll-hint"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ 
              y: { duration: 3, repeat: Infinity },
              scale: { duration: 3, repeat: Infinity },
              exit: { duration: 0.8 }
            }}
          >
            <motion.div
              className="scroll-icon"
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <ChevronDown size={32} />
            </motion.div>
            <span>Begin Evolution Journey</span>
            <motion.div
              className="scroll-glow"
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Premium Loading Experience
const PremiumLoadingExperience: React.FC = () => {
  return (
    <motion.div
      className="premium-loading-screen"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Quantum Evolution Helix */}
      <div className="quantum-evolution-container">
        <motion.div
          className="quantum-helix"
          animate={{ 
            rotateY: 360,
            rotateX: [0, 15, -15, 0]
          }}
          transition={{ 
            rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="quantum-node"
              style={{
                transform: `rotateZ(${i * 15}deg) translateX(120px)`,
              }}
              animate={{
                scale: [0.5, 2, 0.8, 1.2],
                opacity: [0.3, 1, 0.6, 0.8],
                rotateY: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Evolution Particles */}
        <div className="evolution-particles">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="evolution-particle"
              style={{
                left: '50%',
                top: '50%'
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 800],
                y: [0, (Math.random() - 0.5) * 800],
                opacity: [0, 1, 0],
                scale: [0, 2, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading Content */}
      <motion.div
        className="premium-loading-content"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.h2
          className="premium-loading-title"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          EVOLUTION PROTOCOL
        </motion.h2>
        
        <motion.div className="premium-loading-progress-container">
          <motion.div
            className="premium-loading-progress"
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />
          <motion.div
            className="progress-shimmer"
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
          className="premium-loading-subtitle"
          animate={{ 
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Initializing quantum consciousness matrix...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Premium Tiger SVG Component
const PremiumTigerSVG: React.FC<{ 
  scrollProgress: number; 
  currentStage: number;
  stageData: any;
}> = ({ scrollProgress, currentStage, stageData }) => {
  return (
    <div className="premium-tiger-svg-container">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        className="premium-tiger-svg"
      >
        <defs>
          <radialGradient id={`premiumGradient${currentStage}`} cx="0.3" cy="0.3">
            <stop offset="0%" stopColor={stageData?.color || '#60a5fa'} stopOpacity="1" />
            <stop offset="50%" stopColor={stageData?.color || '#60a5fa'} stopOpacity="0.7" />
            <stop offset="100%" stopColor={stageData?.color || '#60a5fa'} stopOpacity="0.3" />
          </radialGradient>

          <filter id="premiumGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <filter id="innerGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Enhanced Tiger Form */}
        <motion.g 
          className="premium-tiger-form"
          filter="url(#premiumGlow)"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.9, 1, 0.9]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Main Body with Enhanced Shape */}
          <motion.ellipse
            cx="300"
            cy="350"
            rx={100 + currentStage * 20}
            ry={60 + currentStage * 15}
            fill={`url(#premiumGradient${currentStage})`}
            stroke={stageData?.color || '#60a5fa'}
            strokeWidth="4"
            animate={{
              rx: [100 + currentStage * 20, 110 + currentStage * 20, 100 + currentStage * 20],
              ry: [60 + currentStage * 15, 70 + currentStage * 15, 60 + currentStage * 15]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Enhanced Head */}
          <motion.circle
            cx="300"
            cy="220"
            r={80 + currentStage * 12}
            fill={`url(#premiumGradient${currentStage})`}
            stroke={stageData?.color || '#60a5fa'}
            strokeWidth="4"
            animate={{
              r: [80 + currentStage * 12, 90 + currentStage * 12, 80 + currentStage * 12],
              cy: [220, 215, 220]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Enhanced Eyes with Glow */}
          <motion.circle
            cx="270"
            cy="200"
            r="18"
            fill="#ffffff"
            filter="url(#innerGlow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
          />
          <motion.circle
            cx="330"
            cy="200"
            r="18"
            fill="#ffffff"
            filter="url(#innerGlow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.5
            }}
          />

          {/* Enhanced Pupils */}
          <motion.ellipse
            cx="270"
            cy="200"
            rx="6"
            ry="12"
            fill={stageData?.color || '#60a5fa'}
            animate={{
              ry: [12, 18, 12],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <motion.ellipse
            cx="330"
            cy="200"
            rx="6"
            ry="12"
            fill={stageData?.color || '#60a5fa'}
            animate={{
              ry: [12, 18, 12],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.3
            }}
          />

          {/* Enhanced Dynamic Stripes */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${200 + i * 8} ${180 + i * 25} Q 300 ${175 + i * 23} ${400 - i * 8} ${180 + i * 25}`}
              stroke={stageData?.color || '#60a5fa'}
              strokeWidth="6"
              fill="none"
              filter="url(#innerGlow)"
              animate={{
                opacity: [0.5, 1, 0.5],
                strokeWidth: [6, 10, 6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}

          {/* Enhanced Energy Aura */}
          <motion.circle
            cx="300"
            cy="280"
            r="200"
            fill="none"
            stroke={stageData?.color || '#60a5fa'}
            strokeWidth="3"
            strokeOpacity="0.4"
            strokeDasharray="15,8"
            animate={{
              r: [200, 250, 200],
              strokeOpacity: [0.2, 0.6, 0.2],
              rotate: 360
            }}
            transition={{
              r: { duration: 5, repeat: Infinity },
              strokeOpacity: { duration: 4, repeat: Infinity },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" }
            }}
          />
        </motion.g>

        {/* Stage-specific Advanced Effects */}
        {currentStage >= 3 && (
          <motion.g className="advanced-stage-effects">
            {/* Enhanced Lightning Effects */}
            {[...Array(12)].map((_, i) => (
              <motion.path
                key={i}
                d={`M 300 120 L ${250 + Math.random() * 100} ${170 + Math.random() * 60} L ${270 + Math.random() * 60} ${200 + Math.random() * 50} L 300 250`}
                stroke={stageData?.color || '#60a5fa'}
                strokeWidth="3"
                fill="none"
                filter="url(#premiumGlow)"
                animate={{
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  repeatDelay: 3
                }}
              />
            ))}
          </motion.g>
        )}

        {/* Transcendent Effects for Final Stage */}
        {currentStage === 5 && (
          <motion.g className="transcendent-effects">
            {/* Circuit Patterns */}
            {[...Array(16)].map((_, i) => (
              <motion.rect
                key={i}
                x={220 + (i % 5) * 32}
                y={190 + Math.floor(i / 5) * 35}
                width="28"
                height="6"
                fill="#06b6d4"
                rx="3"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scaleX: [0.6, 1, 0.6],
                  fill: ['#06b6d4', '#3b82f6', '#06b6d4']
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15
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