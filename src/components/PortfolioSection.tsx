import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Opesha Solutions",
    category: "Fintech",
    description: "A real-time fintech platform that leverages AI to connect business owners with investors.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    metric: "$3k+ transactions daily",
  },
  {
    title: "SMCF",
    category: "Fintech",
    description: "Digitized chama and SACCO operations with integrated executive dashboards for money management.",
    tech: ["React Native", "GO", "Docker"],
    metric: "10K+ transactions daily",
  },
  {
    title: "VConnect",
    category: "E-commerce",
    description: "A full-fledged e-commerce platform with integrated payment systems.",
    tech: ["TypeScript", "Rust", "Docker"],
    metric: "35% faster deliveries",
  },
  {
    title: "EduSphere",
    category: "EdTech",
    description: "Adaptive learning platform serving 500K+ students with AI-powered personalized curricula.",
    tech: ["TypeScript", "Python", "GO","Rust"],
    metric: "50K+ students",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none">
        <defs>
          <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 0 40 L 80 40 M 40 0 L 40 80" fill="none" stroke="rgba(80,70,56,0.2)" strokeWidth="1"/>
            <circle cx="40" cy="40" r="3" fill="rgba(80,70,56,0.22)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-3xl" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Outcomes That Move the Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selected engagements where product strategy and execution translated directly into measurable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border/80 bg-background/95 p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary whitespace-nowrap">{project.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
