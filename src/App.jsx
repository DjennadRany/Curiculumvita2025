import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import SeoHead from './components/SeoHead.jsx';
import SiteLayout from './layout/SiteLayout.jsx';
import Home from './pages/Home.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import CVPrint from './pages/CVPrint.jsx';

const Projects = lazy(() => import('./pages/Projects.jsx'));

const App = () => {
  return (
    <Router>
      <SeoHead />
      <SiteLayout>
        <Suspense fallback={<div className="page container" style={{ paddingTop: 48 }} aria-busy="true">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CVPrint />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </Router>
  );
};

export default App;