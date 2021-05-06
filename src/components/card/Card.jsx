

import React from 'react'
import Button from '../button/Button'
import { CardStyle, ListCardStyle } from './CardStyle';
import { Icon, InlineIcon } from '@iconify/react';
import moreInformation from '@iconify-icons/openmoji/more-information';


export const Card = (props) => {
  return (
    <CardStyle>
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="card-black"></div>
      <div className="card-description">
       <div className="card-title"> <h3>{props.title}</h3></div>
        <Button secondary label="more" iconButton={<Icon icon={moreInformation}/>}/>
        <p>{props.date}</p>
        <p>{props.vote}</p>
      </div>
    </CardStyle>
  )
}

export default Card
 
 export const ListCard = ({images_Api,movies}) => {
   return (
     <ListCardStyle>
       {movies.map((movie,index)=>{
         return (
           index<5 ? <>
           <Card
             src={images_Api + movie.backdrop_path}
             title={movie.title}
             alt={movie.title}
             iconButton=""
             date={`Date : ${movie.release_date}`}
             vote={`Vote : ${movie.vote_average}`}
           />
         </>
         : ""
         );
       })}
     </ListCardStyle>
   )
 }
 
