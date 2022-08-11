import React, { useState } from 'react';
import '../newsletter/newsletter.css';

const Newsletter = () => {
  const [ emailaddress, setEmailAddress ] = useState('');
  const [ button, setButton ] = useState('SIGN UP');

  const changeMessage = (e) => {
    e.preventDefault();
    if (emailaddress) {
      setButton('SIGNED UP');
      setEmailAddress('');
      setTimeout (() => setButton('SIGN UP'), 2000);
    } else {
      alert('Please fill in the input');
    }
  }

  return (
    <div className="newsletter">
        <h2 className="newsletterTitle">NEWSLETTER</h2>
        <p className="newsletterSubtitle">Sign up to receive daily basketball news.</p>
        <div className="emailInput">
            <input 
              type="text"
              name="emailaddress"
              id="emailaddress"
              value={emailaddress} 
              placeholder="Your email..." 
              className="newsletterInput" 
              autoFocus={true} 
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
            <button className="signUpButton" onClick={changeMessage}>{button}</button>
        </div>
    </div>
  )
}

export default Newsletter