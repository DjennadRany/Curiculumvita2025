import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CVPrint from './pages/CVPrint';

const App = () => {
  return (
    <Router>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CVPrint />} />
        </Routes>
      </SiteLayout>
    </Router>
  );
};

export default App;