import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const footerLinks = [
    { label: "Terms", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
    { label: "Cookies", href: "#cookies" },
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:excel6737@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+254117487554";
  };

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
              Engineering world-class software products for startups and enterprises since 2025.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
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
                  <a href="#services" className="hover:text-foreground transition-colors cursor-pointer">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-foreground transition-colors cursor-pointer">{link.label}</a>
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
                <button
                  onClick={handleEmailClick}
                  className="hover:text-foreground transition-colors cursor-pointer text-left"
                >
                  excel6737@gmail.com
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <button
                  onClick={handlePhoneClick}
                  className="hover:text-foreground transition-colors cursor-pointer text-left"
                >
                  +254117487554
                </button>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Vector Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-foreground transition-colors cursor-pointer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

