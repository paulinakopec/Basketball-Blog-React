import React from 'react';
import '../newsletter/newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h2 className="newsletterTitle">NEWSLETTER</h2>
        <p className="newsletterSubtitle">Sign up to receive daily basketball news.</p>
        <div className="emailInput">
            <input type="text" placeholder="Your email..." className="newsletterInput" />
            <button className="signUpButton">SIGN UP</button>
        </div>
    </div>
  )
}

export default Newsletter