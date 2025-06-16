import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const CosmicSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1);
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]}>
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={0.2}
        transparent
        opacity={0.7}
        wireframe
      />
    </Sphere>
  );
};

const CosmicSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.5, 0.5]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <CosmicSphere />
        </Canvas>
      </div>

      {/* Galactic Spiral */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ rotateZ, scale }}
      >
        <div className="relative w-96 h-96">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full border border-purple-500/20 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                transform: `scale(${1 + i * 0.1})`
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Cosmic Dust */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-white rounded-full"
            animate={{
              x: [0, (Math.random() - 0.5) * window.innerWidth * 2],
              y: [0, (Math.random() - 0.5) * window.innerHeight * 2],
              opacity: [0, Math.random(), 0],
              scale: [0, Math.random() * 3, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Nebula Effect */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, ${
                ['#8b5cf6', '#ec4899', '#00ffff', '#3b82f6', '#f59e0b'][i]
              }20, transparent)`
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-8xl md:text-[12rem] font-black mb-8"
          style={{
            background: "linear-gradient(45deg, #8b5cf6, #ec4899, #00ffff, #8b5cf6)",
            backgroundSize: "400% 400%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          COSMIC
        </motion.h2>

        <motion.h3
          className="text-6xl md:text-8xl font-bold mb-12 text-white"
          animate={{
            textShadow: [
              "0 0 20px #8b5cf6",
              "0 0 40px #ec4899",
              "0 0 20px #00ffff",
              "0 0 20px #8b5cf6"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        >
          INFINITY
        </motion.h3>

        <motion.p
          className="text-xl md:text-2xl text-purple-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Journey through the infinite expanse of digital cosmos, where stars are born 
          from code and galaxies spiral through algorithms of pure imagination.
        </motion.p>
      </motion.div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{
              x: [-100, window.innerWidth + 100],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CosmicSection;