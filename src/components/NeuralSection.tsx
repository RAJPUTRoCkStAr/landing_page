import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NeuralSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-indigo-900/20 to-black"
    >
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          {/* Neural Nodes */}
          {[...Array(50)].map((_, i) => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill="#00ffff"
                animate={{
                  r: [2, 6, 2],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            );
          })}
          
          {/* Neural Connections */}
          {[...Array(100)].map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * window.innerWidth}
              y1={Math.random() * window.innerHeight}
              x2={Math.random() * window.innerWidth}
              y2={Math.random() * window.innerHeight}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              opacity="0.2"
              animate={{
                strokeWidth: [0.5, 2, 0.5],
                opacity: [0.1, 0.5, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 4
              }}
            />
          ))}
          
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Synaptic Pulses */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-cyan-400 rounded-full"
            animate={{
              x: [0, window.innerWidth * 0.8],
              y: [0, (Math.random() - 0.5) * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            style={{
              left: '10%',
              top: Math.random() * 100 + '%'
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
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-7xl md:text-9xl font-black mb-8"
            style={{
              background: "linear-gradient(90deg, #00ffff, #8b5cf6, #ec4899, #00ffff)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            NEURAL
          </motion.h2>

          <motion.h3
            className="text-6xl md:text-8xl font-bold mb-12 text-white"
            animate={{
              filter: [
                "drop-shadow(0 0 10px #00ffff)",
                "drop-shadow(0 0 30px #8b5cf6)",
                "drop-shadow(0 0 10px #ec4899)",
                "drop-shadow(0 0 10px #00ffff)"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity
            }}
          >
            SYMPHONY
          </motion.h3>

          <motion.p
            className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Watch as artificial intelligence awakens, creating patterns of thought 
            that dance across the digital synapses of tomorrow's consciousness.
          </motion.p>

          {/* Interactive Neural Nodes */}
          <div className="flex justify-center space-x-8">
            {['LEARN', 'ADAPT', 'EVOLVE'].map((text, i) => (
              <motion.div
                key={text}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 font-bold"
                  animate={{
                    borderColor: ["#00ffff", "#8b5cf6", "#ec4899", "#00ffff"],
                    boxShadow: [
                      "0 0 0px #00ffff",
                      "0 0 30px #00ffff",
                      "0 0 0px #00ffff"
                    ]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {text}
                </motion.div>
                
                {/* Neural Connections */}
                {i < 2 && (
                  <motion.div
                    className="absolute top-1/2 -right-8 w-8 h-px bg-gradient-to-r from-cyan-400 to-purple-500"
                    animate={{
                      scaleX: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Brain Wave Visualization */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg className="w-full h-full">
          <motion.path
            d={`M 0 ${window.innerHeight * 0.1} Q ${window.innerWidth * 0.25} ${window.innerHeight * 0.05} ${window.innerWidth * 0.5} ${window.innerHeight * 0.1} T ${window.innerWidth} ${window.innerHeight * 0.1}`}
            stroke="#00ffff"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                `M 0 ${window.innerHeight * 0.1} Q ${window.innerWidth * 0.25} ${window.innerHeight * 0.05} ${window.innerWidth * 0.5} ${window.innerHeight * 0.1} T ${window.innerWidth} ${window.innerHeight * 0.1}`,
                `M 0 ${window.innerHeight * 0.1} Q ${window.innerWidth * 0.25} ${window.innerHeight * 0.15} ${window.innerWidth * 0.5} ${window.innerHeight * 0.1} T ${window.innerWidth} ${window.innerHeight * 0.1}`,
                `M 0 ${window.innerHeight * 0.1} Q ${window.innerWidth * 0.25} ${window.innerHeight * 0.05} ${window.innerWidth * 0.5} ${window.innerHeight * 0.1} T ${window.innerWidth} ${window.innerHeight * 0.1}`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </section>
  );
};

export default NeuralSection;