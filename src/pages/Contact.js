import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import profile from '../data/profile.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('loading');

    emailjs
      .sendForm('service_h93nh4r', 'template_nrecz44', event.target, 'AMNL3vQueeDMEXZEA')
      .then(() => {
        setStatus('success');
        setFormData({ nom: '', prenom: '', telephone: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  const contactItems = [
    profile.email && { icon: FaEnvelope, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    profile.phone && { icon: FaPhone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    profile.github && { icon: FaGithub, label: 'GitHub', value: 'DjennadRany', href: profile.github },
    profile.linkedin && { icon: FaLinkedin, label: 'LinkedIn', value: 'Rany Djennad', href: profile.linkedin },
    profile.location && { icon: FaMapMarkerAlt, label: 'Localisation', value: profile.location, href: null }
  ].filter(Boolean);

  return (
    <div className="page">
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Contact</h2>
            <p className="contact-intro">
              Discutons architecture, delivery et refonte de plateformes React et AEM.
            </p>
            <ul className="contact-list">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="contact-list-item">
                  <span className="contact-list-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="contact-list-content">
                    <span className="contact-list-label">{label}</span>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="contact-list-link">
                        {value}
                      </a>
                    ) : (
                      <span className="contact-list-value">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Nom
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Prénom
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Téléphone
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi…' : 'Envoyer'}
            </button>
            {status === 'success' && (
              <span className="status success">Message envoyé avec succès.</span>
            )}
            {status === 'error' && (
              <span className="status error">Une erreur est survenue. Réessayez ou contactez-moi par email.</span>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
