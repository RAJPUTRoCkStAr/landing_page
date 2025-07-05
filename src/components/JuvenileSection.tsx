import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const JuvenileSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-black to-orange-900/20" />

      {/* The Juvenile Tiger */}
      <motion.div
        className="relative z-10"
        style={{ scale, opacity }}
      >
        <motion.div
          className="relative w-56 h-36 mx-auto"
          animate={{
            y: [0, -12, 0],
            x: [0, 8, -8, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tiger Body - More Elongated */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 shadow-xl"
            style={{
              borderRadius: "60% 40% 40% 60% / 50% 50% 50% 50%",
              boxShadow: "0 0 50px rgba(234, 88, 12, 0.7)"
            }}
          />

          {/* Tiger Stripes - More Defined */}
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-3 bg-gradient-to-r from-transparent via-red-800/70 to-transparent rounded-full"
              style={{
                top: `${15 + i * 10}%`,
                transform: `rotate(${-12 + i * 3}deg)`
              }}
            />
          ))}

          {/* Eyes - Larger and More Intense */}
          <div 
            className="absolute top-4 left-14 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            style={{ boxShadow: "0 0 10px rgba(251, 191, 36, 0.8)" }}
          />
          <div 
            className="absolute top-4 right-14 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            style={{ boxShadow: "0 0 10px rgba(251, 191, 36, 0.8)" }}
          />

          {/* Ears - More Prominent */}
          <motion.div
            className="absolute -top-5 left-10 w-10 h-10 bg-orange-500 rounded-full"
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute -top-5 right-10 w-10 h-10 bg-orange-500 rounded-full"
            animate={{ rotate: [0, -12, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Tail - Longer */}
          <motion.div
            className="absolute -right-8 top-1/2 w-16 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            animate={{ 
              rotate: [0, 20, -20, 0],
              scaleX: [1, 1.1, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Nose */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-black rounded-full" />
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: "0 0 20px rgba(234, 88, 12, 0.8)" }}>
          THE HUNTER
        </h2>
        <p className="text-xl text-orange-200 max-w-2xl mx-auto" style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.8)" }}>
          Instincts sharpen. The young predator learns the art of the hunt, 
          developing skills that will define its destiny.
        </p>
      </motion.div>
    </section>
  );
};

export default JuvenileSection;