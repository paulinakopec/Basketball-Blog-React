import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../../data';
import ArrowRight from "../../img/arrow_right.png";
import ArrowLeft from "../../img/arrow_left.png";
import { Link } from 'react-router-dom';
import { mobile } from '../../responsive';


const Container = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    overflow: hidden;
    ${mobile({display: "none"})}
`;

const Wrapper = styled.div`
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const ImgContainer = styled.div``

const Image = styled.img`
    width: 100vw;
    height: calc(100vh - 60px);
    object-fit: cover;
`

const InfoContainer = styled.div`
    position: absolute;
    top: 15%;
    right: 5%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
`

const Title = styled.h1`
    font-size: 50px;
    text-align: center;
`

const Button = styled.button`
    color: white;
    background-color: transparent;
    border: 2px solid white;
    padding: 15px;
    margin-top: 30px;
    width: 200px;
    cursor: pointer;
    &:hover {
        color: black;
        background-color: white;
        transition: 1s ease-in-out;
    }
`

const Arrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    z-index: 2;
`;

const ArrowImageLeft = styled.img`
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 100;
    cursor: pointer;
`

const ArrowImageRight = styled.img`
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 100;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }
  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick('left')}>
            <ArrowImageLeft src={ArrowLeft}></ArrowImageLeft>
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) => (    
                <Slide key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>
                    <InfoContainer color={item.color}>
                        <Title>{item.title}</Title>
                        <Button><Link to="/news/billrussell" className="link">READ MORE</Link></Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick('right')}>
            <ArrowImageRight src={ArrowRight}></ArrowImageRight>
        </Arrow>
    </Container>
  )
}

export default Slider