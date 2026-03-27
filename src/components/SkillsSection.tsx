import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillType = {
  name: string;
  level: number; // 0-5
}

type SkillGroupType = {
  category: string;
  items: SkillType[];
}

const SEGMENTS = 5;

const SkillBar = ({ name, level }: SkillType) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const filled = level;

  return (
    <div ref={ref} className="flex items-center justify-between gap-3">
      <span className="font-display text-xs text-foreground">{name}</span>
      <div className="flex gap-1 shrink-0">
        {Array.from({ length: SEGMENTS }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-5 h-1.5 rounded-sm ${i < filled ? "bg-primary" : "bg-secondary"}`}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.07 }}
            style={{ transformOrigin: "left" }}
          />
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills: SkillGroupType[] = [
    {
      category: "Backend",
      items: [
        { name: "PHP", level: 5 },
        { name: "Laravel", level: 5 },
        { name: "MySQL", level: 5 },
        { name: "REST APIs", level: 5 },
        { name: "CodeIgniter", level: 4 },
        { name: "NodeJs", level: 3 },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "JavaScript", level: 5 },
        { name: "React", level: 5 },
        { name: "TypeScript", level: 5 },
        { name: "Tailwind CSS", level: 4 },
        { name: "HTML/CSS", level: 5 },
        { name: "React Native", level: 3 },
        { name: "jQuery", level: 5 },
        { name: "Bootstrap", level: 4 },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Git", level: 4 },
        { name: "AWS", level: 3 },
      ],
    },
    {
      category: "Ferramentas",
      items: [
        { name: "VS Code", level: 5 },
        { name: "Postman", level: 4 },
        { name: "Composer", level: 5 },
        { name: "NPM", level: 5 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm mb-2">{">"} skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Tecnologias & Habilidades
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="font-display text-sm text-primary mb-5"># {group.category}</h3>
              <div className="space-y-3">
                {group.items.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
