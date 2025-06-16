import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TranscendenceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Transcendence Aura */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-white/5"
            animate={{
              scale: [1, 3, 1],
              opacity: [0, 0.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
            style={{
              transform: `scale(${1 + i * 0.2})`
            }}
          />
        ))}
      </div>

      {/* Energy Streams */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
            animate={{
              x: [0, window.innerWidth],
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Particle Ascension */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              y: [window.innerHeight, -100],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 2, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              bottom: 0
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-8"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-black mb-8"
            style={{
              background: "linear-gradient(90deg, #ffffff, #00ffff, #8b5cf6, #ec4899, #ffffff)",
              backgroundSize: "500% 500%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            TRANSCEND
          </motion.h2>

          <motion.h3
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{
              background: "linear-gradient(90deg, #ec4899, #8b5cf6, #00ffff, #ec4899)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            REALITY
          </motion.h3>

          <motion.h4
            className="text-4xl md:text-6xl font-bold mb-16"
            style={{
              background: "linear-gradient(90deg, #00ffff, #ec4899, #8b5cf6, #00ffff)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{
              backgroundPosition: ["50% 50%", "150% 50%", "50% 50%"]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ASCEND
          </motion.h4>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            viewport={{ once: true }}
          >
            You have witnessed the impossible. You have seen beyond the veil of ordinary experience. 
            This is where consciousness meets code, where dreams become digital reality, 
            and where the future of human expression is born.
          </motion.p>

          {/* Final Call to Action */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-12 py-6 text-2xl font-bold border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-500"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 50px #00ffff",
                textShadow: "0 0 20px #000000"
              }}
              animate={{
                boxShadow: [
                  "0 0 0px #00ffff",
                  "0 0 30px #00ffff",
                  "0 0 0px #00ffff"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              ENTER THE FUTURE
            </motion.button>

            <motion.p
              className="text-lg text-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The journey has only just begun...
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Final Fade Effect */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ 
          opacity: [0, 0, 0, 0, 0.3, 0.7, 1] 
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default TranscendenceSection;