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
width:30%;
font-size:12px;
margin:3% 0%;
border-radius:3px;
`}
${({btncat})=> btncat && css`
    background-color:white;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
    border:1px solid #08131b;
    border-radius:5px;
   padding:2% 2%;
    width:200px;
    color:#08131b;
    margin-left:2%;
    height: 100%;
`}
${({btnmore})=> btnmore && css`
    color:white;
    border:1px solid #08131b;
    border-radius:5px;
    padding:2% 2%;
    width:200px;
    background-color:#08131b;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2));
    margin-left:2%;
    height: 100%;
`}`