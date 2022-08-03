import React from 'react';
import '../topbar/topbar.css';
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="top">
        <div className="topLeft">
            <div className="logo">
                <h1 className="logo">
                    <Link to="/" style={{textDecoration:"none", color:"inherit"}}>BALLIN'</Link>
                </h1>
            </div>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                </li>
                <li className="topListItem">CATEGORIES</li>
                <li className="topListItem">
                    <Link to="/about" style={{textDecoration:"none", color:"inherit"}}>ABOUT ME</Link>
                </li>
                <li className="topListItem">
                    <Link to="/contact" style={{textDecoration:"none", color:"inherit"}}>CONTACT</Link>
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