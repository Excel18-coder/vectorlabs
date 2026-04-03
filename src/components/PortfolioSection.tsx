import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTrack Pro",
    category: "Fintech",
    description: "A real-time portfolio tracking platform processing 2M+ transactions daily for retail investors.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    metric: "2M+ daily transactions",
  },
  {
    title: "MediConnect",
    category: "Healthcare",
    description: "HIPAA-compliant telehealth platform connecting 10,000+ patients with healthcare providers.",
    tech: ["React Native", "Python", "Docker"],
    metric: "10K+ active patients",
  },
  {
    title: "LogiFlow",
    category: "Logistics",
    description: "End-to-end supply chain management system reducing delivery times by 35% across 12 countries.",
    tech: ["Flutter", "Kotlin", "GraphQL"],
    metric: "35% faster deliveries",
  },
  {
    title: "EduSphere",
    category: "EdTech",
    description: "Adaptive learning platform serving 500K+ students with AI-powered personalized curricula.",
    tech: ["TypeScript", "Python", "TensorFlow"],
    metric: "500K+ students",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Projects That Deliver Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world solutions we've built for companies across industries — each one engineered for impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-background p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary">{project.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
