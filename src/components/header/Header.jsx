import React from 'react';
import '../header/header.css';
import { sliderItems } from '../../data';
import { useState } from 'react';
import ArrowRight from '../../img/arrow_right.png';
import ArrowLeft from '../../img/arrow_left.png';
import { Link } from "react-router-dom";


const Header = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }
  return (
    <div className='headerContainer'>
        <div className='arrowLeft' direction='left' onClick={() => handleClick('left')}>
            <img src={ArrowLeft} alt="" />
        </div>
        <div className='wrapper' slideIndex = {slideIndex}>
            {sliderItems.map((item) => (    
                <div className='slide' key={item.id}>
                    <div className='headerImgContainer'>
                        <img className='sliderImg' src={item.img} alt=''></img>
                    </div>
                    <div className='headerInfoContainer'>
                        <h1 className='headerTitle'>{item.title}</h1>
                        <Link to="/news/billrussell" style={{textDecoration:"none", color:"inherit"}}><button className="headerButton">READ MORE</button></Link>
                    </div>
                </div>
            ))}
        </div>
        <div className='arrowRight' direction='right' onClick={() => handleClick('right')}>
            <img src={ArrowRight} alt="" />
        </div>
    </div>
  )
}


export default Header