import React from 'react';
import '../about/about.css';
import Me from '../../img/me.jpg';
import Me2 from '../../img/me2.JPG';
import Me3 from '../../img/me3.JPG';
import Me4 from '../../img/me4.jpg';


const About = () => {
  return (
    <div className="about">
        <div className="descriptionContainer">
          <p className="aboutDescription">
              Hi! My name is Paulina and I am the author of this blog, which was created due to my long-time love to basketball. 
              <br></br><br></br>I am a basketball player recently playing in DPD team in an amateur basketball league called "Koszykarska Liga Biznesu" in Warsaw
              and streetball on indoor and outdoor courts. In the past, I was part of AZS SGH Basketball Team, Chicago Bulls Team in Ladies League, AKS Zły and La Basket Warsaw.
              <br></br><br></br>In this blog, I focus mainly on NBA news, but also on what's going on in Europe - mainly Eurobasket - and in Poland - PZKosz.
          </p>
        </div>
        <div className="imgContainer">
          <img src={Me} alt="" className="aboutImg"/>
          <img src={Me2} alt="" className="aboutImg"/>
          <img src={Me3} alt="" className="aboutImg"/>
          <img src={Me4} alt="" className="aboutImg"/>
        </div>
        
    </div>
  )
}

export default About