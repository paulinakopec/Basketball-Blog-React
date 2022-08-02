import React from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import '../home/home.css';

const Home = () => {
  return (
    <>
        <Header></Header>
        <div className="home">
            <Posts></Posts>
            <Sidebar></Sidebar>
        </div>
    </>
  );
}

export default Home