import { motion } from "framer-motion";
import { Smartphone, Globe, Code2, Cloud, Database, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android with pixel-perfect UIs and seamless performance.",
    features: ["iOS & Android", "React Native & Flutter", "App Store optimization"],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable web platforms built with modern frameworks and cutting-edge architecture for millions of users.",
    features: ["SPA & PWA", "Server-side rendering", "Real-time dashboards"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business requirements and growth trajectory.",
    features: ["ERP systems", "Workflow automation", "Legacy modernization"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud-native architecture, CI/CD pipelines, and infrastructure that scales with your business.",
    features: ["AWS & Azure", "Kubernetes", "Zero-downtime deploys"],
  },
  {
    icon: Database,
    title: "API & Backend",
    description: "Robust APIs and backend systems designed for performance, security, and reliability at scale.",
    features: ["REST & GraphQL", "Microservices", "Event-driven architecture"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent automation and ML integrations that transform data into actionable business insights.",
    features: ["NLP & Computer Vision", "Predictive analytics", "LLM integrations"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            End-to-End Software Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We cover the full spectrum of software development — from ideation to deployment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight size={12} className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
