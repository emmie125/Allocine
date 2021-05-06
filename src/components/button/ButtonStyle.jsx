import styled, { css } from 'styled-components'

export const ButtonStyle = styled.button`

background-color:transparent;
border: none;
color:#FFAE00;
font-size:20px;
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
`}`