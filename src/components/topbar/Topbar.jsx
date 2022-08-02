import React from 'react';
import '../topbar/topbar.css';
import Profile from '../../img/profile.JPG';

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
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-square-github"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
    </div>
  )
}

export default Topbar