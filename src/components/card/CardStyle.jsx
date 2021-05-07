import styled from 'styled-components'

 export const CardStyle = styled.div`
 display:flex;
 width:45%;
 margin:2% 2%;
 box-shadow: 0px 0px 3px black;
 position: relative;
 border-radius:5px;
 .card-image{
     width:50%;
     overflow:hidden;
    
     img{
         width:100%;
         height:100%;
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
    width:50%;
     display:flex;
     flex-direction: column;
     margin-top:2%;
     margin-left:2%;
     p{
         font-size:14px;
     }
     h3{
        font-size:16px;
        font-style:italic;
        color:#08131b;
     }
     
     .card-title{
        text-align:left;
        width:70%;
     }
 }
`;
export const ListCardStyle = styled.div`
display: flex;
flex-wrap:wrap;
margin:2% 2%;
width:100%;`