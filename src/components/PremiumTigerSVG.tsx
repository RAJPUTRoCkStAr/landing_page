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
    '#3b82f6', '#f97316', '#eab308', '#dc2626', '#7f1d1d', '#8b5cf6', '#06b6d4'
  ];

  return (
    <div className="tiger-svg-container">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        className="tiger-svg"
      >
        <defs>
          {/* Enhanced Gradients */}
          <radialGradient id={`stageGradient${currentStage}`} cx="0.3" cy="0.3">
            <stop offset="0%" stopColor={stageColors[currentStage]} stopOpacity="1" />
            <stop offset="40%" stopColor={stageColors[currentStage]} stopOpacity="0.8" />
            <stop offset="70%" stopColor={stageColors[currentStage]} stopOpacity="0.5" />
            <stop offset="100%" stopColor={stageColors[currentStage]} stopOpacity="0.2" />
          </radialGradient>

          <linearGradient id={`bodyGradient${currentStage}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={stageColors[currentStage]} stopOpacity="0.9" />
            <stop offset="50%" stopColor={stageColors[currentStage]} stopOpacity="0.7" />
            <stop offset="100%" stopColor={stageColors[currentStage]} stopOpacity="0.5" />
          </linearGradient>

          {/* Enhanced Glow Effects */}
          <filter id="ultraGlow">
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

          <filter id="megaGlow">
            <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Enhanced Tiger Form */}
        <motion.g 
          className="tiger-form"
          filter="url(#ultraGlow)"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Enhanced Main Body */}
          <motion.ellipse
            cx="300"
            cy="360"
            rx={90 + currentStage * 18}
            ry={60 + currentStage * 12}
            fill={`url(#bodyGradient${currentStage})`}
            stroke={stageColors[currentStage]}
            strokeWidth="4"
            filter="url(#innerGlow)"
            animate={{
              rx: [90 + currentStage * 18, 100 + currentStage * 18, 90 + currentStage * 18],
              ry: [60 + currentStage * 12, 70 + currentStage * 12, 60 + currentStage * 12],
              strokeWidth: [4, 6, 4]
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
            cy="240"
            r={70 + currentStage * 10}
            fill={`url(#stageGradient${currentStage})`}
            stroke={stageColors[currentStage]}
            strokeWidth="4"
            filter="url(#innerGlow)"
            animate={{
              r: [70 + currentStage * 10, 80 + currentStage * 10, 70 + currentStage * 10],
              cy: [240, 235, 240],
              strokeWidth: [4, 7, 4]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Enhanced Eyes with Glow */}
          <motion.circle
            cx="275"
            cy="220"
            r="16"
            fill="#ffffff"
            filter="url(#megaGlow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
          />
          <motion.circle
            cx="325"
            cy="220"
            r="16"
            fill="#ffffff"
            filter="url(#megaGlow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.7
            }}
          />

          {/* Enhanced Pupils with Animation */}
          <motion.ellipse
            cx="275"
            cy="220"
            rx="6"
            ry="12"
            fill={stageColors[currentStage]}
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
            cx="325"
            cy="220"
            rx="6"
            ry="12"
            fill={stageColors[currentStage]}
            animate={{
              ry: [12, 18, 12],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.4
            }}
          />

          {/* Enhanced Dynamic Stripes */}
          {[...Array(8)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${200 + i * 6} ${180 + i * 25} Q 300 ${175 + i * 22} ${400 - i * 6} ${180 + i * 25}`}
              stroke={stageColors[currentStage]}
              strokeWidth="5"
              fill="none"
              filter="url(#innerGlow)"
              animate={{
                opacity: [0.3, 1, 0.3],
                strokeWidth: [5, 8, 5],
                pathLength: [0.8, 1, 0.8]
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
            cy="300"
            r="180"
            fill="none"
            stroke={stageColors[currentStage]}
            strokeWidth="3"
            strokeOpacity="0.4"
            strokeDasharray="15,8"
            filter="url(#ultraGlow)"
            animate={{
              r: [180, 220, 180],
              strokeOpacity: [0.1, 0.5, 0.1],
              rotate: 360,
              strokeWidth: [3, 5, 3]
            }}
            transition={{
              r: { duration: 5, repeat: Infinity },
              strokeOpacity: { duration: 4, repeat: Infinity },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              strokeWidth: { duration: 3, repeat: Infinity }
            }}
          />

          {/* Secondary Aura */}
          <motion.circle
            cx="300"
            cy="300"
            r="140"
            fill="none"
            stroke={stageColors[currentStage]}
            strokeWidth="2"
            strokeOpacity="0.3"
            strokeDasharray="8,12"
            animate={{
              r: [140, 160, 140],
              strokeOpacity: [0.2, 0.6, 0.2],
              rotate: -360
            }}
            transition={{
              r: { duration: 6, repeat: Infinity },
              strokeOpacity: { duration: 3.5, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
        </motion.g>

        {/* Enhanced Stage-specific Effects */}
        {currentStage >= 2 && (
          <motion.g className="energy-effects">
            {/* Enhanced Lightning Effects */}
            {[...Array(12)].map((_, i) => (
              <motion.path
                key={i}
                d={`M 300 120 L ${250 + Math.random() * 100} ${170 + Math.random() * 60} L ${270 + Math.random() * 60} ${200 + Math.random() * 50} L 300 260`}
                stroke={stageColors[currentStage]}
                strokeWidth="3"
                fill="none"
                filter="url(#ultraGlow)"
                animate={{
                  opacity: [0, 1, 0],
                  pathLength: [0, 1, 0],
                  strokeWidth: [3, 6, 3]
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

        {/* Enhanced Cyber Enhancement for Advanced Stages */}
        {currentStage >= 4 && (
          <motion.g className="cyber-enhancements">
            {/* Enhanced Circuit Patterns */}
            {[...Array(16)].map((_, i) => (
              <motion.rect
                key={i}
                x={220 + (i % 5) * 32}
                y={200 + Math.floor(i / 5) * 35}
                width="25"
                height="6"
                fill={stageColors[currentStage]}
                filter="url(#innerGlow)"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scaleX: [0.3, 1, 0.3],
                  height: [6, 10, 6]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.15
                }}
              />
            ))}

            {/* Hexagonal Tech Patterns */}
            {[...Array(6)].map((_, i) => (
              <motion.polygon
                key={i}
                points="300,180 320,190 320,210 300,220 280,210 280,190"
                fill="none"
                stroke={stageColors[currentStage]}
                strokeWidth="2"
                transform={`translate(${(i % 3) * 40 - 40}, ${Math.floor(i / 3) * 50}) scale(${0.8 + i * 0.1})`}
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  rotate: [0, 360],
                  scale: [0.8 + i * 0.1, 1.2 + i * 0.1, 0.8 + i * 0.1]
                }}
                transition={{
                  opacity: { duration: 2, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              />
            ))}
          </motion.g>
        )}

        {/* Ultimate Transcendence Effects for Final Stage */}
        {currentStage === 6 && (
          <motion.g className="transcendence-effects">
            {/* Quantum Field */}
            <motion.circle
              cx="300"
              cy="300"
              r="250"
              fill="none"
              stroke={stageColors[currentStage]}
              strokeWidth="1"
              strokeOpacity="0.6"
              strokeDasharray="3,6"
              filter="url(#megaGlow)"
              animate={{
                r: [250, 300, 250],
                strokeOpacity: [0.3, 0.8, 0.3],
                rotate: 360
              }}
              transition={{
                r: { duration: 8, repeat: Infinity },
                strokeOpacity: { duration: 4, repeat: Infinity },
                rotate: { duration: 30, repeat: Infinity, ease: "linear" }
              }}
            />

            {/* Dimensional Portals */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                cx={300 + Math.cos(i * Math.PI / 4) * 200}
                cy={300 + Math.sin(i * Math.PI / 4) * 200}
                r="15"
                fill={stageColors[currentStage]}
                opacity="0.7"
                filter="url(#megaGlow)"
                animate={{
                  r: [15, 25, 15],
                  opacity: [0.4, 0.9, 0.4],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4
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