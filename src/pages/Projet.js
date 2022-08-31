import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/App.css'
import Python from '../img/python.jpeg'

const projet = () => {
    return (
        <div>
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
      </div>
    );
};

export default projet;