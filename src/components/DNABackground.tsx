import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export default function DNABackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles for background animation
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 15,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-animated opacity-10" />
      
      {/* DNA Helix strands */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full opacity-20"
            style={{
              background: `conic-gradient(from ${i * 120}deg, 
                hsl(var(--neon-blue)) 0deg, 
                hsl(var(--neon-purple)) 120deg, 
                hsl(var(--neon-pink)) 240deg, 
                hsl(var(--neon-blue)) 360deg)`,
              maskImage: `linear-gradient(${45 + i * 60}deg, transparent 40%, black 50%, transparent 60%)`,
              WebkitMaskImage: `linear-gradient(${45 + i * 60}deg, transparent 40%, black 50%, transparent 60%)`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-accent opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--neon-blue))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--neon-purple))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--neon-pink))" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {[...Array(10)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100} ${Math.random() * 100} ${Math.random() * 100}`}
            stroke="url(#neuralGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}