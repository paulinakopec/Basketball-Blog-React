import React, { useState } from 'react';
import '../newsletter/newsletter.css';

const Newsletter = () => {
  const [ button, setButton ] = useState('SIGN UP');
  const changeMessage = () => {
    setButton('SIGNED UP');
  }

  return (
    <div className="newsletter">
        <h2 className="newsletterTitle">NEWSLETTER</h2>
        <p className="newsletterSubtitle">Sign up to receive daily basketball news.</p>
        <div className="emailInput">
            <input type="text" placeholder="Your email..." className="newsletterInput" autoFocus={true}/>
            <button className="signUpButton" onClick={changeMessage}>{button}</button>
        </div>
    </div>
  )
}

export default Newsletter