import React from 'react';
import '../sidebar/sidebar.css';
import Profile from '../../img/profile.JPG';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="meImg" src={ Profile } alt="" />
            <p className="sidebarText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Et id expedita, laborum sunt veritatis voluptatibus voluptatem temporibus illo fugiat aliquid quibusdam inventore porro, 
                quod modi impedit sed. Iure, nam porro.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">News</li>
                <li className="sidebarListItem">NBA</li>
                <li className="sidebarListItem">Games</li>
                <li className="sidebarListItem">Teams</li>
                <li className="sidebarListItem">Players</li>
                <li className="sidebarListItem">Stats</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocialContainer">
                <a href="https://github.com/paulinakopec" target="blank_" style={{color:"black"}}><i className="sidebarIcon fa-brands fa-square-github"></i></a>
                <a href="https://www.linkedin.com/in/paulina-kope%C4%87-b11365183/" target="blank_" style={{color:"black"}}><i className="sidebarIcon fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/smallwaves.ceramics/" target="blank_" style={{color:"black"}}><i className="sidebarIcon fa-brands fa-instagram"></i></a>              
            </div>

        </div>
    </div>
  )
}

export default Sidebar