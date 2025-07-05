import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  currentSection: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ currentSection }) => {
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 6000], [0, -2000]);
  const y2 = useTransform(scrollY, [0, 6000], [0, -1500]);
  const y3 = useTransform(scrollY, [0, 6000], [0, -1000]);

  return (
    <div className="fixed inset-0 z-0">
      {/* Layer 1 - Deepest */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-orange-900/20" />
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Middle */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full blur-sm"
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3 - Closest */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-md"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
              rotate: 360
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </motion.div>

      {/* Dynamic Background Based on Section */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, #1a1a1a 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #2d1b69 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, #7c2d12 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, #ea580c 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, #dc2626 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, #00ffff 0%, transparent 50%)'
          ][currentSection] || 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, transparent 50%)'
        }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default ParallaxBackground;