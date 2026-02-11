import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import profile from '../data/profile.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSending(true);
    setIsSent(false);
    setError(null);

    emailjs
      .sendForm('service_h93nh4r', 'template_nrecz44', event.target, 'AMNL3vQueeDMEXZEA')
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        setFormData({ nom: '', prenom: '', telephone: '', email: '', message: '' });
      })
      .catch(() => {
        setIsSending(false);
        setError('Une erreur est survenue. Réessayez ou contactez-moi par email.');
      });
  };

  const contactItems = [
    profile.email && { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    profile.phone && { icon: Phone, label: 'Téléphone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    profile.github && { icon: Github, label: 'GitHub', value: 'DjennadRany', href: profile.github },
    profile.linkedin && { icon: Linkedin, label: 'LinkedIn', value: 'Rany Djennad', href: profile.linkedin },
    profile.location && { icon: MapPin, label: 'Localisation', value: profile.location, href: null }
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
                    <Icon size={20} />
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
            <button type="submit" className="btn btn-primary" disabled={isSending}>
              {isSending ? 'Envoi…' : 'Envoyer'}
            </button>
            {isSent && !error && (
              <span className="status success">Message envoyé avec succès.</span>
            )}
            {error && <span className="status error">{error}</span>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
