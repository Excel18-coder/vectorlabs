import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and technical requirements to craft a clear roadmap.",
    details: ["Stakeholder interviews", "Market & competitor analysis", "Technical feasibility assessment", "Project roadmap & timeline"],
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Prototype",
    description: "Our designers create intuitive interfaces and interactive prototypes validated through user testing.",
    details: ["Wireframes & user flows", "High-fidelity UI design", "Interactive prototypes", "User testing & iteration"],
  },
  {
    icon: Code2,
    step: "03",
    title: "Development & QA",
    description: "Our engineers build your product using agile sprints with continuous integration and thorough testing.",
    details: ["Agile 2-week sprints", "Code reviews & CI/CD", "Automated & manual QA", "Performance optimization"],
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Scale",
    description: "We deploy, monitor, and iterate — ensuring your product performs flawlessly as your user base grows.",
    details: ["Cloud deployment", "24/7 monitoring", "Performance analytics", "Ongoing maintenance & updates"],
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">How We Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            A Proven Process, Every Time
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our battle-tested methodology ensures predictable timelines, transparent communication, and exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-2xl border border-border bg-background p-8"
            >
              <div className="text-5xl font-extrabold text-primary/10 mb-4">{step.step}</div>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
              <ul className="space-y-1.5">
                {step.details.map((detail) => (
                  <li key={detail} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {detail}
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

export default ProcessSection;
