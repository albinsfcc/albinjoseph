import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent/>} />
          <Route path="projects" element={<Projects/>} />
          <Route path="experience" element={<Experience/>} />
          <Route path="resume" element={<Resume/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
