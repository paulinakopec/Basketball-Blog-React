import React from 'react';
import '../footer/footer.css';
import Mail from '../../img/mail.png';
import Phone from '../../img/phone.png';
import Address from '../../img/address.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => {
    alert('Still working on it...');
  }
  return (
    <div className="footer">
        <div className="footerLeft">
            <p className="copyrightText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Vel soluta id assumenda tempore. 
                Quidem ratione culpa explicabo, sint fuga fugiat eaque enim doloribus nisi incidunt saepe, 
                ullam distinctio accusantium quis.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Vel soluta id assumenda tempore. 
            </p>
            <div className="copyright">@2022 BALLIN', All rights reserved.</div>
            <div className="socialIcons">
                <a href="https://github.com/paulinakopec" target="blank_"><i className="socialIcon fa-brands fa-square-github"></i></a>
                <a href="https://www.linkedin.com/in/paulina-kope%C4%87-b11365183/" target="blank_"><i className="socialIcon fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/smallwaves.ceramics/" target="blank_"><i className="socialIcon fa-brands fa-instagram"></i></a>
            </div>
        </div>
        <div className="footerMiddle">
            <h2 className="footerMiddleTitle">Useful Links</h2>
            <ul className="footerList">
                <li className="listItem"><Link to="/" className="link">Home</Link></li>
                <li className="listItem" onClick={handleClick}>News</li>
                <li className="listItem" onClick={handleClick}>NBA</li>
                <li className="listItem" onClick={handleClick}>Eurobasket</li>
                <li className="listItem" onClick={handleClick}>PZKOSZ</li>
                <li className="listItem" onClick={handleClick}>Games</li>
                <li className="listItem" onClick={handleClick}>Stats</li>
                <li className="listItem" onClick={handleClick}>Players</li>
                <li className="listItem" onClick={handleClick}>Teams</li>
                <li className="listItem" onClick={handleClick}>Newsletter</li>
            </ul>
        </div>
        <div className="footerRight">
            <div className="contactItem">
                <a href="mailto:paulinakopec32@gmail.com"><img src={Mail} alt="" className="contactImg" /></a>
                <p className="contactText">paulinakopec32@gmail.com</p>
            </div>
            <div className="contactItem">
                <a href="tel:+48518602797"><img src={Phone} alt="" className="contactImg" /></a>
                <p className="contactText">+48 518 602 797</p>
            </div>
            <div className="contactItem">
                <img src={Address} alt="" className="contactImg" />
                <p className="contactText">XYZ Street 108, Warsaw, Poland</p>
            </div>           
        </div>
    </div>
  )
}

export default Footer