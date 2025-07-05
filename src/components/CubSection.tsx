import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CubSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.7]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Playful Energy Field */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"
            animate={{
              x: [0, (Math.random() - 0.5) * 400],
              y: [0, (Math.random() - 0.5) * 400],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* The Cub */}
      <motion.div
        className="relative z-10"
        style={{ scale, rotateX }}
      >
        <motion.div
          className="relative w-48 h-48 mx-auto"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Cub Body */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-full shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 30px rgba(251, 146, 60, 0.4)",
                "0 0 60px rgba(251, 146, 60, 0.7)",
                "0 0 30px rgba(251, 146, 60, 0.4)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />

          {/* Stripes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-2 bg-orange-800/40 rounded-full"
              style={{
                top: `${20 + i * 12}%`,
                transform: `rotate(${-10 + i * 4}deg)`
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}

          {/* Eyes */}
          <motion.div
            className="absolute top-8 left-12 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute top-8 right-12 w-4 h-4 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.1
            }}
          />

          {/* Ears */}
          <motion.div
            className="absolute -top-4 left-8 w-8 h-8 bg-orange-400 rounded-full"
            animate={{
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute -top-4 right-8 w-8 h-8 bg-orange-400 rounded-full"
            animate={{
              rotate: [0, -10, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />

          {/* Playful Sparkles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                animate={{
                  x: [0, (Math.random() - 0.5) * 80],
                  y: [0, (Math.random() - 0.5) * 80],
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          FIRST STEPS
        </h2>
        <p className="text-xl text-orange-300 max-w-2xl mx-auto">
          Curiosity awakens. Small paws explore the digital realm, 
          each movement building strength for the journey ahead.
        </p>
      </motion.div>

      {/* Paw Prints Trail */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-orange-400/30 rounded-full"
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.3,
              repeatDelay: 2
            }}
            style={{
              left: `${20 + i * 8}%`,
              bottom: `${30 + Math.sin(i) * 10}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CubSection;