import React from 'react';
import '../topbar/topbar.css';
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top">
        <div className="topLeft">
            <div className="logo">
                <h1 className="logo">
                    <Link to="/" className="link">BALLIN'</Link>
                </h1>
            </div>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <li className="topListItem">CATEGORIES</li>
                <li className="topListItem">
                    <Link to="/about" className="link">ABOUT ME</Link>
                </li>
                <li className="topListItem">
                    <Link to="/contact" className="link">CONTACT</Link>
                </li>
            </ul>
        </div>
        <div className="topRight">
            <a href="https://github.com/paulinakopec" target="blank_"><i className="topIcon fa-brands fa-square-github"></i></a>
            <a href="https://www.linkedin.com/in/paulina-kope%C4%87-b11365183/" target="blank_"><i className="topIcon fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/smallwaves.ceramics/" target="blank_"><i className="topIcon fa-brands fa-instagram"></i></a>
        </div>
    </div>
  )
}

export default Topbar