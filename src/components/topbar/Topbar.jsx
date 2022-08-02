import React from 'react';
import '../topbar/topbar.css';
import Profile from '../../img/profile.JPG';

const Topbar = () => {
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-square-github"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
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
            <img className="topImg" src={Profile} alt="profile" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar