Traduire le site en français. 

Rajouter mes propres expériences que l,on peut voir dans le code latex suivant : 


\begin{document}

\name{\Large Analyste Cyber (SOC / Pentest / GRC) \\ Alternance - 2 ans (Sept. 2026 – Août 2028) }
\tagline{Étudiant en cycle ingénieur à l'Isep, je recherche une alternance de deux ans (septembre 2026 – août 2028) spécialisée en cybersécurité.}
%% You can add multiple photos on the left or right
\photoL{3.5cm}{photo}
% \photoL{2.5cm}{Yacht_High,Suitcase_High}

\personalinfo{%
  % Not all of these are required!
  \email{samuel.saminathan@eleve.isep.fr}
  \phone{+33 6 18 66 66 60}
  \linkedin{in/samuel-saminathan} \\

  \medskip
  
  \faLink\ samuelsaminathan.github.io}
  %% You can add your own arbitrary detail with
  %% \printinfo{symbol}{detail}[optional hyperlink prefix]
  % \printinfo{\faPaw}{Hey ho!}[https://example.com/]

  %% Or you can declare your own field with
  %% \NewInfoFiled{fieldname}{symbol}[optional hyperlink prefix] and use it:
  % \NewInfoField{gitlab}{\faGitlab}[https://gitlab.com/]
  % \gitlab{your_id}
  %%
  %% For services and platforms like Mastodon where there isn't a
  %% straightforward relation between the user ID/nickname and the hyperlink,
  %% you can use \printinfo directly e.g.
  % \printinfo{\faMastodon}{@username@instace}[https://instance.url/@username]
  %% But if you absolutely want to create new dedicated info fields for
  %% such platforms, then use \NewInfoField* with a star:
  % \NewInfoField*{mastodon}{\faMastodon}
  %% then you can use \mastodon, with TWO arguments where the 2nd argument is
  %% the full hyperlink.
  % \mastodon{@username@instance}{https://instance.url/@username}





\makecvheader
%% Depending on your tastes, you may want to make fonts of itemize environments slightly smaller
% \AtBeginEnvironment{itemize}{\small}

%% Set the left/right column width ratio to 6:4.
\columnratio{0.4}

% Start a 2-column paracol. Both the left and right columns will automatically
% break across pages if things get too long.
  \medskip
  

\begin{paracol}{2}


\cvsection{Formation}

\cvevent{Cycle Ingénieur (1ère année)}{Isep}{2025 -- 2028}{}
\textbf{Cybersécurité}, développement web, programmation \textbf{Java}, \textbf{science des données}, électronique et traitement du signal.


\divider

\cvevent{Classe préparatoire intégrée}{Isep}{2023 -- 2025}{}
\textbf{Cryptographie (RSA)}, \textbf{Python}, gestion de projet. Projets : encryptor AES-256 (C) et interface Blockly pour robot DJI (Python).

\divider

\cvevent{Expérience associative Garage Isep}{}{24-25}{}
Participation régulière aux ateliers techniques du laboratoire pour l'approfondissement des compétences en tests d'intrusion et défense système.





\cvsection{Compétences}

\begin{itemize}[label=\textcolor{black}{$\bullet$}]

    \item \textbf{Certifications :} 
    \begin{itemize}[label=$\circ$]
        \item \textbf{TOEIC : 945/990} (Niveau C1).
        \item \textbf{Certificat Voltaire : 707/1000} (Orthographe).
        \item \textbf{CompTIA Security+} (En préparation).
    \end{itemize}

    \item \textbf{Langues :} 
    \begin{itemize}[label=$\circ$]
        \item \textbf{Français :} Langue maternelle.
        \item \textbf{Anglais :} Niveau C1 (Courant).
        \item \textbf{Allemand :} Niveau B1.
    \end{itemize}

    \item \textbf{Informatique :} 
    \begin{itemize}[label=$\circ$]
        \item \textbf{Cybersécurité :} Wireshark, Suricata, Wazuh, pfsense, Kali Linux, Virtualbox.
        \item \textbf{Développement :} Python, Java, C, SQL.
        \item \textbf{Scripting :} Bash, PowerShell.
    \end{itemize}

\end{itemize}

\divider

\textbf{Soft Skills :} 
\parbox{\linewidth}{
  \cvtag{Esprit analytique} \cvtag{Rigueur} \cvtag{Communication} 
  \cvtag{Adaptabilité} \cvtag{Travail en équipe}
}


%% Yeah I didn't spend too much time making all the
%% spacing consistent... sorry. Use \smallskip, \medskip,
%% \bigskip, \vspace etc to make adjustments.


\switchcolumn



\cvsection{Expérience professionnelle}

\cvevent{Développeur Web (Stage)}{Cokomasala}{}{Inde}
\begin{itemize}
    \item Conception et développement d'un site vitrine pour l'entreprise.
    \item Technologies : HTML, CSS, JavaScript et intégration de contenu.
\end{itemize}

\divider

\cvevent{Guichetier Western Union}{TTEUROPE Paris}{Février 2022 -- Août 2023}{}
\begin{itemize}
    \item Traitement des transferts internationaux via la plateforme Western Union
    \item Manipulation de données sensibles, gestion d’incidents opérationnels
\end{itemize}


\cvsection{Projets cybersécurité}

\cvevent{Formation en cybersécurité -- TryHackMe}{https://tryhackme.com/p/Samuel404}{}{}
Apprentissage pratique (SOC Level 1, Pre-Security) couvrant les frameworks (MITRE ATT\&CK, Kill Chain) et l'utilisation d'outils d'analyse (Wireshark, Splunk, Zeek, Wazuh, SIEM, Forensics).

\divider

\cvevent{Laboratoire Simulation DDoS \& Détection (SIEM/IDS)}{}{}{}
Simulation d'attaques (L3-L7) via Scapy et Metasploit sur réseau isolé (Kali, Metasploitable) avec détection en temps réel via l'IDS Suricata et le SIEM Wazuh.

\divider

\cvevent{Système d'Authentification Multi-Facteur (MFA) Fullstack}{}{}{}
Développement d'une application sécurisée (Node.js, React, MongoDB) intégrant TOTP via Speakeasy et authentification par QR Code (Google Authenticator).

\divider
"Développement d'un modèle de Machine Learning (Random Forest) capable d'identifier des tentatives d'intrusion réseau avec une précision de 98% sur le dataset CIC-IDS2017."



\cvsection{Centres d'intérêt}

\begin{itemize}
    \item \textbf{Développement de jeux vidéo :} Création de projets personnels sous Godot.
    \item \textbf{Culture :} Cinéma classique (Akira Kurosawa), lecture de mangas et veille sur les nouvelles technologies.
    \item \textbf{Loisirs :} Randonnée, dessin amateur et passion pour l'analyse du football.
\end{itemize}

\medskip

Changer le layout du site pour lui : 

Accueil 

Projets 

Expériences professionel : Ton parcours concret.

Compétences & Certifications : Ce que tu maîtrises techniquement.

Formation : Ton cursus académique.

Contact 

ajouter mes liens : https://github.com/SamuelSAMINATHAN

[in/samuel-saminathan](https://www.linkedin.com/in/samuel-saminathan/)

mon cv est dans assets , les biutons actuellemennt ne renvoie  rien, programme les pour qu'il renvoie quelque chose, par exemple le bouton téléchargé, le CV doit permettre de télécharger le CV qui est dans assets