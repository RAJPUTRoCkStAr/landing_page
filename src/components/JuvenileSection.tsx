import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const JuvenileSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1.1, 0.6]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hunting Ground Atmosphere */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-32 bg-gradient-to-t from-transparent via-orange-500/30 to-transparent"
            animate={{
              x: [0, window.innerWidth],
              opacity: [0, 0.7, 0],
              scaleY: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
            style={{
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* The Juvenile Tiger */}
      <motion.div
        className="relative z-10"
        style={{ scale, rotateZ }}
      >
        <motion.div
          className="relative w-64 h-40 mx-auto"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Tiger Body */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-full shadow-2xl"
            style={{
              borderRadius: "60% 40% 40% 60% / 50% 50% 50% 50%"
            }}
            animate={{
              boxShadow: [
                "0 0 40px rgba(234, 88, 12, 0.5)",
                "0 0 80px rgba(234, 88, 12, 0.8)",
                "0 0 40px rgba(234, 88, 12, 0.5)"
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity
            }}
          />

          {/* Tiger Stripes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-3 bg-gradient-to-r from-transparent via-red-800/60 to-transparent rounded-full"
              style={{
                top: `${15 + i * 10}%`,
                transform: `rotate(${-15 + i * 4}deg)`
              }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scaleX: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}

          {/* Eyes - More Intense */}
          <motion.div
            className="absolute top-4 left-16 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 10px rgba(251, 191, 36, 0.5)",
                "0 0 20px rgba(251, 191, 36, 0.8)",
                "0 0 10px rgba(251, 191, 36, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute top-4 right-16 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 10px rgba(251, 191, 36, 0.5)",
                "0 0 20px rgba(251, 191, 36, 0.8)",
                "0 0 10px rgba(251, 191, 36, 0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.1
            }}
          />

          {/* Ears - More Prominent */}
          <motion.div
            className="absolute -top-6 left-12 w-12 h-12 bg-orange-500 rounded-full"
            animate={{
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute -top-6 right-12 w-12 h-12 bg-orange-500 rounded-full"
            animate={{
              rotate: [0, -15, 15, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />

          {/* Tail */}
          <motion.div
            className="absolute -right-8 top-1/2 w-16 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            animate={{
              rotate: [0, 20, -20, 0],
              scaleX: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />

          {/* Power Aura */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-red-500/20 via-orange-500/10 to-transparent rounded-full blur-xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          THE HUNTER
        </h2>
        <p className="text-xl text-orange-300 max-w-2xl mx-auto">
          Instincts sharpen. The young predator learns the art of the hunt, 
          developing skills that will define its destiny.
        </p>
      </motion.div>

      {/* Hunting Energy Trails */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-transparent via-red-500/40 to-transparent"
            animate={{
              x: [0, window.innerWidth],
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default JuvenileSection;