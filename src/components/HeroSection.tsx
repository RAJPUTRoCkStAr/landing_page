import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-red-900/20" />
      
      {/* Reduced Particle Count */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            animate={{
              y: [window.innerHeight, -100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none text-white"
            style={{
              textShadow: "0 0 30px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.4)"
            }}
          >
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
              EVOLUTION
            </span>
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
            }}
          >
            OF THE APEX
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-orange-200 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{
              textShadow: "0 0 10px rgba(0, 0, 0, 0.8)"
            }}
          >
            Witness the transformation from humble beginnings to cybernetic supremacy. 
            A journey through evolution, power, and digital transcendence.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              className="px-12 py-6 text-xl font-bold border-2 border-orange-500 text-orange-400 bg-black/50 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BEGIN EVOLUTION
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-orange-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;