# 📖 Guide : Comment Modifier Chaque Section du Portfolio

Ce guide explique comment ajouter, modifier ou supprimer des informations dans chaque section du site portfolio.

---

## 📌 Table des Matières

1. [Accueil (Hero)](#accueil-hero)
2. [À propos (About)](#à-propos-about)
3. [Projets (Projects)](#projets-projects)
4. [Expériences Professionnelles (Experience)](#expériences-professionnelles-experience)
5. [Compétences & Certifications (Skills)](#compétences--certifications-skills)
6. [Formation (Education)](#formation-education)
7. [Contact (Contact)](#contact-contact)

---

## 🏠 Accueil (Hero)

**Fichier**: `src/sections/Hero.jsx`

### Modifier le texte principal
Cherchez cette ligne et modifiez le texte:
```jsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
  Créer des <span className="text-primary glow-text">solutions</span>
  <br />
  de cybersécurité
  <br />
  <span className="font-serif italic font-normal text-white">
    fiables.
  </span>
</h1>
```

### Modifier la description
```jsx
<p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
  Je m'appelle Samuel Saminathan — étudiant en cycle ingénieur à l'ISEP, spécialisé en cybersécurité. Je recherche une alternance (sept. 2026 – août 2028) en SOC, Pentest ou GRC pour renforcer mes compétences.
</p>
```

### Ajouter ou modifier les technologies
Cherchez l'objet `skills` au début du fichier:
```jsx
const skills = [
  "Python",
  "Java",
  "C",
  // Ajoutez ou supprimez des technologies ici
];
```

### Modifier la photo de profil
La photo doit être placée à `/public/profile-photo.jpg`. Remplacez l'image pour changer la photo.

### Ajouter un lien de médias sociaux
Modifiez le tableau des liens sociaux:
```jsx
{[
  { icon: Github, href: "https://github.com/votreusername" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/votrenom/" },
].map((social, idx) => (
  // ...
))}
```

---

## 👤 À propos (About)

**Fichier**: `src/sections/About.jsx`

### Modifier le titre
```jsx
<h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
  Protéger les systèmes,
  <span className="font-serif italic font-normal text-white">
    {" "}
    c'est ma passion.
  </span>
</h2>
```

### Modifier les paragraphes de description
Cherchez et modifiez les balises `<p>` dans la section `space-y-4`:
```jsx
<p>
  Je suis un étudiant passionné en cybersécurité...
</p>
```

### Modifier la citation
```jsx
<div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
  <p className="text-lg font-medium italic text-foreground">
    "La cybersécurité n'est pas une destination, mais un voyage continu..."
  </p>
</div>
```

### Modifier les points clés (highlights)
Au début du fichier, modifiez le tableau `highlights`:
```jsx
const highlights = [
  {
    icon: Code2,
    title: "Analyse de Sécurité",
    description: "Détection et analyse de menaces...",
  },
  // Ajoutez ou modifiez les points clés ici
];
```

---

## 🚀 Projets (Projects)

**Fichier**: `src/sections/Projects.jsx`

### Ajouter un nouveau projet
Modifiez le tableau `projects`:
```jsx
const projects = [
  {
    title: "Nom du Projet",
    description: "Description du projet...",
    image: "/projects/projectX.png",  // Mettre à jour le chemin de l'image
    tags: ["Tag1", "Tag2", "Tag3"],
    link: "https://lien-du-projet.com",
    github: "https://github.com/username/repo",
  },
  // ...
];
```

### Modifier le titre de la section
```jsx
<h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
  Projets qui
  <span className="font-serif italic font-normal text-white">
    {" "}
    font la différence.
  </span>
</h2>
```

### Ajouter des images de projets
1. Créez un dossier `public/projects/`
2. Placez vos images avec les noms `project1.png`, `project2.png`, etc.
3. Mettez à jour les chemins dans le tableau `projects`

---

## 💼 Expériences Professionnelles (Experience)

**Fichier**: `src/sections/Experience.jsx`

### Ajouter une nouvelle expérience
Modifiez le tableau `experiences`:
```jsx
const experiences = [
  {
    period: "Septembre 2026 — Août 2028",
    role: "Analyste Cybersécurité",
    company: "Nom de l'Entreprise",
    description: "Description de vos responsabilités...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    current: true,  // true si c'est votre poste actuel
  },
  // ...
];
```

### Modifier le titre de la section
```jsx
<h2 className="text-4xl md:text-5xl font-bold...">
  Expériences qui{" "}
  <span className="font-serif italic font-normal text-white">
    parlent d'elles-mêmes.
  </span>
</h2>
```

### Paramètres disponibles
- **period**: La période (ex: "2020 — 2022")
- **role**: Le titre du poste
- **company**: Le nom de l'entreprise
- **description**: La description détaillée
- **technologies**: Tableau des technologies utilisées
- **current**: `true` pour marquer comme poste actuel (affiche une animation pulsante)

---

## 🏆 Compétences & Certifications (Skills)

**Fichier**: `src/sections/Skills.jsx`

### Ajouter une certification
Modifiez le tableau `certifications`:
```jsx
certifications: [
  { 
    name: "Nom de la Certification", 
    level: "Détail (ex: Niveau C1)",
    pdfPath: "/assets/certifications/nom-du-pdf.pdf"  // null si pas de PDF
  },
  // ...
];
```

### Ajouter un fichier PDF de certification
1. Créez un dossier `public/assets/certifications/`
2. Placez votre PDF du certificat
3. Mettez à jour le chemin `pdfPath` dans le tableau

### Modifier les compétences techniques
```jsx
technical: [
  {
    category: "Cybersécurité",
    skills: ["Wireshark", "Suricata", "Wazuh", ...],
  },
  {
    category: "Développement",
    skills: ["Python", "Java", "C", ...],
  },
  // ...
];
```

### Modifier les langues
```jsx
languages: [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "Niveau C1 (Courant)" },
  // Ajoutez vos langues ici
];
```

### Modifier les soft skills
```jsx
softSkills: [
  "Esprit analytique",
  "Rigueur",
  "Communication",
  // Ajoutez les vôtres ici
];
```

---

## 🎓 Formation (Education)

**Fichier**: `src/sections/Education.jsx`

### Ajouter une formation
Modifiez le tableau `educationData`:
```jsx
{
  degree: "Diplôme ou Cursus",
  school: "Nom de l'établissement",
  period: "2025 — 2028",
  description: "Description du programme...",
  highlights: ["Point 1", "Point 2", "Point 3"],
}
```

### Ajouter une expérience (projets, stages)
Modifiez le tableau `experience`:
```jsx
{
  title: "Nom du Projet/Stage",
  period: "2024-2025",  // optionnel
  description: "Description de l'expérience...",
}
```

### Modifier les sections
- Ajoutez ou supprimez des formations dans `educationData`
- Ajoutez ou supprimez des expériences dans `experience`

---

## 📧 Contact (Contact)

**Fichier**: `src/sections/Contact.jsx`

### Modifier les informations de contact
```jsx
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "votre@email.com",
    href: "mailto:votre@email.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+33 6 XX XX XX XX",
    href: "tel:+33XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Ville, Pays",
    href: "#",
  },
];
```

### Modifier le texte d'introduction
```jsx
<h2 className="text-4xl md:text-5xl font-bold...">
  Parlons de votre{" "}
  <span className="font-serif italic font-normal text-white">
    projet.
  </span>
</h2>
```

### Modifier le message de disponibilité
```jsx
<p className="text-muted-foreground text-sm">
  Je suis actuellement ouvert à de nouvelles opportunités...
</p>
```

### Configuration EmailJS
Pour que le formulaire de contact fonctionne:
1. Allez sur [EmailJS](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Configurez un service d'email
4. Créez un template d'email
5. Ajoutez les variables d'environnement `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

---

## 🔄 Navigation (Navbar)

**Fichier**: `src/layout/Navbar.jsx`

### Modifier les liens de navigation
```jsx
const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expériences" },
  { href: "#skills", label: "Compétences" },
  { href: "#education", label: "Formation" },
  { href: "#contact", label: "Contact" },
];
```

### Modifier le logo
```jsx
<a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
  Samuel<span className="text-primary">.</span>  {/* Changez le texte ici */}
</a>
```

---

## 🔗 Pied de page (Footer)

**Fichier**: `src/layout/Footer.jsx`

### Modifier les liens sociaux
```jsx
const socialLinks = [
  { icon: Github, href: "https://github.com/votre-username", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/votre-profil/", label: "LinkedIn" },
];
```

### Modifier les liens du footer
```jsx
const footerLinks = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  // ...
];
```

### Modifier le texte de copyright
```jsx
<p className="text-sm text-muted-foreground mt-2">
  © {currentYear} Samuel Saminathan. Tous droits réservés.
</p>
```

---

## 📁 Structure des Fichiers Importants

```
public/
├── assets/
│   ├── cv.pdf                          # Votre CV
│   └── certifications/
│       ├── toeic.pdf                   # Certificat TOEIC
│       ├── voltaire.pdf                # Certificat Voltaire
│       └── security-plus.pdf           # Certificat CompTIA (optionnel)
├── projects/
│   ├── project1.png
│   ├── project2.png
│   ├── project3.png
│   └── project4.png
└── profile-photo.jpg                   # Votre photo de profil

src/
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── layout/
│   ├── Navbar.jsx
│   └── Footer.jsx
└── App.jsx
```

---

## 💡 Conseils Pratiques

### 1. **Images de Projets**
- Utilisez des images de haute qualité (min. 800x600px)
- Compressez-les pour meilleure performance
- Formats recommandés: PNG, JPG, WebP

### 2. **PDFs de Certifications**
- Nommez-les clairement (ex: `toeic.pdf`)
- Placez-les dans `/public/assets/certifications/`
- Le site affichera "Pas disponible" si le PDF n'existe pas

### 3. **Styles et Animations**
- Les animations sont basées sur les classes Tailwind CSS
- `animate-fade-in`, `animation-delay-*` sont prédéfinis
- Modifiez `src/index.css` pour changer les animations

### 4. **Responsive Design**
- Le site est optimisé pour mobile, tablette et desktop
- Testez toujours sur différentes tailles d'écran

### 5. **Couleurs**
- Couleur primaire: Teal/Turquoise (utilisée pour les accents)
- Modifiez les variables CSS dans `src/index.css` pour changer le thème

---

## 🐛 Dépannage

### Le formulaire de contact ne fonctionne pas
- Vérifiez les variables d'environnement EmailJS
- Assurez-vous que le service EmailJS est activé
- Vérifiez la console pour les erreurs

### Les images ne s'affichent pas
- Vérifiez que les chemins sont corrects (ex: `/assets/cv.pdf`)
- Assurez-vous que les fichiers existent dans `/public/`
- Attendez que Vite recharge les assets

### Le PDF de certification ne s'affiche pas
- Vérifiez le chemin: `/assets/certifications/nom.pdf`
- Assurez-vous que le PDF existe dans le dossier correct
- Utilisez `null` pour `pdfPath` si pas de PDF

---

**Besoin d'aide?** Consultez la documentation de Vite, React ou contactez directement!
