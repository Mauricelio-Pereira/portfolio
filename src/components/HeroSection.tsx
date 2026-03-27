import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const age = Math.floor(
    (new Date().getTime() - new Date("2002-04-24").getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  );

  const stats = [
    { value: 4, suffix: "+", label: "anos de experiência" },
    { value: 10, suffix: "+", label: "projetos entregues" },
    { value: 15, suffix: "+", label: "tecnologias" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-primary text-sm md:text-base mb-4 tracking-wider">
            {">"} hello_world <span className="animate-blink">_</span>
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Mauricelio</span>
            <br />
            <span className="text-gradient">Pereira Silvestre</span>
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="font-display text-xs px-3 py-1.5 rounded-full border-glow text-primary">
              Desenvolvedor Fullstack Pleno
            </span>
            <span className="font-display text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
              PHP / Laravel / React
            </span>
            <span className="font-display text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
              {age} anos
            </span>
            <span className="font-display text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
              Fortaleza - CE
            </span>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Atuação no desenvolvimento e manutenção de aplicações WEB e APP, trabalhando tanto no frontend quanto no backend. Experiência na criação de APIs, integração com bancos de dados, desenvolvimento de interfaces responsivas e implementação de novas funcionalidades focadas em desempenho, escalabilidade e experiência do usuário.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex flex-col"
              >
                <span className="font-display text-3xl font-bold text-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                <span className="font-display text-xs text-muted-foreground mt-0.5">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#projetos"
              className="font-display text-sm px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="font-display text-sm px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-colors text-foreground"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
