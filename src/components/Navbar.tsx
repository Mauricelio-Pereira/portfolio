import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";

type LinkType = {
  label: string;
  href: string; 
}

const Navbar = () => {
  const links:LinkType[] = [
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projetos" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Formação", href: "#formacao" },
    { label: "Contato", href: "#contato" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-sm font-bold text-primary">
          {"<"} MPS {"/>"}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Botão currículo */}
          <a
            href="/curriculo-mauricelio-pereira-silvestre.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-display rounded bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            <FileText size={14} />
            Currículo
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-display text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Botão currículo */}
          <a
            href="/curriculo-mauricelio-pereira-silvestre.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-display rounded bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            <FileText size={14} />
            Currículo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
