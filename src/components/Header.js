import React from 'react';
import '../App.css'; // Assurez-vous d'avoir un fichier CSS pour les styles 
import profileImage from '../assets/128905298.jpg'; // Assurez-vous que le chemin est correct


const Header = () => {
  return (
    <header className="profile-header">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="info">
        <h1>Rany Djennad</h1>
        <p>Chef de Projet / Scrum Master & Développeur Fullstack</p>
        <p>Paris | 06.95.59.86.42</p>
        <p>Email: Djennad.ar@gmail.com</p>
      </div>
    </header>
  );
};

export default Header;