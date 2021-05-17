import styled, { css } from 'styled-components'

export const ButtonStyle = styled.button`

background-color:transparent;
border: none;
color:#FFAE00;
font-size:30px;
cursor:pointer;
outline:transparent;
&:active{
    border: none;  
}
${({secondary})=> secondary && css`

background-color:#24445C;
background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7));
border:1px solid #24445C;
width:35%;
font-size:12px;
margin:3% 0%;
padding:1%;
border-radius:3px;
`}
${({btncat})=> btncat && css`
    background-color:white;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
    border:1px solid #08131b;
    border-radius:5px;
   padding:1% 1.5%;
    width:150px;
    font-size:30px;
    color:#08131b;
    margin-left:2%;
    height: 100%;
   
`}
${({btnmore})=> btnmore && css`
    color:white;
    border:1px solid #08131b;
    border-radius:5px;
    padding:1% 1.5%;
    width:150px;
    font-size:30px;
    background-color:#08131b;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2));
    margin-left:2%;
    height: 100%;

`}
${({btngenre})=> btngenre && css`
    color:#68A8DA;
    border:1px solid #68A8DA;
    border-radius:5px;
    padding:0.5% 1%;
    width:100px;
    font-size:12px;
    text-align:center;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2));
    &:focus{
        color:#FFAE00;
        border:transparent;
    }
`}
${({btndetails})=> btndetails && css`
background-color:#08131b;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
    border:1px solid #08131b;
    border-radius:5px;
   padding:1% 1.5%;
    width:150px;
    color:white;
    margin-left:2%;
    height: 100%;
    font-size:30px;
    &:focus{
    color:#08131b;
    background-color:white;
  
   
}
`}`