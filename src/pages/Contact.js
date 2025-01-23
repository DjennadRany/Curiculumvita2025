import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h93nh4r','template_nrecz44', e.target, 'AMNL3vQueeDMEXZEA')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès!');
      }, (error) => {
          console.log(error.text);
          alert('Une erreur est survenue, veuillez réessayer.');
      });

    setFormData({
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom</label>
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
        </div>
        <div>
          <label>Prénom</label>
          <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
        </div>
        <div>
          <label>Téléphone</label>
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;