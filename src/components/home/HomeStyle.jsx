import styled from "styled-components";

const HomeStyle= styled.div`

position: relative;
justify-content:center;
display:flex;
flex-direction:column;
width:100vw;
.Title{
    position: absolute;
    left:0;
    top:48%;
}
.containerTrending{
    position: relative;
    width:100%;
}
.card{
    margin:5% 0%;
    width:100%;
    background-color:white;
    padding:1%;
    border-radius:10px;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
    width:100%;  
}`
export default HomeStyle