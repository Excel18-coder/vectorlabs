import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "30+", label: "Engineers" },
  { value: "99%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Engineering at the <span className="text-gradient">Speed of Innovation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              Vector Labs is a technology studio that transforms ideas into 
              world-class software products. We partner with startups and enterprises 
              to design, build, and scale digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of senior engineers, designers, and strategists work 
              collaboratively to deliver products that users love and businesses rely on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
