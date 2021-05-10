import { Link } from "react-router-dom";
import styled from "styled-components";


export const ContainerSlider= styled.div`

width:100%;

.each-slide{
        position:relative;
    }
   
.Container-slider__images{

    width:100vw;
    height:100vh;
    background-repeat:no-repeat;
    background-position:center;
    background-color : rgb(8,19,27);
    background-image: linear-gradient(0deg, rgba(8,19,27,1) 0%, rgba(8,19,27,0.8869922969187675) 83%, rgba(8,19,27,1) 100%);
    background-image:linear-gradient(0deg,to bottom left,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));
}
.Container-slider__title{
    color:#FFAE00 !important;
    width:55%;
    font-size:35px;
    position: absolute;
    left: 5%;
    top:70%;
    height: 20%;
    z-index: 3;
    background:linear-gradient(20deg,to  bottom left,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.7));
}
.Container-slider__btn-cat{
    position: absolute;
    top:85%;
    left:4%;
    display:flex;
    width:55%;
}
.Container-slider__btn-video{
    clip-path: circle(50% at 50% 50%);
    position: absolute;
    background-color:#141212;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
    top:40%;
    left:45%;
    padding:3%;
    opacity: 0.4;
    cursor:pointer;
    font-size:20px !important;

   &:hover{
    transform:scale(1.03);
    opacity: 1;
    transition: all 0.5s linear;
   }
}

`
export const LinkStyleMore = styled(Link)`
text-decoration:none;
`

export const LinkStyleCat = styled(Link)`
text-decoration:none;
margin-left:2%;
`