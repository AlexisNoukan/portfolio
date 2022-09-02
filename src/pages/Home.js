import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'


const Home = () => {
    return (
        <div>
            <Navigation/>
            <div className='presentation'>
                <p>Bonjour</p>
                <p>ceci est une petite présentation de moi  </p>
                <p>lol ca marche</p>
            </div>
        </div>
    );
};

export default Home;