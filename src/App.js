import './styles/App.css';
import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import Projet from './pages/Projet.js';
import Skill from './pages/Skill.js';
import Contact from './pages/Contact.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact to path="/" element={<Home/>} />
      <Route path="/projet" element={<Projet/>} />
      <Route path="/skill" element={<Skill/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route element={NotFound} />

    </Routes>
</BrowserRouter>
    
  );
}

export default App;
