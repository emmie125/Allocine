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
}
.Container-slider__title{
    color:#FFAE00 !important;
    width:50%;
    font-size:25px;
    position: absolute;
    left: 45%;
    top:70%;
    height: 20%;
    z-index: 3;
    background:linear-gradient(0deg,to bottom left,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7));
}
.Container-slider__btn-cat{
    position: absolute;
    top:80%;
    left:5%;
}
.Container-slider__btn-video{
    clip-path: circle(50% at 50% 50%);
    border:1px solid #FFAE00 ;
    position: absolute;
    background-color:#141212;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
    top:40%;
    left:45%;
    padding:2%;
    opacity: 0.6;
    cursor:pointer;
}


`