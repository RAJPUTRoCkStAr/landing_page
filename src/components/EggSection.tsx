import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EggSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-orange-900/20" />

      {/* The Egg */}
      <motion.div
        className="relative z-10"
        style={{ scale, opacity }}
      >
        <motion.div
          className="relative w-48 h-64 mx-auto"
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Egg Shell */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400 shadow-2xl"
            style={{
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              boxShadow: "0 0 50px rgba(249, 115, 22, 0.5)"
            }}
          />

          {/* Inner Glow */}
          <motion.div
            className="absolute inset-4 bg-gradient-radial from-yellow-400/50 via-orange-500/30 to-transparent rounded-full blur-lg"
            animate={{
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />

          {/* Crack Lines */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 4
            }}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-12 bg-orange-800"
                style={{
                  left: '50%',
                  top: '40%',
                  transformOrigin: 'bottom',
                  transform: `rotate(${i * 60}deg) translateX(-50%)`
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: "0 0 20px rgba(249, 115, 22, 0.8)" }}>
          THE ORIGIN
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto" style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.8)" }}>
          In the depths of digital wilderness, life stirs within the quantum shell. 
          The first spark of consciousness awaits its moment of emergence.
        </p>
      </motion.div>
    </section>
  );
};

export default EggSection;