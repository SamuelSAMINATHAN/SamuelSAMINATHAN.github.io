import { Award, Code2, Languages, FileText, X } from "lucide-react";
import { useState } from "react";

const skillsData = {
  certifications: [
    { name: "TOEIC : 945/990", level: "Niveau C1", pdfPath: "/assets/certifications/toeic.pdf" },
    { name: "Certificat Voltaire : 707/1000", level: "Orthographe", pdfPath: "/assets/certifications/certif-voltaire.pdf" },
    { name: "CompTIA Security+", level: "En préparation", pdfPath: null },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Niveau C1 (Courant)" },
    { name: "Allemand", level: "Niveau B1" },
  ],
  technical: [
    {
      category: "Cybersécurité",
      skills: ["Wireshark", "Suricata", "Wazuh", "pfsense", "Kali Linux", "VirtualBox"],
    },
    {
      category: "Développement",
      skills: ["Python", "Java", "C", "SQL"],
    },
    {
      category: "Scripting",
      skills: ["Bash", "PowerShell"],
    },
  ],
  softSkills: [
    "Esprit analytique",
    "Rigueur",
    "Communication",
    "Adaptabilité",
    "Travail en équipe",
    "Curiosité"
  ],
};

export const Skills = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Compétences
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Expertise{" "}
            <span className="font-serif italic font-normal text-white">
              technique et certifications.
            </span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Technical & Languages */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Compétences Techniques</h3>
              </div>
              <div className="space-y-4">
                {skillsData.technical.map((group, idx) => (
                  <div
                    key={idx}
                    className="glass p-4 rounded-2xl animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                    <h4 className="font-medium text-primary mb-3">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground border border-border/50 hover:border-primary/50 hover:text-primary transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Languages className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Langues</h3>
              </div>
              <div className="space-y-3">
                {skillsData.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="glass p-4 rounded-2xl flex justify-between items-center animate-fade-in"
                    style={{ animationDelay: `${(idx + 4) * 100}ms` }}
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certifications & Soft Skills */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {skillsData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="glass p-4 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all animate-fade-in"
                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.level}</p>
                      </div>
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="ml-3 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all"
                        title={cert.pdfPath ? "Voir le PDF" : "Non disponible"}
                      >
                        <FileText className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="glass p-6 rounded-2xl space-y-4 animate-fade-in animation-delay-500">
                <div className="flex flex-wrap gap-3">
                  {skillsData.softSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30 hover:border-primary/70 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card rounded-t-2xl">
                <h3 className="text-xl font-semibold">{selectedCert.name}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-surface rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                {selectedCert.pdfPath ? (
                  <div className="space-y-4">
                    <iframe
                      src={selectedCert.pdfPath}
                      className="w-full h-[600px] rounded-lg border border-border"
                      title={selectedCert.name}
                    />
                    <a
                      href={selectedCert.pdfPath}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      Télécharger le PDF
                    </a>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <FileText className="w-16 h-16 text-muted-foreground/30 mb-4" />
                    <p className="text-lg font-medium text-muted-foreground">
                      Pas disponible
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Le PDF de cette certification n'a pas été téléchargé.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
