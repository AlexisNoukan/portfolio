import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'

const skill = () => {
    return (
        <>
            <Navigation/>
            <div className='center'>
                <p>HTML</p>
                <div className="container">
                    <div className="skills html">90%</div>
                </div>

                <p>CSS</p>
                <div className="container">
                    <div className="skills css">80%</div>
                </div>

                <p>JavaScript</p>
                <div className="container">
                    <div className="skills js">65%</div>
                </div>

                <p>ReactJs</p>
                <div className="container">
                    <div className="skills reactjs">60%</div>
                </div>

                <p>Python</p>
                <div className="container">
                    <div className="skills python">60%</div>
                </div>
            </div>
        </>
    );
};

export default skill;