

import React from 'react'
import Button from '../button/Button'
import { CardStyle, ListCardStyle } from './CardStyle'

export const Card = (props) => {
  return (
    <CardStyle>
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="card-description">
        <h3>{props.title}</h3>
        <Button iconButton={props.iconButton}/>
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
       {movies.map(movie=>{
         return (
           <>
             <Card
               src={images_Api + movie.backdrop_path}
               title={movie.title}
               alt={movie.title}
               iconButton=""
               date={`Date : ${movie.release_date}`}
               vote={`Vote : ${movie.vote_average}`}
             />
           </>
         );
       })}
     </ListCardStyle>
   )
 }
 
