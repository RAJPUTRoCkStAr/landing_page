import React from 'react';
import { motion } from 'framer-motion';

interface PremiumTigerSVGProps {
  scrollProgress: number;
  currentStage: number;
}

const PremiumTigerSVG: React.FC<PremiumTigerSVGProps> = ({ 
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

export default PremiumTigerSVG;