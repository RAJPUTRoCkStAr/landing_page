import React from 'react';
import { motion } from 'framer-motion';

const LoadingExperience: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* DNA Helix Loading Animation */}
      <div className="relative">
        <motion.div
          className="w-32 h-32 relative"
          animate={{ rotateY: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0'
              }}
              animate={{
                rotateZ: i * 30,
                x: [0, 60 * Math.cos(i * Math.PI / 6)],
                y: [0, 60 * Math.sin(i * Math.PI / 6)],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Quantum Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [0, (Math.random() - 0.5) * 800],
                y: [0, (Math.random() - 0.5) * 800],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
              style={{
                left: '50%',
                top: '50%'
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading Text */}
      <motion.div
        className="absolute bottom-32 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          Initializing Reality
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing dimensional gateway...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingExperience;