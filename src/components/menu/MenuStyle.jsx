import styled from 'styled-components'
import { Link } from "react-router-dom"

export const MenuStyle = styled.div`
width:100vw;
background-color:transparent;
position:absolute;
color:#FFAE00;
li{
    padding:1%;
   
   
    &:hover,&:active{
        background-color:#68A8DA;
        transition: all linear 0.9s;
        
        
    }
   
}`
export const LinkStyle=styled(Link)`
color:#FFAE00;
`