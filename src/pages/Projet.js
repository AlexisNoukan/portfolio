import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css';
import Python from '../img/python.jpeg';
import JavaScript from '../img/JavaScript.png';
import ReactImg from '../img/react-3.png'

const projet = () => {
    return (
        <>
          <Navigation/>
          <div className='center'>
            <div className='card-container'>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <h2>python project</h2>
              </div>
              <div className="card">
                <img 
                src={JavaScript} 
                alt="python"/>
                <h2>JavaScript project</h2>
              </div>
              <div className="card">
                <img 
                src={ReactImg} 
                alt="python"/>
                <h2>ReactJS project</h2>
              </div>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <h2>python project</h2>
              </div>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <h2>python project</h2>
              </div>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <h2>python project</h2>
              </div>
            </div>
          </div>
      </>
    );
};

export default projet;