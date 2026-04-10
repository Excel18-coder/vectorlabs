import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/70 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-[hsl(25,45%,24%)] rounded-lg flex items-center justify-center font-bold text-primary-foreground text-sm shadow-md">
            VL
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Vector <span className="text-primary">Labs</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="https://wa.me/254117487554" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full px-6 shadow-sm">
              Book a Call
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/254117487554" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="rounded-full w-fit px-6 shadow-sm">
                Book a Call
              </Button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
