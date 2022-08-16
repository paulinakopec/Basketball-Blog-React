import React from 'react';
import './categories.css';
import { categoryItems } from '../../data';

const Categories = () => {
    const clickHandler = () => {
        alert('Still working on it...')
    }
    return (
        <div className='categories'>
            {categoryItems.map((category) => (
                <div className='category' key={category.id} onClick={clickHandler}>
                    <img className='categoryImg' src={category.img} alt=''></img>
                    <h2 className='categoryTitle'>{category.title}</h2>
                </div>
            ))}
        </div>
  )
}

export default Categories