import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Software Engineering Excellence
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl mx-auto">
            We Build the
            <br />
            <span className="text-gradient">Future of Software</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From mobile apps to enterprise platforms, Vector Labs engineers 
            scalable solutions that push boundaries.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 px-8">
              Start a Project <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary gap-2 px-8">
              Our Work
            </Button>
          </div>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {["React", "Swift", "Kotlin", "Node.js", "Flutter", "AWS", "TypeScript", "Python"].map((tech, i) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-sm text-muted-foreground"
              style={{ animationDelay: `${i * 0.3}s` }}
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
