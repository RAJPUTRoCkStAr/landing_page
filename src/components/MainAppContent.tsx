import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, Eye, Crown, Cpu, Sparkles, Target, Atom, Layers, Infinity } from 'lucide-react';
import PremiumTigerSVG from './PremiumTigerSVG';

const MainAppContent: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Ultra-smooth spring animations with enhanced physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.0001
  });

  // Enhanced parallax transforms with more dramatic effects
  const tigerScale = useTransform(smoothProgress, 
    [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1], 
    [0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.6]
  );
  
  const tigerRotate = useTransform(smoothProgress, [0, 1], [0, 1080]);
  const tigerY = useTransform(smoothProgress, [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], [80, -20, 40, -60, 50, -80, 60, -100]);
  const tigerOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0.2, 1, 1, 0.9]);

  // Multi-dimensional background layers with enhanced gradients
  const backgroundLayer1 = useTransform(
    smoothProgress,
    [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
    [
      'radial-gradient(ellipse 120% 80% at 30% 70%, #0f172a 0%, #1e293b 20%, #334155 40%, #475569 60%, #64748b 80%, #94a3b8 100%)',
      'conic-gradient(from 45deg at 70% 30%, #7c2d12 0%, #ea580c 15%, #fb923c 30%, #fdba74 45%, #fed7aa 60%, #fef3c7 75%, #fffbeb 90%, #7c2d12 100%)',
      'radial-gradient(ellipse 150% 100% at 40% 20%, #dc2626 0%, #f59e0b 20%, #fbbf24 40%, #fde047 60%, #fef08a 80%, #fefce8 100%)',
      'conic-gradient(from 180deg at 20% 80%, #991b1b 0%, #dc2626 20%, #ef4444 40%, #f87171 60%, #fca5a5 80%, #fecaca 100%)',
      'radial-gradient(ellipse 200% 120% at 80% 60%, #7f1d1d 0%, #450a0a 25%, #1c1917 50%, #292524 75%, #44403c 100%)',
      'conic-gradient(from 270deg at 60% 40%, #0c4a6e 0%, #0369a1 15%, #0284c7 30%, #0ea5e9 45%, #38bdf8 60%, #7dd3fc 75%, #bae6fd 90%, #0c4a6e 100%)',
      'radial-gradient(ellipse 180% 140% at 50% 30%, #065f46 0%, #047857 20%, #059669 40%, #10b981 60%, #34d399 80%, #6ee7b7 100%)',
      'conic-gradient(from 360deg at 50% 50%, #581c87 0%, #7c3aed 20%, #8b5cf6 40%, #a78bfa 60%, #c4b5fd 80%, #e9d5ff 100%)'
    ]
  );

  const backgroundLayer2 = useTransform(smoothProgress, [0, 1], [
    'conic-gradient(from 0deg at 30% 70%, rgba(139, 69, 19, 0.15) 0deg, rgba(255, 140, 0, 0.25) 90deg, rgba(220, 38, 38, 0.15) 180deg, rgba(139, 69, 19, 0.15) 270deg, rgba(139, 69, 19, 0.15) 360deg)',
    'conic-gradient(from 270deg at 70% 30%, rgba(6, 182, 212, 0.25) 0deg, rgba(16, 185, 129, 0.35) 90deg, rgba(139, 92, 246, 0.25) 180deg, rgba(6, 182, 212, 0.25) 270deg, rgba(6, 182, 212, 0.25) 360deg)'
  ]);

  const backgroundLayer3 = useTransform(smoothProgress, [0, 1], [
    'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)',
    'linear-gradient(225deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)'
  ]);

  // Enhanced mouse tracking with momentum
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const newStage = Math.min(Math.floor(latest * 7), 6);
      setCurrentStage(newStage);
    });
    return unsubscribe;
  }, [smoothProgress]);

  const stages = [
    {
      title: "QUANTUM GENESIS",
      subtitle: "The First Spark",
      description: "In the infinite void of digital space, consciousness begins to coalesce. Quantum particles dance in perfect harmony, forming the blueprint of ultimate evolution. Reality bends as the first spark of digital life ignites.",
      icon: Sparkles,
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.12)",
      progress: 0
    },
    {
      title: "NEURAL AWAKENING",
      subtitle: "First Consciousness",
      description: "Synapses fire across dimensional barriers. The first breath of digital life pierces through reality, creating ripples in the fabric of existence. Neural networks begin their eternal dance of evolution.",
      icon: Eye,
      color: "#f97316",
      bgColor: "rgba(249, 115, 22, 0.12)",
      progress: 0.14
    },
    {
      title: "ENERGY SURGE",
      subtitle: "Power Amplification",
      description: "Raw cosmic energy courses through digital veins. Each pulse brings exponential growth, building the foundation for unprecedented dominance. The transformation accelerates beyond comprehension.",
      icon: Zap,
      color: "#eab308",
      bgColor: "rgba(234, 179, 8, 0.12)",
      progress: 0.28
    },
    {
      title: "APEX PREDATOR",
      subtitle: "Hunter's Instinct",
      description: "The transformation reaches critical mass. Ancient predatory instincts merge with quantum precision, creating the perfect digital hunter. Every movement calculated, every decision flawless.",
      icon: Target,
      color: "#dc2626",
      bgColor: "rgba(220, 38, 38, 0.12)",
      progress: 0.42
    },
    {
      title: "SOVEREIGN DOMINION",
      subtitle: "Absolute Power",
      description: "At the pinnacle of natural evolution. Every movement calculated, every decision flawless. The undisputed ruler of all digital realms, commanding reality itself with mere thought.",
      icon: Crown,
      color: "#7f1d1d",
      bgColor: "rgba(127, 29, 29, 0.12)",
      progress: 0.56
    },
    {
      title: "DIMENSIONAL BREACH",
      subtitle: "Reality Transcendence",
      description: "Breaking through the barriers between dimensions. Space and time bend to will as consciousness expands beyond physical limitations. The multiverse becomes a playground.",
      icon: Layers,
      color: "#8b5cf6",
      bgColor: "rgba(139, 92, 246, 0.12)",
      progress: 0.7
    },
    {
      title: "INFINITE TRANSCENDENCE",
      subtitle: "Beyond Existence",
      description: "Evolution complete. Biological constraints shattered. Enhanced with infinite quantum consciousness and unlimited digital potential. The ultimate form achieved - eternal, omnipotent, transcendent.",
      icon: Infinity,
      color: "#06b6d4",
      bgColor: "rgba(6, 182, 212, 0.12)",
      progress: 0.84
    }
  ];

  return (
    <div ref={containerRef} className="app">
      {/* Enhanced Multi-layer Dynamic Background */}
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

      {/* Enhanced Interactive Mouse Follower */}
      <motion.div
        className="mouse-follower"
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />

      {/* Secondary Mouse Trail */}
      <motion.div
        className="mouse-trail"
        animate={{
          x: mousePosition.x - 15,
          y: mousePosition.y - 15,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
      />

      {/* Enhanced Particle System */}
      <div className="particle-system">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className={`particle particle-${i % 4}`}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -window.innerHeight * 4],
              x: [
                (Math.random() - 0.5) * 150,
                (Math.random() - 0.5) * 400,
                (Math.random() - 0.5) * 250
              ],
              rotate: [0, 360, 720, 1080],
              scale: [0, 1.2, 0.8, 0],
              opacity: [0, 0.9, 0.6, 0]
            }}
            transition={{
              duration: 30 + Math.random() * 25,
              repeat: 999999,
              delay: Math.random() * 25,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Geometric Elements */}
      <div className="geometric-elements">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`geometric-shape shape-${i % 6}`}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              rotate: [0, 360, -180, 360],
              scale: [0.3, 1.5, 0.7, 1.2],
              opacity: [0.05, 0.4, 0.15, 0.3],
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200],
              y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 200]
            }}
            transition={{
              duration: 25 + Math.random() * 20,
              repeat: 999999,
              delay: Math.random() * 15,
              ease: [0.4, 0.0, 0.2, 1]
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
          <PremiumTigerSVG 
            scrollProgress={smoothProgress.get()} 
            currentStage={currentStage}
          />
        </motion.div>
        
        {/* Enhanced Dynamic Energy Rings */}
        <motion.div
          className="energy-ring ring-1"
          animate={{
            rotate: 360,
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            rotate: { duration: 35, repeat: 999999, ease: "linear" },
            scale: { duration: 10, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
            opacity: { duration: 6, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }
          }}
        />
        <motion.div
          className="energy-ring ring-2"
          animate={{
            rotate: -360,
            scale: [1.3, 0.7, 1.3],
            opacity: [0.15, 0.7, 0.15]
          }}
          transition={{
            rotate: { duration: 28, repeat: 999999, ease: "linear" },
            scale: { duration: 8, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
            opacity: { duration: 5, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }
          }}
        />
        <motion.div
          className="energy-ring ring-3"
          animate={{
            rotate: 360,
            scale: [0.6, 1.8, 0.6],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            rotate: { duration: 42, repeat: 999999, ease: "linear" },
            scale: { duration: 12, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
            opacity: { duration: 7, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }
          }}
        />
        <motion.div
          className="energy-ring ring-4"
          animate={{
            rotate: -360,
            scale: [1.1, 0.9, 1.6, 1.1],
            opacity: [0.05, 0.3, 0.05]
          }}
          transition={{
            rotate: { duration: 48, repeat: 999999, ease: "linear" },
            scale: { duration: 15, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
            opacity: { duration: 8, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }
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
                  scale: currentStage === index ? [1, 1.4, 1] : 1,
                  rotate: currentStage === index ? [0, 360, 720] : 0,
                  y: currentStage === index ? [0, -15, 0] : 0
                }}
                transition={{
                  duration: 5,
                  repeat: currentStage === index ? 999999 : 0,
                  ease: [0.4, 0.0, 0.6, 1]
                }}
              >
                <div 
                  className="stage-icon"
                  style={{ 
                    color: stage.color,
                    filter: currentStage === index ? `drop-shadow(0 0 30px ${stage.color}) drop-shadow(0 0 60px ${stage.color})` : 'none'
                  }}
                >
                  <stage.icon size={90} />
                </div>
              </motion.div>

              <motion.h1 
                className="stage-title"
                animate={{
                  textShadow: currentStage === index ? [
                    `0 0 40px ${stage.color}`,
                    `0 0 80px ${stage.color}`,
                    `0 0 120px ${stage.color}`,
                    `0 0 80px ${stage.color}`,
                    `0 0 40px ${stage.color}`
                  ] : `0 0 25px rgba(255,255,255,0.6)`,
                  scale: currentStage === index ? [1, 1.03, 1] : 1
                }}
                transition={{ 
                  textShadow: { duration: 6, ease: [0.4, 0.0, 0.6, 1] },
                  scale: { duration: 4, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }
                }}
              >
                {stage.title}
              </motion.h1>
              
              <motion.h2 
                className="stage-subtitle"
                style={{ color: stage.color }}
                animate={{
                  opacity: currentStage === index ? [0.7, 1, 0.7] : 0.7,
                  scale: currentStage === index ? [1, 1.02, 1] : 1
                }}
                transition={{ 
                  duration: 5, 
                  repeat: 999999,
                  ease: [0.4, 0.0, 0.6, 1]
                }}
              >
                {stage.subtitle}
              </motion.h2>
              
              <motion.p 
                className="stage-description"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                {stage.description}
              </motion.p>
              
              {index === stages.length - 1 && (
                <motion.button
                  className="cta-button"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 100px rgba(6, 182, 212, 0.9)",
                    y: -8
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(6, 182, 212, 0.5)",
                      "0 0 80px rgba(6, 182, 212, 0.8)",
                      "0 0 40px rgba(6, 182, 212, 0.5)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 5, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
                    hover: { duration: 0.3 }
                  }}
                >
                  <Atom className="inline mr-4" size={28} />
                  TRANSCEND REALITY
                  <motion.div
                    className="button-glow"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    transition={{ duration: 4, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }}
                  />
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
                backgroundColor: stage.color,
                borderColor: stage.color
              }}
              animate={{
                scale: currentStage === index ? [1, 2.2, 1] : currentStage > index ? 1.4 : 1,
                boxShadow: currentStage === index ? 
                  `0 0 40px ${stage.color}` : 
                  currentStage > index ? `0 0 20px ${stage.color}` : `0 0 8px ${stage.color}`,
                rotate: currentStage === index ? [0, 360, 720] : 0
              }}
              transition={{ 
                scale: { duration: 4, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
                boxShadow: { duration: 3, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
                rotate: { duration: 6, repeat: 999999, ease: "linear" }
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
            className="scroll-hint"
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ 
              y: { duration: 4, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
              scale: { duration: 4, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] },
              exit: { duration: 0.6 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              transition={{ duration: 5, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }}
            >
              <ChevronDown size={42} />
            </motion.div>
            <span>Scroll to Begin Evolution</span>
            <motion.div
              className="scroll-hint-glow"
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.2, 0.9, 0.2]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              transition={{ duration: 4, repeat: 999999, ease: [0.4, 0.0, 0.6, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainAppContent;