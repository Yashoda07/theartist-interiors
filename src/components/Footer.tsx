const Footer = () => (
  <footer className="section-padding py-12 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="font-display text-xl text-foreground">
        The Artist <span className="font-medium">Interiors</span>
      </div>
      <p className="text-body text-muted-foreground text-sm">
        © {new Date().getFullYear()} The Artist Interiors. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
