import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type EducationType = {
  course: string;
  institution: string;
  link: string | null;
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  subjects: string[] | null;
}

const EducationSection = () => {

  const educations: EducationType[] = [
    {
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário Ateneu - UniAteneu",
      link: '/certificados/diploma-ads.pdf',
      startYear: 2022,
      startMonth: 7,
      endYear: 2024,
      endMonth: 12,
      subjects: [
        "Algoritmos Computacionais",
        "Arquitetura e Organização de Computadores",
        "Banco de Dados",
        "Banco de Dados de Alta Perfomance",
        "Bases do Ensino Ativo",
        "Comunicação de Dados",
        "Direito Digital e Segurança",
        "Empreendedorismo e Inovação",
        "Engenharia de Software",
        "Fundamentos em TI",
        "Gerenciamento de Produção de Software",
        "Gestão de Projetos",
        "Implantação e Administração de Sistema",
        "Interação Homem Máquina",
        "Introdução a Inteligência Artificial",
        "Laboratório de Bancos de Dados e Alta Performance",
        "Laboratório de Programação Orietada a Objetos",
        "Matemática Computacional",
        "Planejamento de Carreira",
        "Posicionamento Profissional",
        "Programação de Computadores",
        "Programação WEB",
        "Projeto de Interdisciplinar(Certificação)",
        "Projeto de Interdisciplinar(Formação)",
        "Projeto de Interdisciplinar(Vivência)",
        "Responsabilidade Socioambiental",
        "Sistemas Distribuidos",
        "Teste e Auditoria de sistemas",
        "WEB Services e Frameworks para Aplicação WEB"
      ]
    },
    {
      course: "Técnico em Informática",
      institution: "Escola Estadual de Educação Profissional José de Barcelos",
      link: '/certificados/diploma-ti.pdf',
      startYear: 2019,
      startMonth: 1,
      endYear: 2021,
      endMonth: 12,
      subjects: [
        "Arquitetura e Manutenção de Computadores",
        "Design",
        "Estágio Curricular",
        "Gerenciador de Conteúdo/Banco de Dados",
        "Gestão do Tempo",
        "HTML/CSS",
        "Informática Básica",
        "Laboratório de Software",
        "Laboratório de WEB",
        "Laboratório Hardware",
        "Lógica de Programação",
        "Noções de Robótica",
        "P.O.O/Java",
        "Programação WEB (JavaScript/PHP/MySQL)",
        "Programação WEB II (PHP/MySQL)",
        "Profissão e Formação",
        "Redes de Computadores",
        "Sistemas Operacionais"
      ]
    }
  ];

  function isCompleted(edu: EducationType) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    if (currentYear > edu.endYear) return true;
    if (currentYear === edu.endYear && currentMonth > edu.endMonth) return true;
    return false;
  }

  return (
    <section id="formacao" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm mb-2">
            {">"} formação
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Trajetória Acadêmica
          </h2>
        </motion.div>

        <div className="space-y-5">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col md:flex-row overflow-hidden rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Left panel */}
              <div className="relative flex flex-row md:flex-col items-center md:items-stretch justify-between bg-primary/10 px-6 py-5 md:w-40 md:shrink-0 overflow-hidden">
                {/* Large background year watermark */}
                <span className="absolute -bottom-3 -right-2 font-display text-7xl font-black text-primary/5 select-none leading-none pointer-events-none">
                  {edu.endYear}
                </span>

                <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                  <span className="font-display text-xl font-bold text-primary leading-none">
                    {edu.startYear}
                  </span>
                  <div className="flex-1 md:flex-none md:w-px md:h-6 h-px bg-primary/30 md:mx-0 md:my-2" />
                  <span className="font-display text-xl font-bold text-primary/30 leading-none">
                    {edu.endYear}
                  </span>
                </div>

                <span className="text-[10px] px-2 py-1 rounded-full border border-primary/20 bg-background/50 text-primary font-display whitespace-nowrap md:mt-auto">
                  {isCompleted(edu) ? 'Concluído' : 'Em andamento'}
                </span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-border group-hover:bg-primary/20 transition-colors duration-300" />

              {/* Right content */}
              <div className="flex-1 px-6 py-5">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-display text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                    {edu.course}
                  </h3>
                  {edu.link && (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0 opacity-0 group-hover:opacity-100 duration-200"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {edu.institution}
                </p>

                {edu.subjects && (
                  <div className="flex flex-wrap gap-1.5">
                    {edu.subjects.map((s) => (
                      <span
                        key={s}
                        className="font-display text-[10px] px-2 py-1 rounded bg-primary/10 text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
