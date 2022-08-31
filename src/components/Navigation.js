import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'


const Navigation = () => {
    return (
        <div className='top-bar-home'>
            
                <NavLink to='/' className="navLink-home" >
                    <div className='home-pic'>
                        <img src="./img/chibi.png" alt="profil-pic" className='pic'/>
                    </div>
                    <h2>Alexis Noukan</h2> 
                </NavLink>
               
            <div className='top-bar'>
                <ul>
                    <li>
                        <NavLink to='/' className='navLink' >
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projet' className='navLink' >
                            <span>Projet</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/skill' className='navLink'>
                            <span>Skill</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='navLink'>
                            <span>Contact</span>
                        </NavLink>
                    </li> 
                </ul>
            </div>
        </div>
    );
};

export default Navigation;