import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const QuantumOrb: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[2, 100, 100]} scale={1.5}>
        <MeshDistortMaterial
          color="#00ffff"
          attach="material"
          distort={0.6}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <QuantumOrb />
          <Environment preset="night" />
        </Canvas>
      </div>

      {/* Quantum Field Effect */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 2, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={i}
            x1={Math.random() * window.innerWidth}
            y1={Math.random() * window.innerHeight}
            x2={Math.random() * window.innerWidth}
            y2={Math.random() * window.innerHeight}
            stroke="url(#gradient)"
            strokeWidth="1"
            opacity="0.3"
            animate={{
              x2: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y2: [Math.random() * window.innerHeight, Math.random() * window.innerHeight]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-8"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-8xl md:text-[12rem] font-black mb-8 leading-none"
            style={{
              background: "linear-gradient(45deg, #00ffff, #8b5cf6, #ec4899, #00ffff)",
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
            BEYOND
          </motion.h1>

          <motion.h2
            className="text-6xl md:text-8xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            REALITY
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl text-cyan-300 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            Enter a dimension where consciousness meets code, where imagination transcends the boundaries of the possible
          </motion.p>

          <motion.div
            className="flex justify-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {['EXPLORE', 'TRANSCEND', 'EVOLVE'].map((text, i) => (
              <motion.div
                key={text}
                className="px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-bold text-lg cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px #00ffff" }}
                animate={{
                  boxShadow: [
                    "0 0 0px #00ffff",
                    "0 0 20px #00ffff",
                    "0 0 0px #00ffff"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Holographic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;