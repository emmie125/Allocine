

import React from 'react'
import Button from '../button/Button'
import { CardStyle, ListCardStyle } from './CardStyle';
import { Icon } from '@iconify/react';
import moreInformation from '@iconify-icons/openmoji/more-information';
import { Link } from 'react-router-dom';
import { Start } from '../start/Start';


export const Card = (props) => {
 
  return (
    <CardStyle card={props.card} className={props.className}>
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>
     
      <div className="card-description">
       <div className="card-title"> <h3>{props.title}</h3></div>
        <Link to={`/category/${props.media_type}/${props.id}`}><Button secondary label="more"  onClick={props.onClick} iconButton={<Icon icon={moreInformation}/>}/></Link>
        <p>{props.date}</p>
        <div> <Start min={ props.vote} className="start"/></div>
      </div>
    </CardStyle>
  )
}

export default Card
 
 export const ListCard = ({imagesApi,movies,onClick,position}) => {
   return (
     <ListCardStyle>
       {movies.map((movie,index)=>{
         return (
           index<position ? 
           <Card
             key={index}
             src={imagesApi + movie.poster_path}
             title={movie.title}
             alt={movie.title}
             iconButton=""
             date={`Date : ${movie.release_date}`}
             vote={movie.vote_average}
             id={movie.id}
             media_type={movie.media_type}
           />
         
         : ""
         );
       })}
     </ListCardStyle>
   )
 }
 
