import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl text-foreground mb-4">
              Vector <span className="text-primary">Labs</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Engineering world-class software products for startups and enterprises since 2014.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["Mobile Development", "Web Applications", "Custom Software", "Cloud & DevOps", "API & Backend", "AI & Machine Learning"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["About Us", "Our Process", "Portfolio", "Careers", "Blog", "Privacy Policy"].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-foreground transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                hello@vectorlabs.dev
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                +1 (415) 555-0142
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5" />
                <span>San Francisco, CA<br />London, UK • Cape Town, ZA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Vector Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
