import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Mystical Fog */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-gradient-radial from-purple-900/20 via-purple-600/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
              scale: [1, 1.5, 0.8, 1],
              opacity: [0.3, 0.7, 0.3, 0.3]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Lightning Effects */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
              x: [0, Math.random() * 200 - 100]
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 5,
              delay: Math.random() * 3
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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
            style={{
              background: "linear-gradient(45deg, #f97316, #ea580c, #dc2626, #f97316)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            EVOLUTION
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{
              textShadow: "0 0 30px rgba(249, 115, 22, 0.5)"
            }}
          >
            OF THE APEX
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-orange-300 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            Witness the transformation from humble beginnings to cybernetic supremacy. 
            A journey through evolution, power, and digital transcendence.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              className="px-12 py-6 text-xl font-bold border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-black transition-all duration-500 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 50px rgba(249, 115, 22, 0.5)",
                textShadow: "0 0 20px #000000"
              }}
              animate={{
                boxShadow: [
                  "0 0 0px rgba(249, 115, 22, 0)",
                  "0 0 30px rgba(249, 115, 22, 0.3)",
                  "0 0 0px rgba(249, 115, 22, 0)"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
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

      {/* Ambient Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            animate={{
              y: [window.innerHeight, -100],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 2, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut"
            }}
            style={{
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;