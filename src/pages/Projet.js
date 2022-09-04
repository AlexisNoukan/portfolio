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
          <div className="jcp">
          <div className='center'>
            <div className='card-container'>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <p>python project</p>
              </div>
              <div className="card">
                <img 
                src={JavaScript} 
                alt="python"/>
                <p>JavaScript project</p>
              </div>
              <div className="card">
                <img 
                src={ReactImg} 
                alt="python"/>
                <p>ReactJS project</p>
              </div>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <p>python project</p>
              </div>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <p>python project</p>
              </div>
              <div className="card">
                <img 
                src={Python} 
                alt="python"/>
                <p>python project</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default projet;