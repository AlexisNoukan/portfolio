import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'


const Home = () => {
    return (
        <>
            <Navigation/>
            <div className="container-presentation">
                <div className='presentation'>
                    <p>Bonjour</p>
                    <p>ceci est une petite présentation de moi  </p>
                    <p>lol ca marche</p>
                </div>
                <div className="img">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    );
};

export default Home;