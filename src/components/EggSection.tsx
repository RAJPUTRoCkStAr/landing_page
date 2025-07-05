import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EggSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.2, 0.8]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mystical Energy Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-orange-500/20 rounded-full"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* The Egg */}
      <motion.div
        className="relative z-10"
        style={{ scale, rotateY, opacity }}
      >
        <motion.div
          className="relative w-64 h-80 mx-auto"
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Egg Shell */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-orange-200 via-orange-300 to-orange-400 rounded-full shadow-2xl"
            style={{
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%"
            }}
            animate={{
              boxShadow: [
                "0 0 50px rgba(249, 115, 22, 0.3)",
                "0 0 100px rgba(249, 115, 22, 0.6)",
                "0 0 50px rgba(249, 115, 22, 0.3)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />

          {/* Egg Cracks */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-16 bg-gradient-to-b from-orange-800 to-transparent"
                style={{
                  left: '50%',
                  top: '30%',
                  transformOrigin: 'bottom',
                  transform: `rotate(${i * 45}deg) translateX(-50%)`
                }}
                animate={{
                  scaleY: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              />
            ))}
          </motion.div>

          {/* Inner Glow */}
          <motion.div
            className="absolute inset-4 bg-gradient-radial from-yellow-400/50 via-orange-500/30 to-transparent rounded-full blur-xl"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />

          {/* Life Force Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                animate={{
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
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
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
          THE ORIGIN
        </h2>
        <p className="text-xl text-orange-300 max-w-2xl mx-auto">
          In the depths of digital wilderness, life stirs within the quantum shell. 
          The first spark of consciousness awaits its moment of emergence.
        </p>
      </motion.div>

      {/* Energy Streams */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-t from-transparent via-orange-400/50 to-transparent"
            animate={{
              y: [window.innerHeight, -200],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
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

export default EggSection;