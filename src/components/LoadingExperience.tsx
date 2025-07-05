import React from 'react';
import { motion } from 'framer-motion';

const LoadingExperience: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Tiger DNA Helix */}
      <div className="relative">
        <motion.div
          className="w-40 h-40 relative"
          animate={{ rotateY: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: '0 0'
              }}
              animate={{
                rotateZ: i * 22.5,
                x: [0, 80 * Math.cos(i * Math.PI / 8)],
                y: [0, 80 * Math.sin(i * Math.PI / 8)],
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

        {/* Evolution Particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full"
              animate={{
                x: [0, (Math.random() - 0.5) * 1000],
                y: [0, (Math.random() - 0.5) * 1000],
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
          className="text-5xl font-bold mb-6"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: "linear-gradient(90deg, #f97316, #ea580c, #dc2626, #f97316)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
        >
          Initializing Evolution
        </motion.h2>
        <motion.p
          className="text-orange-400 text-xl"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Preparing digital transformation...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingExperience;