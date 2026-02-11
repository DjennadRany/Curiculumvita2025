import React from 'react';
import { motion } from 'framer-motion';
import experiences from '../data/experience.json';

const iconClass = 'experience-icon-svg';

const CalendarIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <rect x="3" y="4" width="14" height="13" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 8h14" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 2v4M13 2v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <path
      d="M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <path
      d="M7 5L3 10l4 5M13 5l4 5-4 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <path d="M3 17h14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="4" y="9" width="2.5" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8.75" y="6" width="2.5" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13.5" y="3" width="2.5" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

import bnpLogo from '../assets/logos/bnp-logo.jpg';
import helloBankLogo from '../assets/logos/hello-bank-logo.png';
import ibmLogo from '../assets/logos/IBM_logo.png';
import edfLogo from '../assets/logos/Logo-EDF.png';
import ministereLogo from '../assets/logos/logo-ministere-des-armees.png';
import ventePriveeLogo from '../assets/logos/VP-logo.png';
import lbdLogo from '../assets/logos/lbd_logo.jpg';

const logoMap = {
  'BNP PARIBAS — BDDF ENTREPRISE (Retail)': bnpLogo,
  'BNP PARIBAS — HELLO BANK': helloBankLogo,
  'EDF — Retail': edfLogo,
  'IBM FRANCE LAB — CRÉDIT AGRICOLE': ibmLogo,
  'MINISTÈRE DES ARMÉES': ministereLogo,
  'VENTE-PRIVEE.COM': ventePriveeLogo,
  'LA BROSSE & DUPONT': lbdLogo,
};

// Période design & direction artistique 2010–2013, ajoutée à la timeline principale
const designExperience = {
  company: 'Design & Direction Artistique',
  role: 'Graphiste / Directeur Artistique / Chargé de Communication',
  dates: '2010 – 2013',
  location: 'France – New York – Londres',
  description:
    'Graphiste / Directeur Artistique / Chargé de Communication, France – New York – Londres, 2010 – 2013, création d’identités visuelles, conception de supports print et digitaux, direction artistique de campagnes de communication, relation client et gestion de projet créatif de bout en bout, production et diffusion d’affiches dans l’espace public parisien, participation à des projets artistiques dont l’exposition Jardin Cristal, production de supports pour communication événementielle, recueil des besoins clients, traduction des briefs en concepts graphiques, suivi production et validation, coordination imprimeurs et prestataires, expériences Atoutprint, JLA Communication, P.E.D Pub Enseigne & Design, HypeJean, compétences UX, hiérarchie visuelle, ergonomie, communication client et gestion budgétaire.',
  techTags: ['Design graphique', 'Direction artistique', 'Communication visuelle', 'Print', 'Digital'],
};

const experienceList = [...experiences.experiences, designExperience];

// Contenu narratif structuré par mission (construit à partir du texte complet cv2026_v6_master_ready_for_dev.txt)
const structuredByCompany = {
  'MINISTÈRE DES ARMÉES': {
    context:
      "Contexte institutionnel classifié Secret Défense, avec un système d'information hautement sensible soumis à de fortes contraintes de sécurité, de traçabilité, de conformité réglementaire et de continuité de service. Mission inscrite dans un environnement public exigeant, avec de multiples parties prenantes opérationnelles et techniques, et une forte attente de formalisation documentaire, de cadrage et de pilotage rigoureux des évolutions.",
    positioning:
      "Positionnement en tant que Technical Project Manager référent côté delivery technique, interface entre les équipes métiers, les équipes SI internes, la DSI et les prestataires externes. Rôle décisionnel sur les choix de cadrage technique, la priorisation des travaux, la validation des livrables et l'arbitrage des risques, avec un pilotage de la gouvernance projet et une animation des comités et instances de reporting.",
    responsibilities: [
      "Piloter le cadrage technique, le recueil et la structuration des besoins métiers, et la rédaction des spécifications et notes de cadrage en environnement classifié.",
      "Organiser et animer la gouvernance projet, les comités et le reporting auprès des parties prenantes techniques et métiers.",
      "Suivre les risques, les dépendances inter-équipes et la qualité des livrables, en lien avec les équipes internes et les prestataires externes.",
      "Planifier les phases projet, orchestrer les jalons clés et superviser les recettes fonctionnelles et techniques.",
      "Valider la conformité des solutions avant mise en production et garantir l’intégration des exigences de sécurité dans tout le cycle de delivery.",
      "Adapter et faire vivre une méthodologie Agile compatible avec les contraintes réglementaires et de sécurité propres au contexte Défense.",
    ],
    impact:
      "Sécurisation du cycle de delivery dans un environnement classifié, réduction des risques opérationnels grâce à une gouvernance renforcée et une meilleure traçabilité, et structuration durable des pratiques projets autour d’un cadrage technique robuste et d’une intégration systématique des contraintes de sécurité.",
  },
  'BNP PARIBAS — BDDF ENTREPRISE (Retail)': {
    context:
      "Contexte de banque de détail B2B sur le périmètre MaBanqueEntreprise transactionnel et informationnel, incluant Campagne Transformation Digitale, Arval et Transcash, dans un environnement bancaire critique interconnecté au SI central. Organisation multi-équipes avec 5 développeurs fullstack Retail, 8 développeurs back-end DSI, TMA externalisée d’environ 50 personnes au Maroc, et forte exposition aux enjeux de conformité, d’UX et de performance sur des plateformes à fort trafic.",
    positioning:
      "Positionnement hybride de Technical Project Manager et Technical Lead, garant de la trajectoire technique des produits, interface entre PO, équipes SI, UX/UI, sécurité, exploitation et TMA. Rôle décisionnel sur les choix d’architecture front et back, la migration vers AEM, la stratégie CI/CD, l’outillage qualité et la validation technique des livraisons avant qualification et mise en production.",
    responsibilities: [
      "Concevoir les maquettes techniques, cadrer les incréments et orchestrer la migration CMS d’Autonomy vers Adobe Experience Manager (AEM) avec configuration DAM, ClientLibs, Dispatcher, Apache Sling, OSGi et HTL.",
      "Piloter l’architecture applicative basée sur un Servlet container, des services REST Java Spring Boot et PostgreSQL RDS, et encadrer les développements Angular 12 et React sur le front.",
      "Organiser et sécuriser les environnements Dev, Qualif et Production, valider les pushes en production et coordonner DSI et TMA sur l’industrialisation des livraisons.",
      "Mettre en place et gouverner les pipelines CI/CD Jenkins et GitLab CI, l’infrastructure Docker et Terraform, et les standards de qualité SonarQube, ESLint, Jest, Mocha et Chai.",
      "Optimiser les performances (cache, ClientLibs, assets), structurer le reporting via Google Analytics, Tag Manager et Data Studio, et alimenter une démarche continue de veille et d’analyse de faisabilité technique.",
      "Animer les rituels Agile Scrum/Kanban sur des sprints de 3 semaines, structurer le backlog et coordonner les acteurs métier et techniques autour d’objectifs de delivery partagés.",
    ],
    impact:
      "Gain de productivité de l’ordre de +20 %, réduction des délais de livraison d’environ -30 % et des délais de déploiement d’environ -40 %, fiabilisation des mises en production et amélioration de la robustesse des parcours MaBanqueEntreprise, tout en renforçant la lisibilité des performances et du pilotage grâce à des dashboards consolidés.",
  },
  'EDF — Retail': {
    context:
      "Contexte de refonte et d’évolution de l’espace client edf.fr, plateforme grand public à fort trafic intégrée au SI EDF, au sein d’une DSI d’environ 50 personnes. Enjeux forts de disponibilité, de performance et d’expérience utilisateur, avec un besoin d’aligner les parcours clients sur les objectifs business et les contraintes d’intégration au SI existant.",
    positioning:
      "Positionnement de Chef de Projet / Front-End Developer, à la fois en coordination et en exécution front-end, en lien direct avec les équipes design, les équipes back-end et les interlocuteurs DSI. Rôle clé sur la conception UX, l’intégration AEM et la qualité des livraisons front dans un contexte Agile Scrum/Kanban à itérations courtes.",
    responsibilities: [
      "Assurer la coordination front-end avec les équipes design et back-end pour garantir la cohérence fonctionnelle et technique de l’espace client.",
      "Concevoir et développer les interfaces en HTML5, CSS3, JavaScript ES6 et Angular 5, en tenant compte des contraintes de performance et d’accessibilité.",
      "Intégrer les composants et gabarits dans Adobe Experience Manager (AEM) en respectant les standards du SI EDF.",
      "Gérer le backlog Jira et contribuer activement aux cérémonies Agile Scrum/Kanban sur des sprints de 2 semaines.",
      "Mettre en place et faire respecter les standards de qualité et de tests automatisés (ESLint, SonarQube).",
      "Collaborer avec les équipes SI pour accompagner les mises en production et le suivi des évolutions sur l’espace client.",
    ],
    impact:
      "Réduction mesurée d’environ 15 % du temps de chargement des pages critiques, amélioration notable de l’expérience utilisateur sur les parcours majeurs, et montée en maturité des pratiques front-end et qualité au sein de l’équipe projet.",
  },
  'BNP PARIBAS — HELLO BANK': {
    context:
      "Contexte de banque en ligne grand public avec une forte exigence UX pour les parcours de demande de crédit immobilier en ligne et le projet Servicime. Organisation d’environ 8 développeurs fullstack par projet, ~20 développeurs côté Retail, dans un environnement intégrant back-end Laravel, CMS Syphonie et un socle front moderne.",
    positioning:
      "Positionnement de Front-End / Fullstack Developer au cœur de l’équipe projet, en interaction quotidienne avec PO, UX/UI, back-end et Scrum Master. Rôle opérationnel fort sur les développements front et back, la qualité des intégrations, le respect des contraintes de performance et l’alignement des livraisons avec le rythme des sprints.",
    responsibilities: [
      "Développer des fonctionnalités front-end en Angular 5, AngularJS, HTML5, CSS3, SASS et JavaScript ES6+ pour les parcours crédit immobilier et Servicime.",
      "Contribuer aux développements back-end sur Laravel et à l’intégration via le CMS Syphonie, en cohérence avec les APIs et services existants.",
      "Intégrer des APIs JSON et concevoir des interfaces dynamiques optimisées pour la conversion et la clarté des parcours.",
      "Mettre en place et maintenir des pipelines CI/CD Jenkins et GitLab CI, et assurer le versioning GitLab / GitHub.",
      "Respecter et promouvoir les standards de qualité (Jest, SonarQube) dans le cadre de sprints Scrum de 3 semaines.",
      "Concevoir et développer des éléments d’interface structurants, comme le footer Hello Bank et un slider interactif avec icônes dynamiques.",
    ],
    impact:
      "Livraison de 100 % des fonctionnalités prévues dans les délais, amélioration d’environ +20 % des interactions utilisateurs sur les parcours clés et réduction d’environ -25 % des temps de chargement, contribuant à une perception plus fluide et plus moderne de l’expérience Hello Bank.",
  },
  'IBM FRANCE LAB — CRÉDIT AGRICOLE': {
    context:
      "Contexte de refonte des sites Crédit Agricole Prospect, Pro et Entreprise dans un environnement bancaire structuré, avec une équipe d’environ 30 développeurs basée à Lille et une collaboration étroite avec les équipes Retail à Paris. Projet à forte dimension UX/UI et intégration AEM, avec des enjeux d’image, de cohérence de marque et de performance.",
    positioning:
      "Positionnement de Chef de Projet Front-End / Intégrateur AEM / UX/UI, référent sur la cohérence des maquettes, le découpage des composants et la préparation des incréments pour l’intégration AEM. Rôle de coordination front-end sur les livraisons, en lien avec les équipes design, les développeurs et les responsables de domaine côté client.",
    responsibilities: [
      "Concevoir des maquettes HTML, CSS, SASS, JavaScript ES6+ et jQuery alignées avec l’identité Crédit Agricole et les besoins fonctionnels.",
      "Découper les interfaces en composants réutilisables et prêts pour intégration sous AEM.",
      "Préparer les incréments AEM en garantissant la cohérence UX/UI et la maintenabilité des gabarits.",
      "Coordonner les livraisons front et valider les éléments avant intégration dans les environnements AEM.",
      "Collaborer avec les équipes sur AEM Dispatcher, Apache HTTP Server, Jira et Confluence pour assurer un delivery fluide.",
      "Veiller au respect des exigences d’accessibilité (WCAG) et à l’alignement des parcours sur les standards du groupe.",
    ],
    impact:
      "Augmentation d’environ 20 % de l’engagement utilisateur sur les nouveaux sites, amélioration de la cohérence UX/UI entre les différentes cibles (Prospect, Pro, Entreprise) et solidification du socle front pour l’intégration AEM à grande échelle.",
  },
  'VENTE-PRIVEE.COM': {
    context:
      "Contexte e-commerce à très fort volume au sein du département Production des Ventes, avec une équipe d’environ 8 développeurs / intégrateurs en charge de la création et de la maintenance de fiches produits pour des campagnes à forte pression temporelle. Environnement basé sur un CMS interne propriétaire, avec une exigence élevée de débit de production et de qualité visuelle.",
    positioning:
      "Positionnement d’Intégrateur Web au cœur de la Production des Ventes, en support direct des équipes marketing et opérationnelles. Rôle clé sur la fiabilité des intégrations, la correction rapide des erreurs et l’optimisation des modèles pour absorber les volumes de campagnes.",
    responsibilities: [
      "Créer, intégrer et maintenir les fiches produits en HTML5, CSS3, JavaScript et jQuery pour des ventes à fort trafic.",
      "Exploiter le CMS interne propriétaire pour industrialiser la mise en ligne de campagnes et de catalogues.",
      "Assurer une cellule de débogage réactive et corriger rapidement les erreurs détectées en production.",
      "Mettre en place et utiliser des automatisations de correction massive allant jusqu’à 5000 pages produits.",
      "Optimiser la structure des modèles et des gabarits pour améliorer la performance et la cohérence des fiches.",
      "Collaborer avec les équipes marketing et de production pour garantir la qualité des contenus mis en ligne.",
    ],
    impact:
      "Augmentation de la robustesse et de la productivité de la Production des Ventes, réduction du temps de correction des erreurs sur de grands volumes de pages et amélioration de la cohérence visuelle et structurelle des fiches produits sur un périmètre à forte volumétrie.",
  },
  'LA BROSSE & DUPONT': {
    context:
      "Contexte de groupe industriel multi-marques fondé en 1845, avec un parc de sites web à gérer et à faire évoluer pour des besoins marketing, corporate et produits. Enjeux de visibilité, de cohérence de marque et de performance, dans un environnement mêlant équipes marketing, design et technique.",
    positioning:
      "Positionnement de Chef de Projet Digital / Webmaster, responsable de la gestion technique du parc de sites et du lien entre besoins métiers, design et mise en œuvre technique. Rôle central sur la traduction des cahiers des charges en spécifications et sur la planification des évolutions.",
    responsibilities: [
      "Recueillir les besoins métiers et cadrer les demandes au travers de cahiers des charges et de spécifications techniques.",
      "Planifier les évolutions des sites et prioriser les travaux en fonction des enjeux business et techniques.",
      "Concevoir et intégrer des interfaces HTML5, CSS3 et JavaScript adaptées aux différentes marques du groupe.",
      "Personnaliser et administrer des sites WordPress et Joomla pour répondre à des besoins spécifiques.",
      "Développer des fonctionnalités dédiées et optimiser le SEO on-page et les performances front.",
      "Coordonner les équipes marketing, design et technique lors des déploiements et de la gestion des contenus.",
    ],
    impact:
      "Amélioration de la performance et de la lisibilité du parc de sites, renforcement du SEO on-page et fluidification des échanges entre marketing, design et technique, permettant un meilleur alignement des évolutions digitales avec la stratégie de marque du groupe.",
  },
  WHOSNET: {
    context:
      "Contexte d’agence et de projets clients variés, avec des besoins riches en intégration front-end, développement back-end et personnalisation de CMS, dans un environnement PME orienté delivery et réactivité. Le périmètre couvre autant la conception de nouveaux sites que la maintenance et l’optimisation de plateformes existantes.",
    positioning:
      "Positionnement de Webmaster / Développeur Fullstack, en charge de la prise en main technique des projets de bout en bout : intégration front, développement PHP/MySQL, personnalisation WordPress et déploiement Prestashop. Rôle transverse couvrant le support client, la maintenance corrective et l’optimisation continue.",
    responsibilities: [
      "Développer des interfaces front-end en HTML5, CSS3 et JavaScript en cohérence avec les maquettes et attentes clients.",
      "Concevoir et maintenir des back-ends PHP avec bases MySQL sur des périmètres applicatifs variés.",
      "Intégrer des templates et maquettes, puis personnaliser des sites WordPress et déployer des boutiques Prestashop.",
      "Gérer les thèmes, plugins et extensions, ainsi que la configuration de l’hébergement et les mises en production.",
      "Assurer la maintenance corrective, l’optimisation de la structure et de la performance des sites livrés.",
      "Fournir un support technique réactif aux clients et accompagner les évolutions de leurs plateformes.",
    ],
    impact:
      "Stabilisation et modernisation de plusieurs sites clients, amélioration de leurs performances techniques et de leur maintenabilité, tout en offrant un point de contact unique et fiable sur les sujets fullstack, de l’intégration jusqu’à la mise en production.",
  },
  'Design & Direction Artistique': {
    context:
      "Contexte de design graphique et direction artistique entre la France, New York et Londres de 2010 à 2013, avec une forte exposition à des projets créatifs, des environnements urbains et des attentes élevées en termes d’identité visuelle et de communication. Activité mêlant studios, agences et projets plus artistiques, avec une forte autonomie dans la gestion des missions et des livrables.",
    positioning:
      "Positionnement de Graphiste / Directeur Artistique / Chargé de Communication pilotant des projets de bout en bout : recueil du besoin, conception créative, direction artistique, suivi de production et coordination avec les prestataires. Rôle de conseil auprès des clients sur la hiérarchie visuelle, l’ergonomie et la cohérence des messages.",
    responsibilities: [
      "Concevoir et déployer des identités visuelles complètes et des univers graphiques cohérents pour différents clients.",
      "Créer des supports print et digitaux (affiches, visuels de campagne, supports événementiels, éléments web) adaptés aux territoires de marque.",
      "Assurer la direction artistique de campagnes de communication, de la définition des concepts à la validation finale.",
      "Organiser et suivre la production, coordonner imprimeurs et prestataires pour garantir qualité et respect des délais.",
      "Participer à des projets artistiques et culturels, dont l’exposition Jardin Cristal, et produire des affiches diffusées dans l’espace public parisien.",
      "Accompagner les clients dans la formalisation de leurs besoins, traduire les briefs en concepts graphiques concrets et soutenables budgétairement.",
    ],
    impact:
      "Renforcement de la maturité visuelle et UX, construction d’un socle solide en hiérarchie visuelle, ergonomie et communication client, qui alimente ensuite le positionnement senior sur des sujets front-end, AEM et pilotage de delivery en environnement critique.",
  },
};

const getStructuredContent = (exp) => {
  const base = structuredByCompany[exp.company] || structuredByCompany[exp.company?.trim()] || null;
  if (base) {
    return base;
  }
  // Fallback : utiliser la description telle quelle comme contexte unique
  return {
    context: exp.description || '',
    positioning: '',
    responsibilities: [],
    impact: '',
  };
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const AnimatedTimeline = () => {
  return (
    <div className="timeline" aria-label="Chronologie des expériences professionnelles">
      {experienceList.map((exp, index) => {
        const alignment = index % 2 === 0 ? 'left' : 'right';
        const { context, positioning, responsibilities, impact } = getStructuredContent(exp);

        return (
          <motion.div
            key={`${exp.company}-${exp.dates}`}
            className={`timeline-item ${alignment}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={itemVariants}
          >
            <article
              className="timeline-card"
              itemScope
              itemType="https://schema.org/JobPosting"
            >
              <header className="timeline-card-header">
                {logoMap[exp.company] && (
                  <div className="timeline-logo-box" aria-hidden="true">
                    <img src={logoMap[exp.company]} alt={exp.company} className="timeline-logo" />
                  </div>
                )}
                <div className="timeline-card-heading">
                  <h2 className="timeline-company" itemProp="hiringOrganization">
                    <span itemProp="name">{exp.company}</span>
                  </h2>
                  <h3 className="timeline-role" itemProp="title">
                    {exp.role}
                  </h3>
                  <div className="timeline-meta" aria-label="Période et localisation">
                    <span className="timeline-meta-item" itemProp="datePosted">
                      <span className="timeline-meta-icon" aria-hidden="true">
                        <CalendarIcon />
                      </span>
                      <span className="timeline-meta-text dates">{exp.dates}</span>
                    </span>
                    {exp.location && (
                      <span className="timeline-meta-item" itemProp="jobLocation">
                        <span className="timeline-meta-icon" aria-hidden="true">
                          <LocationIcon />
                        </span>
                        <span className="timeline-meta-text location" itemProp="address">
                          {exp.location}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </header>

              {context && (
                <section className="timeline-section context" aria-label="Contexte de la mission">
                  <h4 className="timeline-section-title">Contexte</h4>
                  <p className="timeline-section-text" itemProp="description">
                    {context}
                  </p>
                </section>
              )}

              {positioning && (
                <section className="timeline-section positioning" aria-label="Positionnement">
                  <h4 className="timeline-section-title">Positionnement</h4>
                  <p className="timeline-section-text">
                    {positioning}
                  </p>
                </section>
              )}

              {responsibilities.length > 0 && (
                <section className="timeline-section responsibilities" aria-label="Responsabilités principales">
                  <h4 className="timeline-section-title">Responsabilités</h4>
                  <ul className="timeline-responsibilities-list">
                    {responsibilities.map((item) => (
                      <li key={item} className="timeline-responsibility-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {impact && (
                <section className="timeline-section impact" aria-label="Impact et résultats">
                  <h4 className="timeline-section-title">Impact / Résultats</h4>
                  <p className="timeline-section-text">
                    {impact}
                  </p>
                </section>
              )}

              {exp.kpis && exp.kpis.length > 0 && (
                <section className="timeline-kpis" aria-label="Résultats clés">
                  <div className="timeline-kpis-header">
                    <span className="timeline-kpis-icon" aria-hidden="true">
                      <ChartIcon />
                    </span>
                    <span className="timeline-kpis-title">KPI & résultats</span>
                  </div>
                  <ul className="timeline-kpis-list">
                    {exp.kpis.map((kpi) => (
                      <li key={kpi}>
                        <span className="timeline-kpi-badge">{kpi}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="timeline-stack" aria-label="Environnement technique">
                <div className="timeline-stack-header">
                  <span className="timeline-stack-icon" aria-hidden="true">
                    <CodeIcon />
                  </span>
                  <span className="timeline-stack-title">Environnement technique</span>
                </div>
                <div className="timeline-stack-chips">
                  {exp.techTags.map((tech) => (
                    <span key={tech} className="timeline-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {exp.classifiedStack && (
                <p className="timeline-classified">
                  Environnement classifié — stack non divulguable.
                </p>
              )}
            </article>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedTimeline;
