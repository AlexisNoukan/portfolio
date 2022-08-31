import './styles/App.css';
import React from 'react';
import {BrowserRouter,Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import Projet from './pages/Projet.js';
import Skill from './pages/Skill.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes path="/" element={Home} />
      <Routes path="/projet" element={Projet} />
      <Routes path="/skill" element={Skill} />
      <Routes path="/contact" element={Contact} />
      <Routes element={NotFound} />
    </BrowserRouter>

    </div>
  );
}

export default App;
