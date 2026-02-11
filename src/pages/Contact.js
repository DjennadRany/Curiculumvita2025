import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import profile from '../data/profile.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
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
        setFormData({ nom: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="page">
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Contact</h2>
            <p>Discutons architecture, delivery et refonte de plateformes React et AEM.</p>
            <p>
              GitHub: <a href={profile.github}>{profile.github}</a>
            </p>
            <p>{profile.location}</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Nom complet
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
            {status === 'success' && <span className="status success">Message envoyé avec succès.</span>}
            {status === 'error' && <span className="status error">Une erreur est survenue.</span>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;