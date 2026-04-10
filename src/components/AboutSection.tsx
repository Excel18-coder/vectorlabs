import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "5", label: "Engineers" },
  { value: "99%", label: "Client Retention" },
  { value: "$10k+", label: "Revenue Generated for Clients" },
  { value: "15+", label: "Industries Served" },
];

const values = [
  "Transparency in every sprint and milestone",
  "Security-first engineering practices",
  "Dedicated project managers for every engagement",
  "Post-launch support and maintenance included",
  "SOC 2 Type II compliant processes",
  "Weekly progress reports and demos",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
              Engineering at the Speed of Innovation
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Vector Labs is a technology studio that transforms ideas into
              world-class software products. Founded in 2025, we've partnered with
              startups, scale-ups, and enterprises across 5+ industries to design,
              build, and scale digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of 5 senior engineers, designers, and strategists work
              collaboratively to deliver high-quality products.
            
            </p>

            <div className="space-y-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-secondary/50 p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
