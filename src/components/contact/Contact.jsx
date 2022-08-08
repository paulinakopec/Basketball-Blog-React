import React, { useState } from 'react';
import '../contact/contact.css';

const Contact = () => {
  const [submitButton, setSubmitButton] = useState('SUBMIT');
  const changeSubmitButton = () => {
    setSubmitButton('Submitted');
  }

  return (
    <div className="contact">
        <div className="contactTitleContainer">
            <h1 className="contactTitle">
                For inquiries concerning cooperation, please fill in the form...
            </h1>
            <p className="contactSubtitle">
                I will contact you back as soon as possible.
            </p>
        </div>
        <form className="contactForm">
            <input type="text" className="textFormElement" placeholder="name" name="" id="" />
            <input type="text" className="textFormElement" placeholder="surname" name="" id="" />
            <input type="text" className="textFormElement" placeholder="e-mail" name="" id="" />
            <input type="text" className="textFormElement" placeholder="phone number" name="" id="" />
            <input type="text" className="textFormElement" placeholder="subject" name="" id="" />
            <textarea className="textareaFormElement" placeholder="message" name="" id="" rows="5"></textarea>
            <button className="submitButton" onClick={changeSubmitButton}>{submitButton}</button>
        </form>
    </div>
  )
}

export default Contact