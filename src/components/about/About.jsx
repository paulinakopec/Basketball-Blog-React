import React from 'react';
import '../about/about.css';
import Me from '../../img/me.jpg';

const About = () => {
  return (
    <div className="about">
        <p className="aboutDescription">
            Hi! My name is Paulina and I am the author of this blog, which was created due to my long-time love to basketball. 
            I am a basketball player recently playing in DPD in an amateur basketball league called "Koszykarska Liga Biznesu" in Warsaw
            and streetball on indoor and outdoor courts.
            In the past, I was part of AZS SGH Basketball Team, Chicago Bulls Team in Ladies League, AKS Zły and La Basket Warsaw.
        </p>
        <img src={Me} alt="" className="aboutImg"/>
        
    </div>
  )
}

export default About