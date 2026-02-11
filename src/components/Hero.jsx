import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import profile from '../data/profile.json';
import photoProfil from '../assets/images/photo-profil.PNG';

const statement = 'Senior React & AEM Technical Lead et Technical Project Manager avec 10+ ans d\'expérience en Banking Systems, énergie et Public Sector — parcours structuré de graphisme à développeur fullstack puis coordination technique et pilotage de delivery en environnement classifié.';

const metrics = [
  { value: '+20 %', label: 'Productivité' },
  { value: '-30 %', label: 'Délais de livraison' },
  { value: '-40 %', label: 'Délais de déploiement' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cvPdfUrl = `${import.meta.env.BASE_URL}Rany_Djennad_CV_2026.pdf`;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <motion.div
          className="hero__media"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <img
            src={photoProfil}
            alt="Photo de profil Rany Djennad"
            className="hero__photo"
            width={200}
            height="auto"
          />
        </motion.div>
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <p className="hero__eyebrow">React Developer • AEM Developer • Front-End Engineer</p>
          <h1 id="hero-title" className="hero__title">
            {profile.name}
          </h1>
          <p className="hero__subtitle">{profile.title}</p>
          <p className="hero__statement">{statement}</p>
          <p className="hero__summary">
            {profile.summary[0]}
          </p>
          <div className="hero__metrics" role="list" aria-label="Résultats clés">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="hero__metric"
                role="listitem"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={i + 1}
              >
                <span className="hero__metric-value">{m.value}</span>
                <span className="hero__metric-label">{m.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="hero__actions">
            <a
              href={cvPdfUrl}
              className="btn btn-primary"
              download="Rany_Djennad_CV_2026.pdf"
              aria-label="Télécharger le CV au format PDF"
            >
              <Download size={20} aria-hidden="true" />
              Download CV (PDF)
            </a>
            <a
              href="#/contact"
              className="btn btn-ghost"
              aria-label="Aller à la page Contact"
            >
              <Mail size={20} aria-hidden="true" />
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
