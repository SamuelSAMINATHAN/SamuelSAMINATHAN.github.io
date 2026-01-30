import { GraduationCap, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Cycle Ingénieur - 1ère année",
    school: "ISEP",
    period: "2025 — 2028",
    description:
      "Spécialisation en cybersécurité, développement web, programmation Java, science des données, électronique et traitement du signal.",
    highlights: ["Cybersécurité", "Développement Web", "Science des données"],
  },
  {
    degree: "Classe préparatoire intégrée",
    school: "ISEP",
    period: "2023 — 2025",
    description:
      "Formation en cryptographie (RSA), Python, gestion de projet. Projets : encryptor AES-256 (C) et interface Blockly pour robot DJI (Python).",
    highlights: ["Cryptographie RSA", "Python", "Gestion de projet"],
  },
];

const experience = [
  {
    title: "Expérience associative - Garage ISEP",
    period: "2024-2025",
    description:
      "Participation régulière aux ateliers techniques du laboratoire pour l'approfondissement des compétences en tests d'intrusion et défense système.",
  },
  {
    title: "Formation pratique - TryHackMe",
    period: "En cours",
    description:
      "Apprentissage pratique (SOC Level 1, Pre-Security) couvrant les frameworks (MITRE ATT&CK, Kill Chain) et les outils d'analyse (Wireshark, Splunk, Zeek, Wazuh).",
  },
  {
    title: "Développeur Web (Stage)",
    period: "Inde",
    description:
      "Conception et développement d'un site vitrine. Technologies : HTML, CSS, JavaScript et intégration de contenu chez Cokomasala.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Formation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Cursus académique et{" "}
            <span className="font-serif italic font-normal text-white">
              projets pratiques.
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Formation Académique</h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                  </div>
                  <span className="text-sm text-primary font-medium whitespace-nowrap ml-4">
                    {edu.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{edu.description}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Experience & Projects */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Expériences</h3>
            </div>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 3) * 150}ms` }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold pr-3">
                    {exp.title}
                  </h4>
                  {exp.period && (
                    <span className="text-sm text-primary font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
