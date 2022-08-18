import React from 'react';
import '../posts/posts.css';
import { postItems } from '../../data';
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div className="posts">
      {postItems.map((post)=> (
        <div className="post" key={post.id}>
          <Link to={`/post/${post.id}`} className="link"><img className="postImg" src={post.img} alt="" /></Link>
          <div className="postInfo">
            <div className="postCategories">
              <span className="postCategory">
                {post.category}
              </span>
              <span className="postCategory">
                {post.category2}
              </span>
            </div>
            <span className="postTitle">
              <Link to={`/post/${post.id}`} className="link">{post.title}</Link>
            </span>
            <span className="postDate">{post.date}</span>
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