import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "DDOS Lab",
    description:
      "Simulation d'attaques (L3-L7) via Scapy et Metasploit sur réseau isolé (Kali, Metasploitable) avec détection en temps réel via l'IDS Suricata et le SIEM Wazuh.",
    image: "/projects/project1.png",
    tags: ["Suricata", "Wazuh", "Metasploit", "Scapy"],
    link: "https://github.com/SamuelSAMINATHAN/DDOS_Lab",
    github: "https://github.com/SamuelSAMINATHAN/DDOS_Lab",
  },
  {
    title: "Autoencoder-for-cybersecurity",
    description:
      "Ce projet implémente un Auto-Encoder ultra-léger servant de premier filtre dans une architecture de détection d'intrusions (IDS). L'objectif est de réduire la charge d'un modèle plus complexe (GNN) en éliminant le trafic trivialement normal.",
    image: "/projects/project2.png",
    tags: ["Python", "Autoencoder", "Machine Learning", "IDS"],
    link: "https://github.com/SamuelSAMINATHAN/Autoencoder-for-cybersecurity.git",
    github: "https://github.com/SamuelSAMINATHAN/Autoencoder-for-cybersecurity.git",
  },
  {
    title: "GNN for cyber",
    description:
      "Ce projet implémente un système de détection d'anomalies basé sur les Graph Neural Networks (GNN) pour identifier les comportements malveillants dans les processus système. Le modèle analyse les relations entre les processus pour détecter les attaques potentielles.",
    image: "/projects/project3.png",
    tags: ["Python", "GNN", "Deep Learning", "Cybersecurity"],
    link: "https://github.com/SamuelSAMINATHAN/GNN.git",
    github: "https://github.com/SamuelSAMINATHAN/GNN.git",
  },
  {
    title: "Portfolio en java",
    description:
      "BoursoBank est une application JavaFX robuste conçue pour la gestion et le suivi en temps réel de portefeuilles d'actifs financiers, incluant les actions et les crypto-monnaies. L'application offre une interface moderne pour visualiser la répartition des actifs, suivre l'évolution historique de la valeur du portefeuille et gérer plusieurs devises.",
    image: "/projects/project4.png",
    tags: ["Java", "JavaFX", "Finance", "Portfolio"],
    link: "https://github.com/SamuelSAMINATHAN/Portfolio-in-java.git",
    github: "https://github.com/SamuelSAMINATHAN/Portfolio-in-java.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Projets en Vedette
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projets qui
            <span className="font-serif italic font-normal text-white">
              {" "}
              font la différence.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Une sélection de mes travaux récents, des applications web complexes aux outils innovants qui résolvent des problèmes réels en cybersécurité.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
