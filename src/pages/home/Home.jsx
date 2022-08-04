import React from 'react';
// import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Slider from '../../components/slider/Slider';
import '../home/home.css';

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <div className="home">
          <Posts></Posts>
      </div>
    </>
  );
}

export default Home