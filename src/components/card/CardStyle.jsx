
import styled from 'styled-components'

 export const CardStyle = styled.div`
 display:flex;
 flex-direction:column;
 width:20%;
 height:100%;
 margin:1% 1%;
 box-shadow: 0px 0px 3px black;
 position: relative;
 border-radius:5px;
 .card-image{
     width:100%;
     height:80%;
     overflow:hidden;
    
     img{
         width:100%;
        height: 100%;
         border-top-left-radius:2.5px;
         border-bottom-left-radius:2.5px;
         &:hover{
            transform:scale(1.03);
            border-top-left-radius:2.5px;
            border-bottom-left-radius:2.5px;
            transition: all 0.5s linear;
         }
     }
    
 }
 .card-black{
         position: absolute;
         top:0%;
         left: 0%;
         background-color:black;
         width:50%;
     }
 .card-description{
    width:100%;
     display:flex;
     flex-direction: column;
     padding-top:2%;
     padding-bottom:4%;
     padding-left:4%;
     /* height:20vh; */
     
     line-height:10px;
     
     
     p{
         font-size:12px;
         color:#68A8DA;
     }
     h3{
        font-size:14px;
        font-style:italic;
        color:#68A8DA;
     }
     
     .card-title{
        text-align:left;
        width:90%;
     }
     .start{
         color:#08131b !important;
         font-size:12px !important;
         width:70% !important;
     }
 }
 @media (max-width:768px){
     margin:1% 1%;
    width: 45%;
    }
`;
export const ListCardStyle = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:center;
margin:3% 2%;
width:96%;
height:100%;
@media (max-width:768px){
    margin:15% 1%;
    }`