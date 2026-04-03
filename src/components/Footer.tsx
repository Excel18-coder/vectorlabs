const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-heading font-bold text-lg">
          <span className="text-gradient">Vector</span> Labs
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Vector Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
