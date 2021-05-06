import styled from 'styled-components'

 export const CardStyle = styled.div`
 display:flex;
 width:50%;
 .card-image{
     width:50%;
     img{
         width:100%;
     }
 }
 .card-description{
    width:50%;
     display:flex;
     flex-direction: column;
     h3,p{
         font-size:8px;
     }
 }
`;
export const ListCardStyle = styled.div`
display: flex;
flex-wrap:wrap;
width:100%;`