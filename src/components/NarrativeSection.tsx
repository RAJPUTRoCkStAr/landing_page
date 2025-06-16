import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NarrativeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden"
    >
      {/* Parallax Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tl from-pink-900/10 via-transparent to-purple-900/10"
        style={{ y: y2 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          className="text-center mb-24"
          style={{ opacity }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Every Pixel
          </motion.h2>
          
          <motion.h3
            className="text-7xl md:text-9xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Tells a Story
          </motion.h3>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            In the realm of digital artistry, where imagination meets technology, every element serves a purpose. 
            Each animation breathes life into static concepts, transforming mere ideas into immersive experiences 
            that captivate the soul and inspire the mind to dream beyond the ordinary.
          </motion.p>
        </motion.div>

        {/* Floating Story Elements */}
        <div className="relative h-96">
          {[
            { text: "Imagination", delay: 0, x: -200, y: -50 },
            { text: "Innovation", delay: 0.5, x: 200, y: 50 },
            { text: "Inspiration", delay: 1, x: 0, y: -100 },
            { text: "Creation", delay: 1.5, x: -150, y: 100 },
            { text: "Evolution", delay: 2, x: 150, y: -20 }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              whileInView={{ 
                opacity: [0, 1, 1, 0.7], 
                scale: [0, 1.2, 1, 1], 
                x: item.x, 
                y: item.y 
              }}
              transition={{ 
                duration: 3, 
                delay: item.delay,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {item.text}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Motion Blur Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute w-96 h-2 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent blur-sm"
          animate={{ x: [-400, window.innerWidth + 400] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ top: '30%' }}
        />
        <motion.div 
          className="absolute w-96 h-2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-sm"
          animate={{ x: [window.innerWidth + 400, -400] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ top: '70%' }}
        />
      </div>
    </section>
  );
};

export default NarrativeSection;