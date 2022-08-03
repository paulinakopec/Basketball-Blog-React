import React from 'react';
import '../footer/footer.css';
import Mail from '../../img/mail.png';
import Phone from '../../img/phone.png';
import Address from '../../img/address.png';

const Footer = () => {
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
        </div>
        <div className="footerMiddle">
            <h2 className="footerMiddleTitle">Useful Links</h2>
            <ul className="footerList">
                <li className="listItem">Home</li>
                <li className="listItem">News</li>
                <li className="listItem">NBA</li>
                <li className="listItem">Eurobasket</li>
                <li className="listItem">PZKOSZ</li>
                <li className="listItem">Games</li>
                <li className="listItem">Stats</li>
                <li className="listItem">Players</li>
                <li className="listItem">Teams</li>
                <li className="listItem">Newsletter</li>
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