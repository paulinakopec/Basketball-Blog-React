import React from 'react';
import '../topbar/topbar.css';

const Topbar = () => {
  return (
    <div className="top">
        <div className="topLeft">
            <div className="logo">
                <h1 className="logo">
                    BALLIN'
                </h1>
            </div>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">CATEGORIES</li>
                <li className="topListItem">ABOUT ME</li>
                <li className="topListItem">CONTACT</li>
            </ul>
        </div>
        <div className="topRight">
            <a href="https://www.instagram.com/smallwaves.ceramics/" target="blank_"><i className="topIcon fa-brands fa-instagram"></i></a>
            <a href="https://github.com/paulinakopec" target="blank_"><i className="topIcon fa-brands fa-square-github"></i></a>
            <a href="https://www.linkedin.com/in/paulina-kope%C4%87-b11365183/" target="blank_"><i className="topIcon fa-brands fa-linkedin"></i></a>
            <i className="topIcon fa-brands fa-square-facebook"></i>
        </div>
    </div>
  )
}

export default Topbar