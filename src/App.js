import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CVManager from './pages/CVManager';
import CVDeveloper from './pages/CVDeveloper';
import TechNews from './pages/TechNews';
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv-manager" element={<CVManager />} />
        <Route path="/cv-developer" element={<CVDeveloper />} />
        <Route path="/tech-news" element={<TechNews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;