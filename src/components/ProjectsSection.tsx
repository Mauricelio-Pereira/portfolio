import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor } from "lucide-react";

type ProjectType = {
  title: string;
  description: string;
  tech: string[];
  link: string | null;
  gitHub: string | null;
  image: string | null;
}

const ProjectsSection = () => {
  const projects: ProjectType[] = [
    {
      title: "Sistema para Oficinas de Cronotacógrafos ERP",
      description: "ERP completo para Oficinas de Cronotacógrafos com módulos financeiro, estoque, clientes, fornecedores, veículos, notas fiscais e etc.",
      tech: ["PHP", "Laravel", "JavaScript", "React", "TypeScript", "AWS", "MySQL", "Tailwind CSS", "HTML/CSS"],
      link: 'https://consertac.postoensaio.com.br',
      gitHub: 'https://github.com/control-tracker/control-tac',
      image: '/image-projects/consertac.png',
    },
    {
      title: "Sistema de rastreamento veicular",
      description: "Plataforma web para monitoramento e gestão de veículos em tempo real. O sistema permite visualização da localização no mapa, histórico de rotas, controle de dispositivos rastreadores, cadastro de veículos e clientes, além de relatórios de movimentação e eventos.",
      tech: ["PHP", "JavaScript", "jQuery", "MySQL", "Bootstrap", "HTML/CSS"],
      link: "https://ctracker.com.br/login.php",
      gitHub: null,
      image: '/image-projects/ctracker.png',
    },
    {
      title: "Site Institucional com Admin",
      description: "Desenvolvimento de site institucional com painel administrativo para gerenciamento de conteúdos, páginas e informações da empresa. O sistema permite atualização dinâmica do site, gerenciamento de seções, formulários de contato e otimização para desempenho rápido e melhoria do ranqueamento em buscas orgânicas no Google.",
      tech: ["PHP", "codeIgniter", "JavaScript", "jQuery", "MySQL", "Bootstrap", "HTML/CSS"],
      link: "https://www.verdelab.com.br",
      gitHub: null,
      image: '/image-projects/verdelab.png',
    },
    {
      title: "Site Institucional com Admin",
      description: "Desenvolvimento de site institucional com painel administrativo para gerenciamento de conteúdos, páginas e informações da empresa. O sistema permite atualização dinâmica do site, gerenciamento de seções, formulários de contato e otimização para desempenho rápido e melhoria do ranqueamento em buscas orgânicas no Google.",
      tech: ["PHP", "codeIgniter", "JavaScript", "jQuery", "MySQL", "Bootstrap", "HTML/CSS"],
      link: "https://www.metalvi.com.br",
      gitHub: null,
      image: '/image-projects/metalvi.png',
    },
    {
      title: "Site Institucional com Admin",
      description: "Desenvolvimento de site institucional com painel administrativo para gerenciamento de conteúdos, páginas e informações da empresa. O sistema permite atualização dinâmica do site, gerenciamento de seções, formulários de contato e otimização para desempenho rápido e melhoria do ranqueamento em buscas orgânicas no Google.",
      tech: ["PHP", "codeIgniter", "JavaScript", "jQuery", "MySQL", "Bootstrap", "HTML/CSS"],
      link: "https://www.weetravel.com.br",
      gitHub: null,
      image: '/image-projects/weetravel.png',
    },
    {
      title: "Site Institucional com Admin",
      description: "Desenvolvimento de site institucional com painel administrativo para gerenciamento de conteúdos, páginas e informações da empresa. O sistema permite atualização dinâmica do site, gerenciamento de seções, formulários de contato e otimização para desempenho rápido e melhoria do ranqueamento em buscas orgânicas no Google.",
      tech: ["PHP", "codeIgniter", "JavaScript", "jQuery", "MySQL", "Bootstrap", "HTML/CSS"],
      link: "https://www.petromax.com.br",
      gitHub: null,
      image: '/image-projects/petromax.png',
    },
  ];

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm mb-2">{">"} projetos</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Projetos em Destaque
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:glow-primary overflow-hidden flex flex-col"
            >
              {/* Preview */}
              <div className="relative h-44 bg-secondary/50 overflow-hidden shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col">
                    {/* Browser bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-background/60 border-b border-border shrink-0">
                      <span className="w-2 h-2 rounded-full bg-red-400/60" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                      <span className="w-2 h-2 rounded-full bg-green-400/60" />
                      {project.link && (
                        <span className="ml-2 font-display text-[10px] text-muted-foreground truncate">
                          {project.link.replace(/^https?:\/\/(www\.)?/, "")}
                        </span>
                      )}
                    </div>
                    {/* Placeholder body */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-2 opacity-20">
                      <Monitor size={28} className="text-primary" />
                      <span className="font-display text-[10px] text-muted-foreground">
                        screenshot não disponível
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex gap-2 text-muted-foreground shrink-0 ml-2">
                    {project.gitHub && (
                      <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="hover:text-primary transition-colors" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-display text-[10px] px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
