"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function QuantumLight() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute"
        style={{
          background: `radial-gradient(circle, 
            rgba(147, 51, 234, 0.08) 0%, 
            rgba(124, 58, 237, 0.05) 30%, 
            rgba(139, 92, 246, 0.02) 60%, 
            transparent 80%)`,
          width: "100vw",
          height: "100vw",
          borderRadius: "50%",
          left: "50%",
          top: "0%",
        }}
        initial={{
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute"
        style={{
          background: `radial-gradient(circle, 
            rgba(147, 51, 234, 0.04) 0%, 
            rgba(124, 58, 237, 0.03) 40%, 
            transparent 70%)`,
          width: "80vw",
          height: "80vw",
          borderRadius: "50%",
          left: "50%",
          top: "0%",
        }}
        initial={{
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute"
          style={{
            background: `radial-gradient(circle, 
              rgba(147, 51, 234, 0.4) 0%, 
              rgba(147, 51, 234, 0.2) 50%, 
              transparent 70%)`,
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            left: "50%",
            top: "0%",
          }}
          initial={{
            x: "-50%",
            y: "-50%",
            rotate: i * 45 + 90,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
            y: ["-30vw", "-35vw", "-30vw"],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
