import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Futuristic background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>
      {/* End background */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-primary p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-[hsl(231,84%,45%)]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-primary-foreground">
              Ready to Build Something Great?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Let's discuss your project. From concept to launch, we'll bring your vision to life.
            </p>
            <a href="https://wa.me/254117487554" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full gap-2 px-8 text-base font-semibold"
              >
                Start a Conversation <ArrowRight size={18} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
