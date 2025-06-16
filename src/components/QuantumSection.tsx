import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const QuantumField: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const sphere = new Float32Array(5000 * 3);
  
  for (let i = 0; i < 5000; i++) {
    const radius = Math.random() * 10;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    sphere[i * 3 + 2] = radius * Math.cos(phi);
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const QuantumSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black"
    >
      {/* 3D Quantum Field */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <QuantumField />
        </Canvas>
      </div>

      {/* Quantum Tunnels */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{ rotateX }}
          >
            <div 
              className="absolute w-full h-2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                transform: `perspective(1000px) rotateX(${i * 30}deg)`
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
            animate={{
              x: [0, window.innerWidth],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              left: Math.random() * 100 + '%'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-8"
        style={{ scale }}
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
              background: "linear-gradient(90deg, #00ffff, #8b5cf6, #ec4899)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            QUANTUM
          </motion.h2>

          <motion.h3
            className="text-6xl md:text-8xl font-bold mb-12 text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            CONSCIOUSNESS
          </motion.h3>

          <motion.p
            className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Where thoughts become reality and reality bends to imagination. 
            Experience the intersection of mind and machine, where every pixel 
            exists in superposition until observed.
          </motion.p>
        </motion.div>

        {/* Quantum Equations */}
        <div className="absolute inset-0 pointer-events-none">
          {['Ψ = α|0⟩ + β|1⟩', 'H|ψ⟩ = E|ψ⟩', '∇²ψ + k²ψ = 0'].map((equation, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/30 text-2xl font-mono"
              animate={{
                x: [0, window.innerWidth * 0.8],
                y: [0, (Math.random() - 0.5) * window.innerHeight * 0.5],
                opacity: [0, 0.7, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
              style={{
                left: '10%',
                top: `${30 + i * 20}%`
              }}
            >
              {equation}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuantumSection;