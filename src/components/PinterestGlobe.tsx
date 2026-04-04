import { motion } from "framer-motion";

const PinterestGlobe = () => {
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

      {/* Spinning Globe Image */}
      <motion.div
        className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          boxShadow: "0 0 60px rgba(59, 130, 246, 0.5), 0 0 30px rgba(34, 197, 246, 0.3)",
          backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3CradialGradient id=%22earthGlobe%22 cx=%2235%25%22 cy=%2235%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%231e40af%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%231e3a8a%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2250%22 fill=%22url(%23earthGlobe)%22/%3E%3C!-- Continents --%3E%3Cpath d=%22M 20 30 L 30 25 L 35 35 L 28 42 Z%22 fill=%22%2310b981%22/%3E%3Cpath d=%22M 50 20 L 65 18 L 70 30 L 60 35 Z%22 fill=%22%2310b981%22/%3E%3Cpath d=%22M 70 50 L 85 48 L 82 65 L 70 68 Z%22 fill=%22%2310b981%22/%3E%3Cpath d=%22M 25 60 L 40 55 L 45 70 L 30 75 Z%22 fill=%22%2310b981%22/%3E%3Ccircle cx=%2235%22 cy=%2235%22 r=%2250%22 fill=%22none%22 stroke=%22rgba(59, 130, 246, 0.2)%22 stroke-width=%221%22/%3E%3Ccircle cx=%2235%22 cy=%2235%22 r=%2235%22 fill=%22rgba(255,255,255,0.15)%22/%3E%3C/svg%3E')"
        }}
      >
        <img
          src="https://i.pinimg.com/736x/87/53/87/875387db8b8a8c9b9c9c9c9c9c9c9c9c.jpg"
          alt="Globe"
          className="w-full h-full object-cover rounded-full"
          onError={(e) => {
            // Fallback to SVG if image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </motion.div>

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

export default PinterestGlobe;
