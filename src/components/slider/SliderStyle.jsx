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

.ContainerDescription{
    display:flex;
    flex-direction:column;
    width: 100%;
    position: absolute;
    top:60% !important;
    left:5%;
    z-index: 3;
    color:#FFAE00 !important;
    font-size:55px !important;
    h2{
        font-size:45px !important;
    }
    h3{
        font-size:35px !important;
    }
   
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

@media (max-width:768px){
    .ContainerDescription{
        top:55% !important;
        width:90% !important;
        h2{
        font-size:25px !important;
    }
    h3{
        font-size:25px !important;
    }
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
export const ContainerImagesStyle = styled.div`
width:100vw;
height:70vh;
`;