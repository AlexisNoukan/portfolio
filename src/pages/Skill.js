import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'

const skill = () => {
    return (
        <>
            <Navigation/>
            <div className='center'>
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

                <p>ReactJs</p>
                <div class="container">
                    <div class="skills reactjs">60%</div>
                </div>

                <p>Python</p>
                <div class="container">
                    <div class="skills python">60%</div>
                </div>
            </div>
        </>
    );
};

export default skill;