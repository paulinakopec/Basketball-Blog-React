import React, { useState } from 'react';
import '../contact/contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitButton, setSubmitButton] = useState('SUBMIT');
  const changeSubmitButton = (e) => {
    setSubmitButton('SUBMITTED');
    e.preventDefault();
    setName('');
    setSurname('');
    setEmail('');
    setNumber('');
    setSubject('');
    setMessage('');
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
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="name" 
              name="" 
              id=""
              value={name}
              onChange={(e)=> setName(e.target.value)}
              required
              />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="surname" 
              name="" 
              id=""
              value={surname}
              onChange={(e)=> setSurname(e.target.value)}
            />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="e-mail" 
              name="" 
              id=""
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
               />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="phone number" 
              name="" 
              id=""
              value={number}
              onChange={(e)=> setNumber(e.target.value)}
            />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="subject" 
              name="" 
              id=""
              value={subject}
              onChange={(e)=> setSubject(e.target.value)}
            />
            <textarea 
              className="textareaFormElement" 
              placeholder="message" 
              name="" 
              id="" 
              rows="5"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
            />
            <button type="submit" className="submitButton" onClick={changeSubmitButton}>{submitButton}</button>
        </form>
    </div>
  )
}

export default Contact