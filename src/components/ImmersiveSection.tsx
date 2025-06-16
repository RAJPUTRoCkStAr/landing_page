import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImmersiveSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full flex items-center justify-center"
          style={{ rotateX, rotateY, scale }}
        >
          <div className="relative">
            {/* Central 3D Object */}
            <div className="w-64 h-64 relative transform-gpu">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-2xl transform rotate-45 animate-spin-slow shadow-2xl shadow-purple-500/20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-600/40 to-pink-600/40 rounded-2xl transform -rotate-45 animate-spin-reverse shadow-2xl shadow-blue-500/20"></div>
              <div className="absolute inset-8 bg-gradient-to-r from-pink-600/40 to-purple-600/40 rounded-2xl transform rotate-12 animate-pulse-glow shadow-2xl shadow-pink-500/20"></div>
            </div>

            {/* Orbiting Elements */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                animate={{ 
                  rotate: 360,
                  x: [0, 150 * Math.cos(i * Math.PI / 4), 0],
                  y: [0, 150 * Math.sin(i * Math.PI / 4), 0]
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: '-12px',
                  marginTop: '-12px'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Text Overlay */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          Experience the Art
        </h2>
        <p className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
          in Motion
        </p>
      </motion.div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transform -rotate-45 animate-pulse-slow"></div>
      </div>
    </section>
  );
};

export default ImmersiveSection;