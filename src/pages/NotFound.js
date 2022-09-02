import React from 'react';
import { NavLink } from 'react-router-dom';

const notfound = () => {
    return (
        <>
        <div style={notFound}>
        
            <div style={div}>
             <NavLink to='/'  >404 NotFound<br/>
             return</NavLink>
             </div>
        </div>
        </>
    );
};



export default notfound;


const notFound = {
        
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
        flexDirection: 'column',
        textDecoration:'none',
        fontWeight: 'bold',
        fontSize: '100px'
        
        
    
};

const div = {
    border: '1px solid black'
}

