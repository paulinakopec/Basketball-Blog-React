import React from 'react';
import '../header/header.css';
import { sliderItems } from '../../data';
import { useState } from 'react';
import ArrowRight from '../../img/arrow_right.png';
import ArrowLeft from '../../img/arrow_left.png';


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
    <div className='container'>
        <div className='arrowLeft' direction='left' onClick={() => handleClick('left')}>
            <img src={ArrowLeft} alt="" />
        </div>
        <div className='wrapper' slideIndex = {slideIndex}>
            {sliderItems.map((item) => (    
                <div className='slide' key={item.id}>
                    <div className='imgContainer'>
                        <img className='sliderImg' src={item.img} alt=''></img>
                    </div>
                    <div className='infoContainer'>
                        <h1 className='title'>{item.title}</h1>
                        <button>READ MORE</button>
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