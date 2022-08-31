import './styles/App.css';
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home.js';
import Projet from './pages/Projet';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
<h1>tst</h1>
    <BrowserRouter>
      <Route path="/" element={Home} />
      <Route path="/projet" element={Projet} />
      <Route path="/skill" element={Skill} />
      <Route path="/contact" element={Contact} />
      <Route element={NotFound} />
    </BrowserRouter>

    </div>
  );
}

export default App;
