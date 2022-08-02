import React from 'react';
import '../single/single.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';

const Single = () => {
  return (
    <div className="single">
        <SinglePost></SinglePost>
        <Sidebar></Sidebar>
    </div>
  )
}

export default Single