const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
      <p className="font-display text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mauricelio Pereira Silvestre
      </p> 
    </div>
  </footer>
);

export default Footer;
