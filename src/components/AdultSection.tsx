import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AdultSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/30 via-black to-red-800/20" />

      {/* The Adult Tiger */}
      <motion.div
        className="relative z-10"
        style={{ scale, opacity }}
      >
        <motion.div
          className="relative w-80 h-48 mx-auto"
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tiger Body - Full Size and Powerful */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 shadow-2xl"
            style={{
              borderRadius: "70% 30% 30% 70% / 60% 60% 40% 40%",
              boxShadow: "0 0 80px rgba(220, 38, 38, 0.8)"
            }}
          />

          {/* Tiger Stripes - Bold and Defined */}
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-4 bg-gradient-to-r from-transparent via-black/80 to-transparent rounded-full"
              style={{
                top: `${12 + i * 8}%`,
                transform: `rotate(${-15 + i * 3}deg)`
              }}
            />
          ))}

          {/* Eyes - Fierce and Glowing */}
          <div 
            className="absolute top-6 left-18 w-7 h-7 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full"
            style={{ boxShadow: "0 0 20px rgba(252, 211, 77, 0.9)" }}
          />
          <div 
            className="absolute top-6 right-18 w-7 h-7 bg-gradient-to-r from-yellow-300 to-red-400 rounded-full"
            style={{ boxShadow: "0 0 20px rgba(252, 211, 77, 0.9)" }}
          />

          {/* Pupils */}
          <div className="absolute top-8 left-20 w-2 h-4 bg-black rounded-full" />
          <div className="absolute top-8 right-20 w-2 h-4 bg-black rounded-full" />

          {/* Ears - Large and Alert */}
          <motion.div
            className="absolute -top-8 left-16 w-14 h-14 bg-red-600 rounded-full"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-8 right-16 w-14 h-14 bg-red-600 rounded-full"
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Nose and Mouth */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-black rounded-full" />
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black/60 rounded-full" />

          {/* Whiskers */}
          <div className="absolute top-12 left-12 w-8 h-px bg-black" />
          <div className="absolute top-14 left-12 w-8 h-px bg-black" />
          <div className="absolute top-12 right-12 w-8 h-px bg-black" />
          <div className="absolute top-14 right-12 w-8 h-px bg-black" />

          {/* Tail - Powerful */}
          <motion.div
            className="absolute -right-12 top-1/2 w-24 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full"
            animate={{ 
              rotate: [0, 25, -25, 0],
              scaleX: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Paws */}
          <div className="absolute -bottom-4 left-8 w-8 h-6 bg-red-700 rounded-full" />
          <div className="absolute -bottom-4 left-20 w-8 h-6 bg-red-700 rounded-full" />
          <div className="absolute -bottom-4 right-20 w-8 h-6 bg-red-700 rounded-full" />
          <div className="absolute -bottom-4 right-8 w-8 h-6 bg-red-700 rounded-full" />
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: "0 0 20px rgba(220, 38, 38, 0.8)" }}>
          APEX PREDATOR
        </h2>
        <p className="text-xl text-red-200 max-w-2xl mx-auto" style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.8)" }}>
          At the pinnacle of natural evolution. Raw power, perfect instincts, 
          and unmatched dominance over the digital wilderness.
        </p>
      </motion.div>
    </section>
  );
};

export default AdultSection;