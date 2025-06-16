import React from 'react';
import { motion } from 'framer-motion';

const CallToActionSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Fog/Mist Background */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
          />
        ))}
      </div>

      {/* Light Rays */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 bg-gradient-to-t from-transparent via-purple-400/20 to-transparent origin-bottom"
            style={{
              height: '50vh',
              transform: `rotate(${i * 45}deg) translateX(-50%)`,
              transformOrigin: 'bottom center'
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 400],
              y: [0, (Math.random() - 0.5) * 400]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-8xl md:text-9xl font-bold mb-8"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              background: "linear-gradient(90deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Imagine.
          </motion.h2>

          <motion.h3
            className="text-8xl md:text-9xl font-bold mb-8"
            animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            style={{
              background: "linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Animate.
          </motion.h3>

          <motion.h4
            className="text-8xl md:text-9xl font-bold mb-16"
            animate={{
              backgroundPosition: ["50% 50%", "150% 50%", "50% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: 4
            }}
            style={{
              background: "linear-gradient(90deg, #EC4899, #3B82F6, #8B5CF6, #EC4899)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Inspire.
          </motion.h4>
        </motion.div>

        {/* Final Message */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          The future of web experiences is here. Where creativity meets technology, 
          and imagination becomes reality through the power of animation.
        </motion.p>
      </div>

      {/* Fade to Black Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 0.7] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default CallToActionSection;