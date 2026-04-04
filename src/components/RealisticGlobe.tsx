import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const RealisticGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2.2;

    const drawGlobe = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(15, 23, 42, 0)";
      ctx.fillRect(0, 0, width, height);

      // Save context state
      ctx.save();

      // Translate to center and rotate
      ctx.translate(centerX, centerY);
      ctx.rotate((rotationRef.current * Math.PI) / 180);

      // Draw ocean (base blue)
      ctx.fillStyle = "#1e40af";
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Add gradient for depth
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.3)");
      gradient.addColorStop(1, "rgba(30, 64, 175, 0.8)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw continents with more detail
      ctx.fillStyle = "#10b981";
      ctx.strokeStyle = "#059669";
      ctx.lineWidth = 0.5;

      // North America
      drawContinent(ctx, -70, -30, 25, 35);

      // South America
      drawContinent(ctx, -65, 20, 18, 28);

      // Europe and Africa
      drawContinent(ctx, 10, -35, 45, 50);

      // Asia
      drawContinent(ctx, 80, -40, 60, 50);

      // Australia
      drawContinent(ctx, 130, 30, 15, 18);

      // Antarctica (subtle)
      ctx.fillStyle = "rgba(229, 231, 235, 0.2)";
      drawContinent(ctx, 0, 70, 80, 15);

      // Add atmospheric glow
      const glowGradient = ctx.createRadialGradient(0, 0, radius * 0.8, 0, 0, radius);
      glowGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      glowGradient.addColorStop(1, "rgba(59, 130, 246, 0.2)");
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Highlight/light reflection
      const highlight = ctx.createRadialGradient(-radius * 0.4, -radius * 0.4, 0, 0, 0, radius);
      highlight.addColorStop(0, "rgba(255, 255, 255, 0.3)");
      highlight.addColorStop(0.3, "rgba(255, 255, 255, 0.1)");
      highlight.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = highlight;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();

      // Restore context state
      ctx.restore();

      // Update rotation
      rotationRef.current += 0.3;
      requestAnimationFrame(drawGlobe);
    };

    drawGlobe();
  }, []);

  const drawContinent = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    // Draw irregular shape using sine waves for a more natural coastline
    ctx.beginPath();
    const points = 12;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const dx =
        x +
        Math.cos(angle) * width +
        Math.sin(angle * 3) * (width * 0.3) +
        Math.sin(angle * 7) * (width * 0.2);
      const dy =
        y +
        Math.sin(angle) * height +
        Math.cos(angle * 3) * (height * 0.3) +
        Math.cos(angle * 7) * (height * 0.2);
      if (i === 0) ctx.moveTo(dx, dy);
      else ctx.lineTo(dx, dy);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  };

  return (
    <motion.div
      className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-500/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Middle ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-cyan-400/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-purple-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Canvas Globe */}
      <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl" style={{ boxShadow: "0 0 60px rgba(59, 130, 246, 0.5), 0 0 30px rgba(34, 197, 246, 0.3)" }}>
        <canvas
          ref={canvasRef}
          width={256}
          height={256}
          className="w-full h-full"
          style={{ display: "block" }}
        />
      </div>

      {/* Orbiting particles */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-lg" style={{ boxShadow: "0 0 10px rgba(34, 197, 246, 0.8)" }} />
        <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-lg" style={{ boxShadow: "0 0 8px rgba(147, 197, 253, 0.8)" }} />
        <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-purple-400 rounded-full shadow-lg" style={{ boxShadow: "0 0 10px rgba(168, 85, 247, 0.8)" }} />
      </motion.div>
    </motion.div>
  );
};

export default RealisticGlobe;
