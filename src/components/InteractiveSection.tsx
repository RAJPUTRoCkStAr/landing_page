import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Rocket, Eye } from 'lucide-react';

const InteractiveSection: React.FC = () => {
  const cards = [
    {
      icon: Sparkles,
      title: "Immersive Design",
      description: "Crafting experiences that blur the line between digital and reality",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized animations that perform seamlessly across all devices",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Future Forward",
      description: "Pushing the boundaries of what's possible in web experiences",
      color: "from-pink-500 to-blue-500"
    },
    {
      icon: Eye,
      title: "Visual Poetry",
      description: "Every element tells a story through motion and interaction",
      color: "from-purple-500 to-blue-500"
    }
  ];

  return (
    <section className="relative min-h-screen py-32 bg-gradient-to-b from-black via-purple-900/5 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Interactive Details
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the micro-stories hidden within each element
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              viewport={{ once: true }}
            >
              {/* Card Background */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-500/20 backdrop-blur-sm overflow-hidden">
                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 mb-6 relative"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-r ${card.color} p-3 shadow-2xl`}>
                      <card.icon className="w-full h-full text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {card.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;