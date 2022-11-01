import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'
import Skill from '../pages/Skill'
import Projet from '../pages/Projet'
import Contact from '../pages/Contact'


const Home = () => {
    return (
        <>
            <Navigation/>
            <h1>Alexis Noukan</h1>
            <h2>Web Developper</h2>
            <Skill/>
            <Projet/>
            <Contact/>

        </>
    );
};

export default Home;

