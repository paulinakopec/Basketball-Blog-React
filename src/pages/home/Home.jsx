import React from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import '../home/home.css';

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="home">
          <Posts></Posts>
      </div>
    </>
  );
}

export default Home