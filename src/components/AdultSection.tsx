import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AdultSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.3, 0.7]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Apex Predator Aura */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border border-red-500/20 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.1, 0.5, 0.1],
              rotate: 360
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-192px',
              marginTop: '-192px',
              transform: `scale(${1 + i * 0.1})`
            }}
          />
        ))}
      </div>

      {/* Lightning Strikes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-full bg-gradient-to-b from-transparent via-red-400/70 to-transparent"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 200]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 2 + Math.random() * 3,
              delay: Math.random() * 2
            }}
            style={{
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* The Adult Tiger */}
      <motion.div
        className="relative z-10"
        style={{ scale, rotateY }}
      >
        <motion.div
          className="relative w-80 h-48 mx-auto"
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tiger Body - Larger and More Imposing */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 shadow-2xl"
            style={{
              borderRadius: "70% 30% 30% 70% / 60% 60% 40% 40%"
            }}
            animate={{
              boxShadow: [
                "0 0 60px rgba(220, 38, 38, 0.6)",
                "0 0 120px rgba(220, 38, 38, 0.9)",
                "0 0 60px rgba(220, 38, 38, 0.6)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />

          {/* Powerful Stripes */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-4 bg-gradient-to-r from-transparent via-black/70 to-transparent rounded-full"
              style={{
                top: `${10 + i * 8}%`,
                transform: `rotate(${-20 + i * 4}deg)`
              }}
              animate={{
                opacity: [0.5, 0.9, 0.5],
                scaleX: [0.9, 1.3, 0.9]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}

          {/* Fierce Eyes */}
          <motion.div
            className="absolute top-6 left-20 w-8 h-8 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              boxShadow: [
                "0 0 15px rgba(252, 211, 77, 0.6)",
                "0 0 30px rgba(252, 211, 77, 0.9)",
                "0 0 15px rgba(252, 211, 77, 0.6)"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute top-6 right-20 w-8 h-8 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              boxShadow: [
                "0 0 15px rgba(252, 211, 77, 0.6)",
                "0 0 30px rgba(252, 211, 77, 0.9)",
                "0 0 15px rgba(252, 211, 77, 0.6)"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 0.1
            }}
          />

          {/* Prominent Ears */}
          <motion.div
            className="absolute -top-8 left-16 w-16 h-16 bg-red-600 rounded-full"
            animate={{
              rotate: [0, 20, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute -top-8 right-16 w-16 h-16 bg-red-600 rounded-full"
            animate={{
              rotate: [0, -20, 20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />

          {/* Powerful Tail */}
          <motion.div
            className="absolute -right-12 top-1/2 w-24 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full"
            animate={{
              rotate: [0, 30, -30, 0],
              scaleX: [1, 1.3, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />

          {/* Apex Power Aura */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-red-600/30 via-red-500/15 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          />

          {/* Power Emanations */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-400 rounded-full"
                animate={{
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200],
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0]
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          APEX PREDATOR
        </h2>
        <p className="text-xl text-red-300 max-w-2xl mx-auto">
          At the pinnacle of natural evolution. Raw power, perfect instincts, 
          and unmatched dominance over the digital wilderness.
        </p>
      </motion.div>

      {/* Dominance Field */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-red-500/40 rounded-full"
            animate={{
              scale: [0, 3, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AdultSection;