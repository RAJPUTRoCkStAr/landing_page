import React from 'react';
import { motion } from 'framer-motion';

const PremiumLoadingExperience: React.FC = () => {
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
            rotateY: { duration: 6, repeat: 999999, ease: "linear" },
            rotateX: { duration: 4, repeat: 999999, ease: "easeInOut" }
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
                duration: 3.5,
                repeat: 999999,
                delay: i * 0.1,
                ease: [0.4, 0.0, 0.2, 1]
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
                duration: 4.5,
                repeat: 999999,
                delay: Math.random() * 4,
                ease: [0.25, 0.46, 0.45, 0.94]
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
            duration: 5,
            repeat: 999999,
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
              duration: 2.5,
              repeat: 999999,
              ease: [0.4, 0.0, 0.6, 1]
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
            duration: 3, 
            repeat: 999999,
            ease: [0.4, 0.0, 0.6, 1]
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
              transition={{ duration: 1.2, repeat: 999999, ease: "easeInOut" }}
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
              transition={{ duration: 1.4, repeat: 999999, ease: "easeInOut" }}
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
              transition={{ duration: 1, repeat: 999999, ease: "easeInOut" }}
            >
              READY
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PremiumLoadingExperience;