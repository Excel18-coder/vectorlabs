import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "30+", label: "Engineers" },
  { value: "99%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">About Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">
              Engineering at the Speed of Innovation
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
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-background p-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
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
