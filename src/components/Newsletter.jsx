import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('loading');
    emailjs
      .send('service_h93nh4r', 'template_nrecz44', { email, message: 'Newsletter signup' }, 'AMNL3vQueeDMEXZEA')
      .then(() => {
        setStatus('success');
        setEmail('');
      })
      .catch(() => setStatus('error'));
  };

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <h3>Newsletter</h3>
        <p>Recevoir les nouveautés techniques et mises à jour du portfolio.</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            S’inscrire
          </button>
        </form>
        {status === 'success' && <span className="status success">Merci, inscription confirmée.</span>}
        {status === 'error' && <span className="status error">Erreur d’envoi, réessayez.</span>}
      </div>
    </section>
  );
};

export default Newsletter;
