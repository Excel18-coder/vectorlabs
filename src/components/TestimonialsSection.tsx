import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Vector Labs transformed our outdated systems into a modern platform that handles 10x our previous traffic. Their engineering team is truly world-class.",
    name: "Dyvinne",
    role: "CEO, VConnect",
    rating: 5,
  },
  {
    quote: "The mobile app they built for us went from concept to App Store in 12 weeks. User engagement increased by 300% within the first month of launch.",
    name: "Ian Abungana",
    role: "CEO, SMCF",
    rating: 5,
  },
  {
    quote: "Working with Vector Labs felt like having an extension of our own team. They're proactive, transparent, and deliver consistently high-quality work.",
    name: "John Wagombe",
    role: "CEO, Opesha Solutions",
    rating: 5,
  },
 
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/25 to-background" />
      <svg className="absolute inset-0 w-full h-full opacity-35" preserveAspectRatio="none">
        <defs>
          <pattern id="spheres" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(80,70,56,0.2)" strokeWidth="1"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(80,70,56,0.16)" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="3" fill="rgba(80,70,56,0.24)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spheres)" />
      </svg>
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-foreground/5 rounded-full blur-3xl" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Client Stories</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from the companies we've helped build and scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/80 bg-background/95 p-8 flex flex-col shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 flex-1">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
