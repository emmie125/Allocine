import styled from "styled-components";


export const ContainerSlider= styled.div`

width:100%;

.each-slide{
        position:relative;
    }
   
.ContainerSlider__Images{

    width:100%;
    height:100vh;
    
    background-repeat: no-repeat;
    
    img{ 
        width:100%;
       /* object-fit: cover; */
    }
}
.ContainerSlider__Title{
    color:#FFAE00 !important;
    opacity:1;
    font-size:30px;
    position: absolute;
    width:100%;
    left: 5%;
    top:80%;
    height: 20%;
    z-index: 3;
}


`