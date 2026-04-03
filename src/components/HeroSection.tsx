import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight max-w-5xl mx-auto text-foreground">
            Build, scale & ship
            <br />
            <span className="text-primary">world-class software</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pro Engineering, For Everyone.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full gap-2 px-8 text-base">
              Start a Project <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 text-base border-border">
              Explore Services
            </Button>
          </div>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {["React", "Swift", "Kotlin", "Node.js", "Flutter", "AWS", "TypeScript", "Python"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
