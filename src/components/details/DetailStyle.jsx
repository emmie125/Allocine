import styled from "styled-components";

export const DetailStyle = styled.div`
width:100vh;
display:flex;
flex-direction:column;
.container-casting{
    
    width:94vw;
    height:60vh;
    margin:5% 3%;
    align-items: center;
    justify-content:center;
    position:relative;
    display:flex;
    flex-direction: column;
    background-color:white;
    border-radius:10px;
  
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
 
}

.container-image{
    width:100%;
    display:flex;
    height:100%;
    
   
   
    img{
        width:100%;
        height:100%;
        border-top-left-radius:2.5px;
         border-bottom-left-radius:2.5px;
    }

}

.Title{
    position:absolute;
    z-index: 100;
    top:-15%;
 
}
.container-box{
    display:flex;
    flex-direction:column;
    box-shadow: 0px 0px 3px black;
    width:100%;
    height:80%;
    margin: 2% 2%;
  
}
.container-description{
    width:100%;
    display:flex;
    flex-direction:column;
   
    margin-top:2%;
    p{
        line-height:15px;
        text-transform:uppercase;
        color:#08131b;
        font-size:12px;
    }
}
.container-similar {
    display: flex;
    justify-content:center;
    background-color:white;
    border-radius:10px;
    width:94vw;
    height:95vh;
    margin:15% 3%;
    padding:5% 0%;
    background-image:linear-gradient(to left bottom,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1));
    position:relative;
    
    &-card{
        width:90%;
    }
}
`

export const ContainerDetails = styled.div`
 width :100vw;
 background-color : rgb(8,19,27);
background-image: linear-gradient(0deg, rgba(8,19,27,1) 0%, rgba(8,19,27,0.7869922969187675) 83%, rgba(8,19,27,1) 100%),url("${({background})=> background}");
background-size:cover;
height:100vh;
padding:15% 5% 0% 5%;
display:flex;
.container-details-image{
   width:30%;
   height:90%;
   box-shadow: 0px 5px 7px black;
   position:relative;
   img{
       width:100%;
       height:100%;
       border-radius:2.5px;
       
   } 
   .Container-slider__btn-video{
    clip-path: circle(50% at 50% 50%);
    position: absolute;
    left:40%;
    top:35%;
    padding:5%;
    background-color:black;
    cursor:pointer;
    opacity:0.5;
    }

    &:hover .Container-slider__btn-video{
     opacity:1;
     transition:all 0.5s linear;
   }
   
}
.container-details-description{
       display:flex;
       flex-direction:column;
       margin-left:2%;
       color:white;
       width:70%;
       
       &-title{
           width:100%;
           h3{
               
               font-size:50px;
               text-transform:uppercase;
           }
       }
       &-genre{
           margin-bottom:2%;
           span{
            margin:0% 2% 0% 0%;
            color:#FFAE00;
           }
           
       }
       &-start{
        & Start{
            margin-bottom:2%;
          }
       }
       
       p{
        font-size:20px;
       }
       &-overview{
           margin-top:2%;
           width:85%;
           text-align:left;
       }
       h4{
        font-size:25px;
       }
   }

`