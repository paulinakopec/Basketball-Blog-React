import React from 'react';
import '../single/single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SliderPost from '../../components/sliderPost/SliderPost';

const SinglePostPage = () => {
  return (
    <div className="single">
        <SliderPost></SliderPost>
        <Sidebar></Sidebar>
    </div>
  )
}

export default SinglePostPage