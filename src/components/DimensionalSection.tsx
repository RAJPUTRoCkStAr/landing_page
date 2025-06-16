import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const DimensionalShapes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Box position={[-3, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#00ffff" wireframe />
      </Box>
      <Torus position={[0, 0, 0]} args={[1, 0.3, 16, 100]}>
        <meshStandardMaterial color="#8b5cf6" wireframe />
      </Torus>
      <Octahedron position={[3, 0, 0]} args={[1]}>
        <meshStandardMaterial color="#ec4899" wireframe />
      </Octahedron>
    </group>
  );
};

const DimensionalSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const z = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dimensional Grid */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          style={{ rotateY, z }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent transform rotate-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent transform -rotate-45" />
          
          {/* Grid Lines */}
          {[...Array(20)].map((_, i) => (
            <div key={i}>
              <div 
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                style={{ top: `${i * 5}%` }}
              />
              <div 
                className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
                style={{ left: `${i * 5}%` }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 3D Shapes */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <DimensionalShapes />
        </Canvas>
      </div>

      {/* Portal Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-96 h-96 rounded-full border-4 border-cyan-400/30"
          animate={{
            scale: [1, 1.5, 1],
            rotate: 360,
            borderColor: ["#00ffff30", "#8b5cf630", "#ec489930", "#00ffff30"]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div
            className="w-full h-full rounded-full border-4 border-purple-500/30"
            animate={{
              scale: [1.2, 0.8, 1.2],
              rotate: -360
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="w-full h-full rounded-full border-4 border-pink-500/30"
              animate={{
                scale: [0.8, 1.3, 0.8],
                rotate: 360
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-8xl md:text-[10rem] font-black mb-8"
          style={{
            background: "linear-gradient(45deg, #00ffff, #8b5cf6, #ec4899, #00ffff)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          DIMENSIONAL
        </motion.h2>

        <motion.h3
          className="text-6xl md:text-8xl font-bold mb-12 text-white"
          animate={{
            textShadow: [
              "0 0 10px #00ffff",
              "0 0 30px #8b5cf6",
              "0 0 10px #ec4899",
              "0 0 10px #00ffff"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        >
          GATEWAY
        </motion.h3>

        <motion.p
          className="text-xl md:text-2xl text-cyan-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Step through the portal between dimensions. Where geometry becomes poetry 
          and mathematics transforms into pure visual symphony.
        </motion.p>
      </motion.div>

      {/* Dimensional Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
              z: [0, Math.random() * 1000],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
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
    </section>
  );
};

export default DimensionalSection;