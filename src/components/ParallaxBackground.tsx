import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  currentSection: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ currentSection }) => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 6000], [0, -1000]);
  const y2 = useTransform(scrollY, [0, 6000], [0, -800]);

  return (
    <div className="fixed inset-0 z-0">
      {/* Layer 1 - Stars */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 200 + '%'
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Floating Particles */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 200 + '%'
            }}
          />
        ))}
      </motion.div>

      {/* Dynamic Background Based on Section */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(26, 26, 26, 0.8) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(120, 45, 18, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(251, 146, 60, 0.2) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(234, 88, 12, 0.3) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.4) 0%, transparent 70%)',
            'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 70%)'
          ][currentSection] || 'radial-gradient(circle at 50% 50%, rgba(26, 26, 26, 0.8) 0%, transparent 70%)'
        }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
};

export default ParallaxBackground;