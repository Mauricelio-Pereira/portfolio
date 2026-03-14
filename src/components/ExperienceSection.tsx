import { motion } from "framer-motion";

type ExperienceType = {
  role: string;
  regimeType: "CLT" | "PJ";
  company: string;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  description: string;
  tech: string[];
}

const ExperienceSection = () => {

  const experiences: ExperienceType[] = [
    {
      role: "Desenvolvedor Fullstack Pleno",
      company: "ControlTracker",
      regimeType: "CLT",
      startYear: 2024,
      startMonth: 6,
      endYear: null,
      endMonth: null,
      description: "Desenvolvimento e evolução de sistemas web personalizados, atuando na correção de bugs, implementação de novas funcionalidades e melhorias de desempenho. Participação no desenvolvimento de plataformas de rastreamento e monitoramento de veículos, com dashboards, APIs e integração com mapas para visualização de dados em tempo real. Desenvolvimento de ERP como oficinas de cronotacógrafos, incluindo gestão de ordens de serviço, clientes, equipamentos, notas fiscais, cobranças, controle de processos técnicos e etc.",
      tech: ["PHP", "Laravel", "JavaScript", "React", "React Native", "jQuery", "TypeScript", "AWS", "MySQL", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
    },
    {
      role: "Desenvolvedor Fullstack",
      company: "Imagine Comunicação Digital",
      regimeType: "CLT",
      startYear: 2021,
      startMonth: 9,
      endYear: 2024,
      endMonth: 7,
      description: "Desenvolvimento de sites e sistemas personalizados, resolução de bugs e implementação de novas funcionalidades. Especialista em otimização de sites para desempenho rápido e melhoria do ranqueamento em buscas orgânicas no Google.",
      tech: ["PHP", "CodeIgniter", "Joomla", "WordPress", "OpenCart", "JavaScript", "jQuery", "MySQL", "HTML/CSS"],
    },
  ];

  const months = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  function calculateTime(exp: ExperienceType) {
    const start = new Date(exp.startYear, exp.startMonth - 1);

    const end = exp.endYear
      ? new Date(exp.endYear, (exp.endMonth ?? 1))
      : new Date();

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    months = months % 12;

    let result = "";

    if (years > 0) {
      result += `${years} ${years > 1 ? "anos" : "ano"}`;
    }

    if (months > 0) {
      if (result) result += " e ";
      result += `${months} ${months > 1 ? "meses" : "mês"}`;
    }

    return result || "0 meses";
  }

  function formatPeriod(exp: ExperienceType) {
    const start = `${months[exp.startMonth - 1]} de ${exp.startYear}`;

    if (!exp.endYear) {
      return `${start} — Atualmente`;
    }

    const end = `${months[exp.endMonth! - 1]} de ${exp.endYear}`;

    return `${start} — ${end}`;
  }

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm mb-2">{">"} experiência</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Trajetória Profissional
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

                <span className="font-display text-xs text-primary mb-1 block">{formatPeriod(exp)} · {calculateTime(exp)}</span>
                <h3 className="font-display text-lg font-semibold text-foreground">{exp.role} — {exp.regimeType}</h3>
                <p className="text-muted-foreground text-sm mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-display text-[10px] px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;