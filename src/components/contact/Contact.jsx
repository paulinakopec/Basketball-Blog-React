import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [person, setPerson] = useState({firstname:'', surname:'', email:'', number:'', subject:'', message:''});
  const [submitButton, setSubmitButton] = useState('SUBMIT');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({...person, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstname && person.surname && person.email && person.number && person.subject && person.message) { 
      setSubmitButton('SUBMITTED');
      setPerson({firstname:'', surname:'', email:'', number:'', subject:'', message:''});
    } else {
      alert('Please fill in all inputs');
    }
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
              name="firstname" 
              id="firstname"
              value={person.firstname}
              onChange={handleChange}
              required
              />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="surname" 
              name="surname" 
              id="surname"
              value={person.surname}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="e-mail" 
              name="email" 
              id="email"
              value={person.email}
              onChange={handleChange}
              required
               />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="phone number" 
              name="number" 
              id="number"
              value={person.number}
              onChange={handleChange}
              required
            />
            <input 
              type="text" 
              className="textFormElement" 
              placeholder="subject" 
              name="subject" 
              id="subject"
              value={person.subject}
              onChange={handleChange}
              required
            />
            <textarea 
              className="textareaFormElement" 
              placeholder="message" 
              name="message" 
              id="message" 
              rows="5"
              value={person.message}
              onChange={handleChange}
              required
            />
            <button 
              type="submit" 
              className="submitButton" 
              onClick={handleSubmit}
            >
              {submitButton}
            </button>
        </form>
    </div>
  )
}

export default Contact