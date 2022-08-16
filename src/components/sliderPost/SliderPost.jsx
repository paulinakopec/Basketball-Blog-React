import React, { useEffect, useState } from 'react';
import '../sliderPost/sliderPost.css';
import Profile from '../../img/profile.JPG';
import { sliderItems } from '../../data';
import { useParams } from 'react-router-dom';

const SliderPost = () => {
  const [sliderTitle, setSliderTitle] = useState('Default title');
  const [imgmain, setImgMain] = useState('');
  const [date, setDate] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const newSliderPost = sliderItems.find((item) => item.id === parseInt(id));
    setSliderTitle(newSliderPost.title);
    setImgMain(newSliderPost.img);
    setDate(newSliderPost.date);
  }, []);
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <h1 className="singlePostTitle">
                {sliderTitle}
            </h1>
            <span className="singlePostSubtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <hr />
            <div className="singlePostDetails">
                <div className="writerDetails">
                    <img src={Profile} alt="" className="singlePostWriterImg" />
                    <p className="singlePostWriterName">Paulina Kopec</p>
                </div>
                <p className="singlePostDate">{date}</p>
            </div>
            <img 
            src={imgmain}
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

export default SliderPost