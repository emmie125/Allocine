import styled from "styled-components";


export const ContainerSlider= styled.div`

width:100%;

.each-slide{
        position:relative;
    }
   
.ContainerSlider__Images{

    width:100vw;
    height:100vh;
    background-repeat:no-repeat;
    background-position:center;
}
.ContainerSlider__Title{
    color:#FFAE00 !important;
    font-size:30px;
    position: absolute;
    width:100%;
    left: 5%;
    top:80%;
    height: 20%;
    z-index: 3;
    background:linear-gradient(0deg,to bottom left,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7));
}


`