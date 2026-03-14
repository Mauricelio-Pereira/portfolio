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

  function formatPeriod(edu: EducationType) {
    return `${edu.startYear} — ${edu.endYear}`;
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

        <div className="relative">

          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">

            {educations.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >

                <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-display text-xs text-primary block">
                    {formatPeriod(edu)}
                  </span>

                  <span className="text-[10px] px-2 py-1 rounded bg-secondary text-muted-foreground">
                    {isCompleted(edu) ? 'Concluído' : 'Em andamento'}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {edu.course}
                  </h3>

                  <div className="flex gap-2 text-muted-foreground"> 
                    {edu.link && (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} className="hover:text-primary transition-colors cursor-pointer" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-3">
                  {edu.institution}
                </p>

                {edu.subjects && (
                  <div className="flex flex-wrap gap-2">
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

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationSection;
