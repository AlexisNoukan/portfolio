import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'

const skill = () => {
    return (
        <>
            <Navigation/>
            
            <p>HTML</p>
            <div class="container">
                <div class="skills html">90%</div>
            </div>

            <p>CSS</p>
            <div class="container">
                <div class="skills css">80%</div>
            </div>

            <p>JavaScript</p>
            <div class="container">
                <div class="skills js">65%</div>
            </div>

            <p>PHP</p>
            <div class="container">
                <div class="skills php">60%</div>
            </div>
        </>
    );
};

export default skill;