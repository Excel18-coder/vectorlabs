import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const FounderSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="founder" className="py-32 bg-gradient-to-b from-background via-secondary/40 to-background relative overflow-hidden">
      {/* Futuristic tech-inspired background */}
      <div className="absolute inset-0 opacity-40">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="25,0 50,25 50,75 25,100 0,75 0,25" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" opacity="0.05" />
        </svg>
      </div>
      {/* End background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative flex justify-center order-2 lg:order-1 px-4 sm:px-0">
            <div className="relative w-full max-w-xs sm:max-w-md">
              {/* Glow effect */}
              <motion.div
                animate={{ boxShadow: ["0 0 60px rgba(var(--color-primary), 0.3)", "0 0 80px rgba(var(--color-primary), 0.2)"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
              />

              {/* Image container */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                  {/* Animated border glow */}
                  <motion.div
                    animate={{ boxShadow: ["inset 0 0 30px rgba(var(--color-primary), 0.2)", "inset 0 0 60px rgba(var(--color-primary), 0.1)"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-3xl"
                  />
                  <img
                    src="/founder.jpeg"
                    alt="Excel Baraka"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 border border-primary/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 border border-primary/10 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 px-4 sm:px-0">
            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">Founder & CEO</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-2"
            >
              <span className="text-foreground">Excel</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Baraka</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 w-16 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Visionary entrepreneur,software engineer and architect dedicated to transforming ideas into world-class digital solutions. With a passion for innovation and a commitment to excellence, I lead Vector Labs to deliver exceptional results that drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 mb-8"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-foreground">Leading innovation in software development across Africa</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-foreground">Empowering startups and enterprises with cutting-edge technology</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-foreground">Building scalable solutions that transform businesses</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <a href="https://wa.me/254117487554" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full px-8 gap-2">
                  Connect With Me <ArrowRight size={18} />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
