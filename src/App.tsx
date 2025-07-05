import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './styles/tiger-evolution.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Transform the tiger based on scroll progress
  const tigerScale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0.4, 0.6, 0.8, 1.0, 1.2, 1.4]);
  
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
      subtitle: "Digital Genesis",
      description: "In the quantum realm, the first spark of digital consciousness begins to form within the protective shell of possibility.",
      progress: 0
    },
    {
      title: "FIRST BREATH",
      subtitle: "Life Emerges",
      description: "Breaking free from digital constraints, the young predator takes its first steps into the vast expanse of virtual reality.",
      progress: 0.2
    },
    {
      title: "GROWING STRONG",
      subtitle: "Building Power",
      description: "Each moment brings new strength. Digital muscles develop, cyber instincts sharpen, the hunter within awakens.",
      progress: 0.4
    },
    {
      title: "THE HUNT BEGINS",
      subtitle: "Predator Awakens",
      description: "No longer prey, but predator. The tiger masters the ancient art of the hunt in the digital wilderness.",
      progress: 0.6
    },
    {
      title: "APEX ACHIEVED",
      subtitle: "King of the Digital Wild",
      description: "At the pinnacle of natural evolution. Raw power, perfect instincts, and unmatched dominance over all digital realms.",
      progress: 0.8
    },
    {
      title: "CYBER EVOLUTION",
      subtitle: "Beyond Nature",
      description: "Transcending biological limits. Enhanced with quantum processors, neural networks, and infinite digital consciousness.",
      progress: 1
    }
  ];

  const currentStage = Math.min(Math.floor(scrollYProgress.get() * stages.length), stages.length - 1);

  if (!isLoaded) {
    return (
      <div className="loading-screen">
        <div className="loading-animation">
          <motion.div
            className="loading-orb"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <motion.h2
          className="loading-text"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          Initializing Evolution...
        </motion.h2>
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
            scale: tigerScale
          }}
        >
          <TigerSVG scrollProgress={scrollYProgress.get()} />
        </motion.div>
      </div>

      {/* Scrollable Content */}
      <div className="content-container">
        {stages.map((stage, index) => (
          <motion.section
            key={index}
            className="stage-section"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
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

// Realistic Tiger SVG Component
const TigerSVG: React.FC<{ scrollProgress: number }> = ({ scrollProgress }) => {
  const stage = Math.min(Math.floor(scrollProgress * 6), 5);
  
  return (
    <div className="tiger-svg-container">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="tiger-svg"
      >
        {/* Stage 0: Egg */}
        {stage === 0 && (
          <g className="tiger-stage">
            <motion.ellipse
              cx="150"
              cy="150"
              rx="60"
              ry="80"
              fill="url(#eggGradient)"
              stroke="#d97706"
              strokeWidth="2"
              animate={{
                ry: [80, 85, 80],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M 130 120 Q 150 110 170 120 M 140 140 Q 150 130 160 140 M 135 160 Q 150 150 165 160"
              stroke="#92400e"
              strokeWidth="2"
              fill="none"
              animate={{
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
            <defs>
              <radialGradient id="eggGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </radialGradient>
            </defs>
          </g>
        )}

        {/* Stage 1: Newborn Cub */}
        {stage === 1 && (
          <g className="tiger-stage">
            {/* Body */}
            <motion.ellipse
              cx="150"
              cy="180"
              rx="40"
              ry="25"
              fill="url(#cubGradient)"
              animate={{
                cy: [180, 175, 180],
                rx: [40, 42, 40]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Head */}
            <motion.circle
              cx="150"
              cy="140"
              r="30"
              fill="url(#cubGradient)"
              animate={{
                cy: [140, 138, 140],
                r: [30, 32, 30]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Ears */}
            <circle cx="135" cy="125" r="8" fill="#f97316" />
            <circle cx="165" cy="125" r="8" fill="#f97316" />
            {/* Eyes */}
            <circle cx="142" cy="135" r="4" fill="#fbbf24" />
            <circle cx="158" cy="135" r="4" fill="#fbbf24" />
            <circle cx="142" cy="135" r="2" fill="#000" />
            <circle cx="158" cy="135" r="2" fill="#000" />
            {/* Nose */}
            <ellipse cx="150" cy="145" rx="2" ry="1" fill="#000" />
            {/* Stripes */}
            <path d="M 130 135 Q 150 130 170 135" stroke="#dc2626" strokeWidth="2" fill="none" />
            <path d="M 135 150 Q 150 145 165 150" stroke="#dc2626" strokeWidth="2" fill="none" />
            {/* Tail */}
            <motion.ellipse
              cx="185"
              cy="175"
              rx="15"
              ry="4"
              fill="#f97316"
              animate={{
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <defs>
              <radialGradient id="cubGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f97316" />
              </radialGradient>
            </defs>
          </g>
        )}

        {/* Stage 2: Young Tiger */}
        {stage === 2 && (
          <g className="tiger-stage">
            {/* Body */}
            <motion.ellipse
              cx="150"
              cy="180"
              rx="55"
              ry="30"
              fill="url(#youngGradient)"
              animate={{
                cy: [180, 178, 180],
                rx: [55, 57, 55]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Head */}
            <motion.ellipse
              cx="150"
              cy="135"
              rx="35"
              ry="32"
              fill="url(#youngGradient)"
              animate={{
                cy: [135, 133, 135]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Ears */}
            <ellipse cx="130" cy="115" rx="10" ry="12" fill="#dc2626" />
            <ellipse cx="170" cy="115" rx="10" ry="12" fill="#dc2626" />
            {/* Eyes */}
            <circle cx="140" cy="130" r="5" fill="#fbbf24" />
            <circle cx="160" cy="130" r="5" fill="#fbbf24" />
            <ellipse cx="140" cy="130" rx="1" ry="3" fill="#000" />
            <ellipse cx="160" cy="130" rx="1" ry="3" fill="#000" />
            {/* Nose */}
            <ellipse cx="150" cy="142" rx="3" ry="2" fill="#000" />
            {/* Mouth */}
            <path d="M 150 145 Q 145 148 140 146 M 150 145 Q 155 148 160 146" stroke="#000" strokeWidth="1" fill="none" />
            {/* Stripes */}
            <path d="M 125 125 Q 150 120 175 125" stroke="#7f1d1d" strokeWidth="3" fill="none" />
            <path d="M 130 140 Q 150 135 170 140" stroke="#7f1d1d" strokeWidth="3" fill="none" />
            <path d="M 125 160 Q 150 155 175 160" stroke="#7f1d1d" strokeWidth="3" fill="none" />
            <path d="M 130 180 Q 150 175 170 180" stroke="#7f1d1d" strokeWidth="3" fill="none" />
            {/* Legs */}
            <ellipse cx="130" cy="200" rx="8" ry="15" fill="#dc2626" />
            <ellipse cx="170" cy="200" rx="8" ry="15" fill="#dc2626" />
            {/* Tail */}
            <motion.path
              d="M 200 170 Q 220 160 230 175 Q 225 185 210 180"
              fill="#dc2626"
              animate={{
                d: [
                  "M 200 170 Q 220 160 230 175 Q 225 185 210 180",
                  "M 200 170 Q 225 150 235 165 Q 230 175 215 170",
                  "M 200 170 Q 220 160 230 175 Q 225 185 210 180"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <defs>
              <radialGradient id="youngGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#dc2626" />
              </radialGradient>
            </defs>
          </g>
        )}

        {/* Stage 3: Hunter */}
        {stage === 3 && (
          <g className="tiger-stage">
            {/* Body */}
            <motion.ellipse
              cx="150"
              cy="180"
              rx="70"
              ry="35"
              fill="url(#hunterGradient)"
              animate={{
                cy: [180, 177, 180],
                rx: [70, 72, 70]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Head */}
            <motion.ellipse
              cx="150"
              cy="130"
              rx="40"
              ry="35"
              fill="url(#hunterGradient)"
              animate={{
                cy: [130, 128, 130]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Ears */}
            <ellipse cx="125" cy="108" rx="12" ry="15" fill="#991b1b" />
            <ellipse cx="175" cy="108" rx="12" ry="15" fill="#991b1b" />
            {/* Eyes */}
            <ellipse cx="138" cy="125" rx="6" ry="7" fill="#fbbf24" />
            <ellipse cx="162" cy="125" rx="6" ry="7" fill="#fbbf24" />
            <ellipse cx="138" cy="125" rx="2" ry="5" fill="#000" />
            <ellipse cx="162" cy="125" rx="2" ry="5" fill="#000" />
            {/* Nose */}
            <ellipse cx="150" cy="140" rx="4" ry="3" fill="#000" />
            {/* Mouth */}
            <path d="M 150 144 Q 142 148 135 145 M 150 144 Q 158 148 165 145" stroke="#000" strokeWidth="2" fill="none" />
            {/* Whiskers */}
            <line x1="115" y1="135" x2="135" y2="133" stroke="#000" strokeWidth="1" />
            <line x1="115" y1="140" x2="135" y2="138" stroke="#000" strokeWidth="1" />
            <line x1="165" y1="133" x2="185" y2="135" stroke="#000" strokeWidth="1" />
            <line x1="165" y1="138" x2="185" y2="140" stroke="#000" strokeWidth="1" />
            {/* Stripes */}
            <path d="M 120 115 Q 150 110 180 115" stroke="#450a0a" strokeWidth="4" fill="none" />
            <path d="M 115 130 Q 150 125 185 130" stroke="#450a0a" strokeWidth="4" fill="none" />
            <path d="M 120 145 Q 150 140 180 145" stroke="#450a0a" strokeWidth="4" fill="none" />
            <path d="M 115 165 Q 150 160 185 165" stroke="#450a0a" strokeWidth="4" fill="none" />
            <path d="M 120 185 Q 150 180 180 185" stroke="#450a0a" strokeWidth="4" fill="none" />
            {/* Legs */}
            <ellipse cx="125" cy="205" rx="10" ry="18" fill="#991b1b" />
            <ellipse cx="175" cy="205" rx="10" ry="18" fill="#991b1b" />
            <ellipse cx="140" cy="210" rx="10" ry="15" fill="#991b1b" />
            <ellipse cx="160" cy="210" rx="10" ry="15" fill="#991b1b" />
            {/* Paws */}
            <ellipse cx="125" cy="220" rx="12" ry="8" fill="#7f1d1d" />
            <ellipse cx="175" cy="220" rx="12" ry="8" fill="#7f1d1d" />
            <ellipse cx="140" cy="222" rx="12" ry="8" fill="#7f1d1d" />
            <ellipse cx="160" cy="222" rx="12" ry="8" fill="#7f1d1d" />
            {/* Tail */}
            <motion.path
              d="M 215 170 Q 240 150 250 170 Q 245 190 225 185 Q 220 180 215 175"
              fill="#991b1b"
              animate={{
                d: [
                  "M 215 170 Q 240 150 250 170 Q 245 190 225 185 Q 220 180 215 175",
                  "M 215 170 Q 245 140 255 160 Q 250 180 230 175 Q 225 170 215 175",
                  "M 215 170 Q 240 150 250 170 Q 245 190 225 185 Q 220 180 215 175"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity
              }}
            />
            <defs>
              <radialGradient id="hunterGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#991b1b" />
              </radialGradient>
            </defs>
          </g>
        )}

        {/* Stage 4: Adult Tiger */}
        {stage === 4 && (
          <g className="tiger-stage">
            {/* Body */}
            <motion.ellipse
              cx="150"
              cy="185"
              rx="85"
              ry="40"
              fill="url(#adultGradient)"
              animate={{
                cy: [185, 182, 185],
                rx: [85, 87, 85]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Head */}
            <motion.ellipse
              cx="150"
              cy="125"
              rx="45"
              ry="40"
              fill="url(#adultGradient)"
              animate={{
                cy: [125, 123, 125]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Ears */}
            <ellipse cx="120" cy="100" rx="15" ry="18" fill="#7f1d1d" />
            <ellipse cx="180" cy="100" rx="15" ry="18" fill="#7f1d1d" />
            <ellipse cx="120" cy="105" rx="8" ry="10" fill="#450a0a" />
            <ellipse cx="180" cy="105" rx="8" ry="10" fill="#450a0a" />
            {/* Eyes */}
            <ellipse cx="135" cy="120" rx="8" ry="9" fill="#fbbf24" />
            <ellipse cx="165" cy="120" rx="8" ry="9" fill="#fbbf24" />
            <ellipse cx="135" cy="120" rx="3" ry="7" fill="#000" />
            <ellipse cx="165" cy="120" rx="3" ry="7" fill="#000" />
            {/* Nose */}
            <ellipse cx="150" cy="138" rx="5" ry="4" fill="#000" />
            {/* Mouth */}
            <path d="M 150 143 Q 140 148 128 145 M 150 143 Q 160 148 172 145" stroke="#000" strokeWidth="2" fill="none" />
            {/* Whiskers */}
            <line x1="105" y1="130" x2="130" y2="128" stroke="#000" strokeWidth="2" />
            <line x1="105" y1="135" x2="130" y2="133" stroke="#000" strokeWidth="2" />
            <line x1="105" y1="140" x2="130" y2="138" stroke="#000" strokeWidth="2" />
            <line x1="170" y1="128" x2="195" y2="130" stroke="#000" strokeWidth="2" />
            <line x1="170" y1="133" x2="195" y2="135" stroke="#000" strokeWidth="2" />
            <line x1="170" y1="138" x2="195" y2="140" stroke="#000" strokeWidth="2" />
            {/* Stripes */}
            <path d="M 110 105 Q 150 100 190 105" stroke="#450a0a" strokeWidth="5" fill="none" />
            <path d="M 105 120 Q 150 115 195 120" stroke="#450a0a" strokeWidth="5" fill="none" />
            <path d="M 110 135 Q 150 130 190 135" stroke="#450a0a" strokeWidth="5" fill="none" />
            <path d="M 105 155 Q 150 150 195 155" stroke="#450a0a" strokeWidth="5" fill="none" />
            <path d="M 110 175 Q 150 170 190 175" stroke="#450a0a" strokeWidth="5" fill="none" />
            <path d="M 105 195 Q 150 190 195 195" stroke="#450a0a" strokeWidth="5" fill="none" />
            {/* Legs */}
            <ellipse cx="115" cy="215" rx="12" ry="22" fill="#7f1d1d" />
            <ellipse cx="185" cy="215" rx="12" ry="22" fill="#7f1d1d" />
            <ellipse cx="135" cy="220" rx="12" ry="18" fill="#7f1d1d" />
            <ellipse cx="165" cy="220" rx="12" ry="18" fill="#7f1d1d" />
            {/* Paws */}
            <ellipse cx="115" cy="235" rx="15" ry="10" fill="#450a0a" />
            <ellipse cx="185" cy="235" rx="15" ry="10" fill="#450a0a" />
            <ellipse cx="135" cy="235" rx="15" ry="10" fill="#450a0a" />
            <ellipse cx="165" cy="235" rx="15" ry="10" fill="#450a0a" />
            {/* Tail */}
            <motion.path
              d="M 230 175 Q 260 145 275 170 Q 270 195 245 190 Q 235 185 230 180"
              fill="#7f1d1d"
              animate={{
                d: [
                  "M 230 175 Q 260 145 275 170 Q 270 195 245 190 Q 235 185 230 180",
                  "M 230 175 Q 265 130 280 155 Q 275 180 250 175 Q 240 170 230 180",
                  "M 230 175 Q 260 145 275 170 Q 270 195 245 190 Q 235 185 230 180"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            <defs>
              <radialGradient id="adultGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </radialGradient>
            </defs>
          </g>
        )}

        {/* Stage 5: Cyber Tiger */}
        {stage === 5 && (
          <g className="tiger-stage">
            {/* Body */}
            <motion.ellipse
              cx="150"
              cy="185"
              rx="90"
              ry="42"
              fill="url(#cyberGradient)"
              stroke="url(#cyberStroke)"
              strokeWidth="2"
              animate={{
                cy: [185, 182, 185],
                rx: [90, 92, 90]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Head */}
            <motion.ellipse
              cx="150"
              cy="125"
              rx="48"
              ry="42"
              fill="url(#cyberGradient)"
              stroke="url(#cyberStroke)"
              strokeWidth="2"
              animate={{
                cy: [125, 123, 125]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Cyber Ears */}
            <ellipse cx="118" cy="98" rx="16" ry="20" fill="#0891b2" stroke="#67e8f9" strokeWidth="1" />
            <ellipse cx="182" cy="98" rx="16" ry="20" fill="#0891b2" stroke="#67e8f9" strokeWidth="1" />
            <circle cx="118" cy="98" r="6" fill="#67e8f9" />
            <circle cx="182" cy="98" r="6" fill="#67e8f9" />
            {/* Cyber Eyes */}
            <ellipse cx="133" cy="118" rx="10" ry="11" fill="#ffffff" stroke="#67e8f9" strokeWidth="2" />
            <ellipse cx="167" cy="118" rx="10" ry="11" fill="#ffffff" stroke="#67e8f9" strokeWidth="2" />
            <motion.circle
              cx="133"
              cy="118"
              r="4"
              fill="#06b6d4"
              animate={{
                r: [4, 6, 4],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <motion.circle
              cx="167"
              cy="118"
              r="4"
              fill="#06b6d4"
              animate={{
                r: [4, 6, 4],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5
              }}
            />
            {/* Cyber Nose */}
            <ellipse cx="150" cy="138" rx="6" ry="5" fill="#67e8f9" stroke="#ffffff" strokeWidth="1" />
            {/* Cyber Mouth */}
            <path d="M 150 143 Q 138 148 125 145 M 150 143 Q 162 148 175 145" stroke="#67e8f9" strokeWidth="3" fill="none" />
            {/* Digital Whiskers */}
            <motion.line
              x1="100"
              y1="128"
              x2="128"
              y2="126"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            />
            <motion.line
              x1="100"
              y1="133"
              x2="128"
              y2="131"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.2
              }}
            />
            <motion.line
              x1="100"
              y1="138"
              x2="128"
              y2="136"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.4
              }}
            />
            <motion.line
              x1="172"
              y1="126"
              x2="200"
              y2="128"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.1
              }}
            />
            <motion.line
              x1="172"
              y1="131"
              x2="200"
              y2="133"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.3
              }}
            />
            <motion.line
              x1="172"
              y1="136"
              x2="200"
              y2="138"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: 0.5
              }}
            />
            {/* Digital Stripes */}
            <motion.path
              d="M 105 103 Q 150 98 195 103"
              stroke="#67e8f9"
              strokeWidth="4"
              fill="none"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
            <motion.path
              d="M 100 118 Q 150 113 200 118"
              stroke="#67e8f9"
              strokeWidth="4"
              fill="none"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.2
              }}
            />
            <motion.path
              d="M 105 133 Q 150 128 195 133"
              stroke="#67e8f9"
              strokeWidth="4"
              fill="none"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.4
              }}
            />
            <motion.path
              d="M 100 153 Q 150 148 200 153"
              stroke="#67e8f9"
              strokeWidth="4"
              fill="none"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.6
              }}
            />
            <motion.path
              d="M 105 173 Q 150 168 195 173"
              stroke="#67e8f9"
              strokeWidth="4"
              fill="none"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.8
              }}
            />
            <motion.path
              d="M 100 193 Q 150 188 200 193"
              stroke="#67e8f9"
              strokeWidth="4"
              fill="none"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 1.0
              }}
            />
            {/* Cyber Legs */}
            <ellipse cx="112" cy="215" rx="14" ry="24" fill="#0891b2" stroke="#67e8f9" strokeWidth="2" />
            <ellipse cx="188" cy="215" rx="14" ry="24" fill="#0891b2" stroke="#67e8f9" strokeWidth="2" />
            <ellipse cx="135" cy="220" rx="14" ry="20" fill="#0891b2" stroke="#67e8f9" strokeWidth="2" />
            <ellipse cx="165" cy="220" rx="14" ry="20" fill="#0891b2" stroke="#67e8f9" strokeWidth="2" />
            {/* Cyber Paws */}
            <ellipse cx="112" cy="237" rx="18" ry="12" fill="#0c4a6e" stroke="#67e8f9" strokeWidth="2" />
            <ellipse cx="188" cy="237" rx="18" ry="12" fill="#0c4a6e" stroke="#67e8f9" strokeWidth="2" />
            <ellipse cx="135" cy="237" rx="18" ry="12" fill="#0c4a6e" stroke="#67e8f9" strokeWidth="2" />
            <ellipse cx="165" cy="237" rx="18" ry="12" fill="#0c4a6e" stroke="#67e8f9" strokeWidth="2" />
            {/* Cyber Tail */}
            <motion.path
              d="M 235 175 Q 270 140 285 165 Q 280 190 255 185 Q 245 180 235 180"
              fill="#0891b2"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                d: [
                  "M 235 175 Q 270 140 285 165 Q 280 190 255 185 Q 245 180 235 180",
                  "M 235 175 Q 275 125 290 150 Q 285 175 260 170 Q 250 165 235 180",
                  "M 235 175 Q 270 140 285 165 Q 280 190 255 185 Q 245 180 235 180"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            />
            {/* Energy Core */}
            <motion.circle
              cx="150"
              cy="185"
              r="15"
              fill="none"
              stroke="#67e8f9"
              strokeWidth="2"
              animate={{
                r: [15, 20, 15],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            <motion.circle
              cx="150"
              cy="185"
              r="8"
              fill="#67e8f9"
              animate={{
                r: [8, 12, 8],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
            <defs>
              <radialGradient id="cyberGradient" cx="0.3" cy="0.3">
                <stop offset="0%" stopColor="#0891b2" />
                <stop offset="100%" stopColor="#0c4a6e" />
              </radialGradient>
              <linearGradient id="cyberStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </g>
        )}
      </svg>
    </div>
  );
};

export default App;