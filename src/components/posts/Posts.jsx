import React from 'react';
import '../posts/posts.css';
import { postItems } from '../../data';

const Posts = () => {
  return (
    <div className="posts">
      {postItems.map((item)=> (
        <div className="post" key={item.id}>
          <img className="postImg" src={item.img} alt="" />
          <div className="postInfo">
            <div className="postCategories">
              <span className="postCategory">
                {item.category}
              </span>
              <span className="postCategory">
                {item.category2}
              </span>
            </div>
            <span className="postTitle">
              {item.title}
            </span>
            <span className="postDate">{item.date}</span>
          </div>
          <p className="postDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla ex, et praesentium accusamus aut iste eligendi vel, 
            culpa similique rerum dolor laboriosam blanditiis commodi ullam laborum! 
            Eum voluptate odio explicabo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla ex, et praesentium accusamus aut iste eligendi vel, 
            culpa similique rerum dolor laboriosam blanditiis commodi ullam laborum! 
            Eum voluptate odio explicabo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nulla ex, et praesentium accusamus aut iste eligendi vel, 
            culpa similique rerum dolor laboriosam blanditiis commodi ullam laborum! 
            Eum voluptate odio explicabo.
          </p>
      </div>
      ))}
    </div>
  )
}

export default Posts