import styled from 'styled-components'
import { Link } from "react-router-dom"

export const MenuStyle = styled.div`
width:100vw;
background-color:#24445C;
background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7));
text-align:center;
position:absolute;
color:#FFAE00;
li{
    padding:1.5%;
    cursor:pointer;
    list-style-type: none;
    &:hover {
        background-color:#68A8DA;
        color:black;
        transition: all linear 0.9s;
    }
    
   
}`
export const LinkStyle=styled(Link)`
color:#FFAE00;
&:hover{
    color:black;
}
`