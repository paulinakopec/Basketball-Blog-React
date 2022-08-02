import React from 'react';
import '../singlePost/singlePost.css';
import Profile from '../../img/profile.JPG';

const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <h1 className="singlePostTitle">
                Bill Russell dies at age 88
            </h1>
            <span className="singlePostSubtitle">
                Celtics icon, Hall of Famer and 11-time NBA champion Bill Russell died 'peacefully' at the age of 88.
            </span>
            <hr />
            <div className="singlePostDetails">
                <div className="writerDetails">
                    <img src={Profile} alt="" className="singlePostWriterImg" />
                    <p className="singlePostWriterName">Paulina Kopec</p>
                </div>
                <p className="singlePostDate">August 2, 2022 13:58 PM</p>
            </div>
            <img 
            src="https://gfx.sport.radiozet.pl/var/radiozetsport2/storage/images/inne-sporty/nie-zyje-legenda-boston-celtics-w-wieku-88-lat-zmarl-bill-russell/7449160-1-pol-PL/Nie-zyje-Bill-Russell.-11-krotny-mistrz-NBA-zmarl-w-wieku-88-lat_article_north.png" 
            alt="" 
            className="singlePostImg" 
            />
            <p className="singlePostImgDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="singlePostDescription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti beatae nisi similique, commodi, perspiciatis consequatur repellat quidem, 
                placeat error recusandae animi quam ex voluptatibus quod asperiores praesentium ipsam quia obcaecati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti beatae nisi similique, commodi, perspiciatis consequatur repellat quidem, 
                placeat error recusandae animi quam ex voluptatibus quod asperiores praesentium ipsam quia obcaecati.
                <br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti beatae nisi similique, commodi, perspiciatis consequatur repellat quidem, 
                placeat error recusandae animi quam ex voluptatibus quod asperiores praesentium ipsam quia obcaecati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti beatae nisi similique, commodi, perspiciatis consequatur repellat quidem, 
                placeat error recusandae animi quam ex voluptatibus quod asperiores praesentium ipsam quia obcaecati.
                <br></br><br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti beatae nisi similique, commodi, perspiciatis consequatur repellat quidem, 
                placeat error recusandae animi quam ex voluptatibus quod asperiores praesentium ipsam quia obcaecati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corrupti beatae nisi similique, commodi, perspiciatis consequatur repellat quidem, 
                placeat error recusandae animi quam ex voluptatibus quod asperiores praesentium ipsam quia obcaecati.
            </p>



        </div>
    </div>
  )
}

export default SinglePost