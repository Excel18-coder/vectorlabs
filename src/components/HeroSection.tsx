import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: Zap, text: "2x faster delivery" },
  { icon: Users, text: "Trusted by 50+ companies" },
];

const metrics = [
  { value: "10-12 weeks", label: "Typical MVP launch" },
  { value: "99.95%", label: "Platform uptime target" },
  { value: "< 24h", label: "Response SLA" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 px-4 sm:px-0 bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/35 to-background" />
      <svg className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(80,70,56,0.12)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/90 text-sm text-muted-foreground mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Your long-term software engineering partner
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-extrabold leading-[1.05] tracking-tight max-w-5xl mx-auto text-foreground">
            Product Engineering
            <br />
            <span className="text-gradient">for Serious Growth</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            We help startups and established teams ship reliable software faster —
            with clear roadmaps, predictable delivery, and senior engineering execution.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0 w-full">
            <a href="https://wa.me/254117487554" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="rounded-full gap-2 px-8 text-base w-full sm:w-auto">
                Book a Strategy Call <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 text-base border-border bg-background/70 w-full sm:w-auto">
                Explore Services
              </Button>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto px-4 sm:px-0">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-border/70 bg-background/85 p-4 text-left shadow-sm">
                <p className="text-lg font-bold text-foreground">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
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

        {/* Trusted by logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-14"
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
