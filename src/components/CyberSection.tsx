import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Eye, Cpu, Wifi } from 'lucide-react';

const CyberSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.5, 0.8]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cybernetic Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform rotate-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent transform -rotate-45" />
        
        {[...Array(20)].map((_, i) => (
          <div key={i}>
            <motion.div 
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{ top: `${i * 5}%` }}
              animate={{
                opacity: [0.1, 0.6, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
            <motion.div 
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.1, 0.6, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          </div>
        ))}
      </div>

      {/* Digital Rain */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-cyan-400 to-transparent"
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* The Cyber Tiger */}
      <motion.div
        className="relative z-10"
        style={{ scale, rotateZ }}
      >
        <motion.div
          className="relative w-96 h-56 mx-auto"
          animate={{
            y: [0, -25, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Cyber Tiger Body */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl"
            style={{
              borderRadius: "80% 20% 20% 80% / 70% 70% 30% 30%",
              clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)"
            }}
            animate={{
              boxShadow: [
                "0 0 80px rgba(6, 182, 212, 0.7)",
                "0 0 160px rgba(6, 182, 212, 1)",
                "0 0 80px rgba(6, 182, 212, 0.7)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          />

          {/* Digital Stripes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-3 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
              style={{
                top: `${8 + i * 7}%`,
                transform: `rotate(${-25 + i * 4}deg)`,
                clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)"
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleX: [0.8, 1.4, 0.8],
                boxShadow: [
                  "0 0 5px rgba(6, 182, 212, 0.5)",
                  "0 0 15px rgba(6, 182, 212, 1)",
                  "0 0 5px rgba(6, 182, 212, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}

          {/* Cyber Eyes */}
          <motion.div
            className="absolute top-8 left-24 w-10 h-10 bg-gradient-to-r from-cyan-300 to-white rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.8)",
                "0 0 40px rgba(6, 182, 212, 1)",
                "0 0 20px rgba(6, 182, 212, 0.8)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <Eye className="w-6 h-6 text-blue-900" />
          </motion.div>
          <motion.div
            className="absolute top-8 right-24 w-10 h-10 bg-gradient-to-r from-cyan-300 to-white rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.5, 1],
              boxShadow: [
                "0 0 20px rgba(6, 182, 212, 0.8)",
                "0 0 40px rgba(6, 182, 212, 1)",
                "0 0 20px rgba(6, 182, 212, 0.8)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.1
            }}
          >
            <Eye className="w-6 h-6 text-blue-900" />
          </motion.div>

          {/* Cyber Ears with Tech */}
          <motion.div
            className="absolute -top-10 left-20 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
            animate={{
              rotate: [0, 25, -25, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >
            <Wifi className="w-8 h-8 text-cyan-200" />
          </motion.div>
          <motion.div
            className="absolute -top-10 right-20 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
            animate={{
              rotate: [0, -25, 25, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >
            <Cpu className="w-8 h-8 text-cyan-200" />
          </motion.div>

          {/* Cyber Tail */}
          <motion.div
            className="absolute -right-16 top-1/2 w-32 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
            animate={{
              rotate: [0, 40, -40, 0],
              scaleX: [1, 1.4, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
          >
            <Zap className="w-6 h-6 text-cyan-200" />
          </motion.div>

          {/* Holographic Aura */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-cyan-400/40 via-blue-500/20 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          />

          {/* Data Streams */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                animate={{
                  x: [0, (Math.random() - 0.5) * 300],
                  y: [0, (Math.random() - 0.5) * 300],
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
                style={{
                  left: '50%',
                  top: '50%'
                }}
              />
            ))}
          </div>

          {/* Circuit Patterns */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-px bg-cyan-400"
                style={{
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'left center',
                  transform: `rotate(${i * 45}deg)`
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
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
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          CYBER EVOLUTION
        </h2>
        <p className="text-xl text-cyan-300 max-w-2xl mx-auto mb-8">
          Transcending biological limits. Enhanced with quantum processors, 
          neural networks, and digital consciousness. The ultimate fusion of nature and technology.
        </p>
        
        <motion.button
          className="px-16 py-8 text-2xl font-bold border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-500 backdrop-blur-sm"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 60px rgba(6, 182, 212, 0.6)",
            textShadow: "0 0 20px #000000"
          }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(6, 182, 212, 0)",
              "0 0 40px rgba(6, 182, 212, 0.4)",
              "0 0 0px rgba(6, 182, 212, 0)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >
          ENTER THE FUTURE
        </motion.button>
      </motion.div>

      {/* Holographic Interface */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 border border-cyan-400/50 rounded-full"
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CyberSection;