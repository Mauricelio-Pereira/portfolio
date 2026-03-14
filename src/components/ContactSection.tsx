import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, MessageCircle } from "lucide-react";

type ContactType = {
  whatsapp: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

const ContactSection = () => {

  const contacts:ContactType = {
    whatsapp: '85986425333',
    email: 'mauriceliopereira2404@gmail.com',
    github: 'https://github.com/Mauricelio-Pereira',
    linkedin: 'https://www.linkedin.com/in/mauricelio-pereira-silvestre-235b66247',
    location: 'Fortaleza-CE, Brasil',
  }

  function formatPhone(value:string){
    return value
      .replace(/\D/g, "") // remove tudo que não é número
      .replace(/^(\d{2})(\d)/g, "($1) $2") // (85)
      .replace(/(\d{5})(\d)/, "$1-$2") // 99999-9999
      .replace(/(-\d{4})\d+?$/, "$1"); // limita
  };

  function removeProtocol(url: string){
    return url.replace(/(^\w+:|^)\/\/(www\.)?/, "");
  }

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm mb-2">{">"} contato</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-xl">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl"
        >
          <a
            href={`https://wa.me/55${contacts.whatsapp}`}
            target="_blank"
            className="flex items-center gap-3 bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all group"
          >
            <MessageCircle size={20} className="text-primary" />
            <div>
              <p className="font-display text-sm text-foreground group-hover:text-primary transition-colors">
                WhatsApp
              </p>
              <p className="text-muted-foreground text-xs">{formatPhone(contacts.whatsapp)}</p>
            </div>
          </a>

          <a
            href={`mailto:${contacts.email}`}
            className="flex items-center gap-3 bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all group"
          >
            <Mail size={20} className="text-primary" />
            <div>
              <p className="font-display text-sm text-foreground group-hover:text-primary transition-colors">Email</p>
              <p className="text-muted-foreground text-xs">{contacts.email}</p>
            </div>
          </a>

          <a
            href={contacts.github}
            target="_blank"
            className="flex items-center gap-3 bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all group"
          >
            <Github size={20} className="text-primary" />
            <div>
              <p className="font-display text-sm text-foreground group-hover:text-primary transition-colors">GitHub</p>
              <p className="text-muted-foreground text-xs">{removeProtocol(contacts.github)}</p>
            </div>
          </a>

          <a
            href={contacts.linkedin}
            target="_blank"
            className="flex items-center gap-3 bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all group"
          >
            <Linkedin size={20} className="text-primary" />
            <div>
              <p className="font-display text-sm text-foreground group-hover:text-primary transition-colors">LinkedIn</p>
              <p className="text-muted-foreground text-xs">{removeProtocol(contacts.linkedin)}</p>
            </div>
          </a>

          <div className="sm:col-span-2 flex items-center gap-3 bg-card rounded-xl p-5 border border-border">
            <MapPin size={20} className="text-primary" />
            <div>
              <p className="font-display text-sm text-foreground">Localização</p>
              <p className="text-muted-foreground text-xs">{contacts.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
