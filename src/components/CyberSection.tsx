import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Eye, Cpu, Wifi } from 'lucide-react';

const CyberSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.4, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/30 via-black to-purple-900/20" />

      {/* Simplified Grid */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div key={i}>
            <div 
              className="absolute w-full h-px bg-cyan-400"
              style={{ top: `${i * 10}%` }}
            />
            <div 
              className="absolute h-full w-px bg-cyan-400"
              style={{ left: `${i * 10}%` }}
            />
          </div>
        ))}
      </div>

      {/* The Cyber Tiger */}
      <motion.div
        className="relative z-10"
        style={{ scale, opacity }}
      >
        <motion.div
          className="relative w-96 h-56 mx-auto"
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Cyber Tiger Body */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl"
            style={{
              borderRadius: "80% 20% 20% 80% / 70% 70% 30% 30%",
              boxShadow: "0 0 100px rgba(6, 182, 212, 0.8)"
            }}
          />

          {/* Digital Stripes */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-3 bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent"
              style={{
                top: `${10 + i * 7}%`,
                transform: `rotate(${-20 + i * 3}deg)`
              }}
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}

          {/* Cyber Eyes */}
          <div
            className="absolute top-8 left-24 w-10 h-10 bg-gradient-to-r from-cyan-300 to-white rounded-full flex items-center justify-center"
            style={{ boxShadow: "0 0 30px rgba(6, 182, 212, 1)" }}
          >
            <Eye className="w-6 h-6 text-blue-900" />
          </div>
          <div
            className="absolute top-8 right-24 w-10 h-10 bg-gradient-to-r from-cyan-300 to-white rounded-full flex items-center justify-center"
            style={{ boxShadow: "0 0 30px rgba(6, 182, 212, 1)" }}
          >
            <Eye className="w-6 h-6 text-blue-900" />
          </div>

          {/* Cyber Ears */}
          <motion.div
            className="absolute -top-10 left-20 w-18 h-18 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Wifi className="w-8 h-8 text-cyan-200" />
          </motion.div>
          <motion.div
            className="absolute -top-10 right-20 w-18 h-18 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Cpu className="w-8 h-8 text-cyan-200" />
          </motion.div>

          {/* Cyber Nose */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-cyan-300 rounded-full" style={{ boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)" }} />

          {/* Digital Whiskers */}
          <div className="absolute top-14 left-16 w-12 h-px bg-cyan-400" style={{ boxShadow: "0 0 5px rgba(6, 182, 212, 0.8)" }} />
          <div className="absolute top-16 left-16 w-12 h-px bg-cyan-400" style={{ boxShadow: "0 0 5px rgba(6, 182, 212, 0.8)" }} />
          <div className="absolute top-14 right-16 w-12 h-px bg-cyan-400" style={{ boxShadow: "0 0 5px rgba(6, 182, 212, 0.8)" }} />
          <div className="absolute top-16 right-16 w-12 h-px bg-cyan-400" style={{ boxShadow: "0 0 5px rgba(6, 182, 212, 0.8)" }} />

          {/* Cyber Tail */}
          <motion.div
            className="absolute -right-16 top-1/2 w-32 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
            animate={{ 
              rotate: [0, 30, -30, 0],
              scaleX: [1, 1.3, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Zap className="w-6 h-6 text-cyan-200" />
          </motion.div>

          {/* Cyber Paws */}
          <div className="absolute -bottom-6 left-12 w-10 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.6)" }} />
          <div className="absolute -bottom-6 left-28 w-10 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.6)" }} />
          <div className="absolute -bottom-6 right-28 w-10 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.6)" }} />
          <div className="absolute -bottom-6 right-12 w-10 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full" style={{ boxShadow: "0 0 15px rgba(6, 182, 212, 0.6)" }} />
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ textShadow: "0 0 20px rgba(6, 182, 212, 0.8)" }}>
          CYBER EVOLUTION
        </h2>
        <p className="text-xl text-cyan-200 max-w-2xl mx-auto mb-8" style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.8)" }}>
          Transcending biological limits. Enhanced with quantum processors, 
          neural networks, and digital consciousness. The ultimate fusion of nature and technology.
        </p>
        
        <motion.button
          className="px-16 py-8 text-2xl font-bold border-2 border-cyan-400 text-cyan-400 bg-black/50 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ENTER THE FUTURE
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CyberSection;