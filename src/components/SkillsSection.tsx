import { motion } from "framer-motion";

type SkillType = {
  category: string;
  items: string[];
}

const SkillsSection = () => {
  const skills:SkillType[] = [
    { category: "Backend", items: ["PHP", "Laravel", "CodeIgniter", "NodeJs", "MySQL", "REST APIs"] },
    { category: "Frontend", items: ["JavaScript", "TypeScript", "React", "React Native", "jQuery", "Tailwind CSS", "Bootstrap", "HTML/CSS"] },
    { category: "DevOps", items: [/*"Docker",*/ "Git", "AWS"] },
    { category: "Ferramentas", items: ["VS Code", "Postman", "Composer", "NPM"] },
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
              <h3 className="font-display text-sm text-primary mb-4"># {group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-display text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
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
