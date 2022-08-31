import './styles/App.css';
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home';
import Projet from './pages/Projet';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/" element={Home} />
      <Route exact path="/projet" element={Projet} />
      <Route exact path="/skill" element={Skill} />
      <Route exact path="/contact" element={Contact} />
      <Route element={NotFound} />
    </BrowserRouter>
    </div>
  );
}

export default App;
