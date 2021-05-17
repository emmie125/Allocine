import styled from "styled-components";


export const CategoryStyle = styled.div `
margin-top:10vh;
width:100vw;
display:flex;
flex-direction:column;
.category{
    display:flex;
    justify-content:space-evenly;
    width:100%;
    margin-bottom:2%;
}
hr{
    color:#68A8DA;
    opacity:0.2;
}
.genres{
    
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
    Button{
        margin:1% 1%;
    }
}
.listCard{
    margin:5% 1.5%;
    width:96vw;
    justify-content:center;
    background-color:white;
    padding:1%;
    border-radius:10px;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
}`