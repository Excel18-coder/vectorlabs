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
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      {/* Tech-focused background with flow lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950" />
      {/* Flow lines pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
        <defs>
          <pattern id="flow" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 0 60 Q 30 30 60 60 T 120 60" fill="none" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
            <circle cx="60" cy="60" r="2" fill="rgba(59,130,246,0.6)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#flow)" />
      </svg>
      {/* Dynamic glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse delay-700" />
      {/* End background */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold mb-3" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}>How We Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4" style={{ textShadow: '0 0 25px rgba(0,0,0,0.8)' }}>
            A Proven Process, Every Time
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto" style={{ textShadow: '0 0 15px rgba(0,0,0,0.6)' }}>
            Our battle-tested methodology ensures predictable timelines, transparent communication, and exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
