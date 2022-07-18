import styled from '@emotion/styled';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { sliderData } from '../../data/sliderData';

type ArrowProps = {
    direction: string;
}
type SlideIndex = {
    slideIndex: number;
}

const Container = styled.div`
    margin-top: 2%;
    width: 100%;
    display: flex;
    height: 40vh;
    position: relative;
`
const Arrow = styled.div<ArrowProps>`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => {  if(props.direction === "left") return "15px"}};
    right: ${(props) => {  if(props.direction === "right") return "15px"}};
    cursor: pointer;
    opacity: 0.8;
    z-index: 2;
`
const Wrapper = styled.div<SlideIndex>`
    height: 100%;
    width: 100%;
    display: flex;
    transform: ${(props) => {  return `translate(${props.slideIndex * -100}vw)`}};
`
const Slide = styled.div`
    width: 100%;
    min-width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    position: fixed;
    margin-left: 100px;
    margin-right: 100px;
    min-width: 100%;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction: string) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <KeyboardArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderData.map(item => (
                        <Slide key={item.id}>
                            <ImageContainer>
                                <Image src={item.img}/>
                            </ImageContainer>
                            <InfoContainer>
                                <Typography variant='h1' sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '4rem',
                                }} >
                                    {item.title}
                                </Typography>
                                <Typography variant='subtitle1' sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: '2rem',
                                }} >
                                    {item.subtitle}
                                </Typography>
                                <Button variant='contained' sx={{
                                    color: 'white',
                                    backgroundColor: '#ff5a5f',
                                    marginTop: '25px',
                                }}>
                                    Ver más
                                </Button>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <KeyboardArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider