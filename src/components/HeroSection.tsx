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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now accepting new projects for Q2 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight max-w-5xl mx-auto text-foreground">
            Build, scale & ship
            <br />
            <span className="text-primary">world-class software</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From mobile apps to enterprise platforms, Vector Labs engineers scalable 
            solutions trusted by startups and Fortune 500 companies alike.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full gap-2 px-8 text-base">
              Start a Project <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 text-base border-border">
              Explore Services
            </Button>
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-14 flex flex-wrap justify-center gap-8"
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
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["React", "Swift", "Kotlin", "Node.js", "Flutter", "AWS", "TypeScript", "Python", "Docker", "PostgreSQL", "GraphQL", "Figma"].map((tech) => (
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
            {["TechCorp", "Finova", "MediSync", "CloudScale", "DataBridge", "NexaPay"].map((name) => (
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
