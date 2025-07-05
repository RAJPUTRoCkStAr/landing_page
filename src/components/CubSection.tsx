import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CubSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-black to-yellow-900/20" />

      {/* The Tiger Cub */}
      <motion.div
        className="relative z-10"
        style={{ scale, opacity }}
      >
        <motion.div
          className="relative w-40 h-32 mx-auto"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tiger Body */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 rounded-full shadow-xl"
            style={{
              boxShadow: "0 0 40px rgba(251, 146, 60, 0.6)"
            }}
          />

          {/* Tiger Stripes */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-2 bg-orange-800/60 rounded-full"
              style={{
                top: `${25 + i * 12}%`,
                transform: `rotate(${-8 + i * 3}deg)`
              }}
            />
          ))}

          {/* Eyes */}
          <div className="absolute top-6 left-10 w-3 h-3 bg-yellow-400 rounded-full" />
          <div className="absolute top-6 right-10 w-3 h-3 bg-yellow-400 rounded-full" />

          {/* Ears */}
          <motion.div
            className="absolute -top-3 left-6 w-6 h-6 bg-orange-400 rounded-full"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-3 right-6 w-6 h-6 bg-orange-400 rounded-full"
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Tail */}
          <motion.div
            className="absolute -right-6 top-1/2 w-12 h-3 bg-orange-400 rounded-full"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: "0 0 20px rgba(251, 146, 60, 0.8)" }}>
          FIRST STEPS
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto" style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.8)" }}>
          Curiosity awakens. Small paws explore the digital realm, 
          each movement building strength for the journey ahead.
        </p>
      </motion.div>
    </section>
  );
};

export default CubSection;