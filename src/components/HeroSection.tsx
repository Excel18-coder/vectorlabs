import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Zap, text: "2x faster delivery" },
  { icon: Users, text: "Trusted by 50+ companies" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 px-4 sm:px-0">
      {/* Futuristic animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      {/* End background */}

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Building scalable products
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight max-w-5xl mx-auto text-foreground">
            Design,Build & Scale
            <br />
            <span className="text-primary">world-class software</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            From mobile apps to enterprise platforms, Vector Labs engineers scalable 
            solutions trusted by startups and Fortune 500 companies alike.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0 w-full">
            <a href="https://wa.me/254117487554" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full gap-2 px-8 text-base w-full sm:w-auto">
                Start a Project <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 text-base border-border w-full sm:w-auto">
                Explore Services
              </Button>
            </a>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-8 px-4 sm:px-0"
          >
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <item.icon size={16} className="text-primary" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-2 sm:gap-3 px-4 sm:px-0"
        >
          {["React", "Swift", "Rust", "Node.js", "Flutter", "AWS", "TypeScript", "Python", "Docker", "PostgreSQL", "GO", "Figma"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Trusted by logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {["Smart moves cash flow", "Opesha" , "Cipher"].map((name) => (
              <span key={name} className="text-lg font-bold text-muted-foreground/40 tracking-wide">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
