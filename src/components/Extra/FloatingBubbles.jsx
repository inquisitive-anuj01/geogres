"use client";

import { motion } from "framer-motion";

const FloatingBubbles = () => {
  const bubbles = [
    { id: 1, size: 160, duration: 12, delay: 0, xStart: -15, yStart: 10, opacity: 0.45, showLogo: true, rotation: 0 },
    { id: 2, size: 95, duration: 14, delay: 0.5, xStart: 25, yStart: 5, opacity: 0.32, showLogo: true, rotation: 45 },
    { id: 3, size: 50, duration: 10, delay: 1, xStart: -5, yStart: 15, opacity: 0.2, showLogo: false, rotation: 90 },
    { id: 4, size: 140, duration: 13, delay: 1.5, xStart: 35, yStart: 25, opacity: 0.4, showLogo: true, rotation: 180 },
    { id: 5, size: 35, duration: 11, delay: 0.3, xStart: 10, yStart: 8, opacity: 0.18, showLogo: true, rotation: 270 },
    { id: 6, size: 85, duration: 15, delay: 2, xStart: -10, yStart: 35, opacity: 0.28, showLogo: true, rotation: 45 },
    { id: 7, size: 155, duration: 16, delay: 0.8, xStart: -20, yStart: 18, opacity: 0.44, showLogo: true, rotation: 135 },
    { id: 8, size: 45, duration: 9, delay: 2.5, xStart: 40, yStart: 25, opacity: 0.22, showLogo: true, rotation: 225 },
    { id: 9, size: 110, duration: 12, delay: 1.2, xStart: 5, yStart: 3, opacity: 0.36, showLogo: true, rotation: 315 },
    { id: 10, size: 60, duration: 11, delay: 3, xStart: -8, yStart: 40, opacity: 0.26, showLogo: true, rotation: 90 },
    { id: 11, size: 130, duration: 13, delay: 1.8, xStart: 15, yStart: 20, opacity: 0.42, showLogo: true, rotation: 45 },
    { id: 12, size: 40, duration: 10, delay: 2.2, xStart: 32, yStart: 32, opacity: 0.19, showLogo: true, rotation: 180 },
    { id: 13, size: 150, duration: 14, delay: 0.6, xStart: -12, yStart: 8, opacity: 0.43, showLogo: true, rotation: 270 },
    { id: 14, size: 70, duration: 12, delay: 2.8, xStart: 20, yStart: 40, opacity: 0.3, showLogo: true, rotation: 45 },
    { id: 15, size: 100, duration: 11, delay: 1.5, xStart: -18, yStart: 32, opacity: 0.38, showLogo: true, rotation: 135 },
  ];

  const floatAnimation = (startY, startX, randomRotation) => ({
    y: [startY, startY - 120, startY - 60, startY],
    x: [startX, startX + 40, startX - 30, startX + 15, startX],
    rotate: [0, randomRotation, randomRotation * 2, 360],
  });

  return (
    
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border-2 border-accent/25 backdrop-blur-sm bg-accent/5 shadow-lg shadow-accent/10"
          style={{
            width: bubble.size,
            height: bubble.size,
            right: `${bubble.xStart}%`,
            top: `${bubble.yStart}%`,
          }}
          animate={floatAnimation(0, 0, bubble.rotation)}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          initial={{ opacity: bubble.opacity }}
          whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
        >
          {bubble.showLogo && bubble.size >= 85 && (
            <motion.div
              className="w-full h-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              whileHover={{ rotate: 720, transition: { duration: 0.8 } }}
            >
              <motion.img
                src="https://res.cloudinary.com/dzvwqhzgf/image/upload/v1761286957/grogres_1_et632g.png"
                alt="GeoGres"
                className="w-1/2 h-1/2 object-contain"
                initial={{ opacity: 0.5, scale: 0.8 }}
                whileInView={{ opacity: 0.75, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.15 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}

          <motion.div
            className="absolute inset-0 rounded-full border border-accent/10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: bubble.duration + 2,
              delay: bubble.delay,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ opacity: bubble.opacity * 0.5 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
