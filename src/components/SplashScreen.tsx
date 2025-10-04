import { motion } from 'motion/react';
import { useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000); // Reduced from 10 seconds to 6 seconds
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Circuit node positions for the logo design
  const neuralNodes = [
    { x: 40, y: 30 }, { x: 60, y: 25 }, { x: 80, y: 35 },
    { x: 35, y: 50 }, { x: 55, y: 45 }, { x: 75, y: 55 },
    { x: 45, y: 70 }, { x: 65, y: 75 }, { x: 85, y: 65 }
  ];

  // Particles for circuit animation
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    path: i % 4
  }));

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#0f1419] to-[#000000]" />
      
      {/* Animated Circuit Board Background */}
      <div className="absolute inset-0">
        {/* Horizontal Circuit Traces - Simplified */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`h-trace-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-30"
            style={{
              left: '10%',
              right: '10%',
              top: `${20 + i * 20}%`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.3
            }}
          />
        ))}

        {/* Vertical Circuit Traces - Simplified */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`v-trace-${i}`}
            className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-20"
            style={{
              left: `${30 + i * 40}%`,
              top: '10%',
              bottom: '10%',
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 2,
              delay: 1 + i * 0.3
            }}
          />
        ))}

        {/* Circuit Connection Nodes - Simplified */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-[#00d4ff] rounded-full"
            style={{
              left: `${30 + (i % 2) * 40}%`,
              top: `${25 + Math.floor(i / 2) * 30}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 2 + i * 0.2
            }}
          />
        ))}

        {/* Animated Particles along circuits */}
        {particles.slice(0, 4).map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-[#00ff88] rounded-full shadow-[0_0_4px_#00ff88]"
            style={{
              left: particle.path % 2 === 0 ? '10%' : '20%',
              top: `${20 + particle.path * 15}%`,
            }}
            animate={{
              x: particle.path % 2 === 0 ? [0, 200, 400] : [0, -80, -200],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              delay: particle.delay,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Microchip Outlines in Background */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`chip-${i}`}
            className="absolute border border-[#00d4ff] rounded opacity-10"
            style={{
              width: `${60 + i * 20}px`,
              height: `${40 + i * 12}px`,
              left: `${15 + i * 25}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 3,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Chip pins */}
            {[...Array(6)].map((_, pinIndex) => (
              <div
                key={pinIndex}
                className="absolute w-1 h-2 bg-[#00d4ff] opacity-30"
                style={{
                  left: pinIndex < 3 ? '-2px' : 'calc(100% - 2px)',
                  top: `${15 + (pinIndex % 3) * 20}%`,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Central Logo Area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          {/* Chip + AI Brain Fusion Logo */}
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            {/* Outer Chip Container */}
            <motion.div
              className="absolute inset-4 border-2 border-[#00d4ff] rounded-lg bg-gradient-to-br from-[#0a0f1c] to-[#1a1f2c]"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                  '0 0 40px rgba(0, 212, 255, 0.8)',
                  '0 0 20px rgba(0, 212, 255, 0.5)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Chip Pins */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-3 bg-[#00d4ff]"
                  style={{
                    left: i < 8 ? '-4px' : 'calc(100% - 4px)',
                    top: `${10 + (i % 8) * 12}%`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    delay: 2.5 + i * 0.1,
                    repeat: Infinity
                  }}
                />
              ))}

              {/* Neural Network Inside Chip */}
              <div className="absolute inset-4">
                {/* Neural Nodes */}
                {neuralNodes.map((node, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-[#00ff88] rounded-full"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1],
                      opacity: [0, 1, 0.8],
                    }}
                    transition={{
                      duration: 1,
                      delay: 3 + index * 0.15,
                    }}
                  />
                ))}

                {/* Neural Connections */}
                <svg className="absolute inset-0 w-full h-full">
                  {neuralNodes.slice(0, -1).map((node, index) => {
                    const nextNode = neuralNodes[index + 1];
                    return (
                      <motion.line
                        key={index}
                        x1={`${node.x}%`}
                        y1={`${node.y}%`}
                        x2={`${nextNode.x}%`}
                        y2={`${nextNode.y}%`}
                        stroke="#ff6b35"
                        strokeWidth="1"
                        opacity="0.6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 1.5,
                          delay: 3.5 + index * 0.2,
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Central Processing Core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#ff6b35] rounded-full transform -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      '0 0 10px rgba(255, 107, 53, 0.6)',
                      '0 0 25px rgba(255, 107, 53, 1)',
                      '0 0 10px rgba(255, 107, 53, 0.6)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    delay: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Vinyas Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            <h1 
              className="text-6xl font-bold text-white mb-2"
              style={{
                textShadow: '0 0 30px #00d4ff, 0 0 60px #00d4ff',
                background: 'linear-gradient(45deg, #00d4ff, #00ff88, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Vinyas
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-[#00d4ff] opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 4.8 }}
          >
            Redefining Chip Design with AI
          </motion.p>

          {/* Loading Animation - appears after main animation completes */}
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            <motion.div
              className="w-6 h-6 border-2 border-[#00d4ff] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Status text during pause */}
          <motion.p
            className="mt-3 text-sm text-gray-400 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 4.5 }}
          >
            Initializing AI Systems...
          </motion.p>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00d4ff] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#00ff88] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
}