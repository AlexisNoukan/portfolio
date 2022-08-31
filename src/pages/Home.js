import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'


const Home = () => {
    return (
        <div>
            <Navigation/>
           <p>Bonjour</p><br/>
           <p>ceci est une petite présentation de moi  </p>
           <p>lol ca marche</p>
        </div>
    );
};

export default Home;