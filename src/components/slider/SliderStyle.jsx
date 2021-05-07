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
    background-image:linear-gradient(0deg,to bottom left,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5));
}
.Container-slider__title{
    color:#FFAE00 !important;
    width:55%;
    font-size:25px;
    position: absolute;
    left: 5%;
    top:65%;
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
    padding:2%;
    opacity: 0.4;
    cursor:pointer;

   &:hover{
    transform:scale(1.03);
    opacity: 1;
    transition: all 0.5s linear;
   }
}


`