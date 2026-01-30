import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Analyse de Sécurité",
    description:
      "Détection et analyse de menaces, diagnostic de vulnérabilités et recommandations de sécurisation.",
  },
  {
    icon: Rocket,
    title: "Tests d'Intrusion",
    description:
      "Identification des failles de sécurité avant qu'elles ne soient exploitées par des attaquants.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Travail d'équipe dans les opérations de sécurité et incidents.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Apprentissage continu des dernières menaces et meilleures pratiques en cybersécurité.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                À Propos
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Protéger les systèmes,
              <span className="font-serif italic font-normal text-white">
                {" "}
                c'est ma passion.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Je suis un étudiant passionné en cybersécurité, actuellement en cycle ingénieur à l'ISEP. Avec une base solide en informatique et une spécialisation croissante en sécurité des systèmes, je me prépare à relever les défis complexes de la cybersécurité moderne.
              </p>
              <p>
                Mon expertise couvre les opérations de sécurité (SOC), les tests d'intrusion (Pentest) et la gouvernance des risques (GRC). Je maîtrise des outils clés comme Wireshark, Suricata, Wazuh et Kali Linux, et je continue d'approfondir mes connaissances à travers des certifications et des projets pratiques.
              </p>
              <p>
                Mon objectif est de contribuer à la sécurité informatique des organisations en identifiant les risques avant qu'ils ne deviennent des menaces réelles. Je suis actuellement à la recherche d'une alternance pour mettre ces compétences en pratique.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "La cybersécurité n'est pas une destination, mais un voyage continu d'apprentissage et d'amélioration. Mon rôle est d'être une barrière de protection face aux menaces numériques."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
