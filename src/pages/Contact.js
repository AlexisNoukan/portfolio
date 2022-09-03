import React from 'react';
import Navigation from '../components/Navigation';

const contact = () => {
    return (
      <> 

        <Navigation/>

        <div className="formulaire">
        <form action="contact" className='contact-form'>

            <h1>Contact Me</h1>

            <label>Name</label>
            <input placeholder='name' />

            <label>Email</label>
            <input placeholder='email' />

            <label>Message</label>
            <textarea name="Message" id="" cols="30" rows="10"></textarea>

            <button type="submit">Send</button>

        </form> 
        </div>
    </> 
    );
};

export default contact;