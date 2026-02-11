import React from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile.json';
import SkillsGrid from '../skills/SkillsGrid';
import research from '../data/research.json';
import Tag from '../ui/Tag';
import Newsletter from '../components/Newsletter';
import Button from '../ui/Button';
import { fadeUp } from '../animations/variants';

const Home = () => {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-inner">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <p className="eyebrow">React Developer • AEM Developer • Front-End Engineer</p>
            <h1>{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="meta">
              {profile.location} · <a href={profile.github}>GitHub</a>
            </p>
            <p className="meta">{profile.languages}</p>
            <div className="hero-actions">
              <Button href={profile.cvDownload} variant="primary">
                Download CV (PDF)
              </Button>
              <Button href="#/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Profil</h2>
          <div className="summary">
            {profile.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Compétences techniques</h2>
          <SkillsGrid />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Technologies explorées & R&D</h2>
          <div className="tag-list">
            {research.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
