

import React from 'react'
import Button from '../button/Button'
import { CardStyle, ListCardStyle } from './CardStyle';
import { Icon, InlineIcon } from '@iconify/react';
import moreInformation from '@iconify-icons/openmoji/more-information';
import { Link, Route, Switch } from 'react-router-dom';
import {Details} from '../details/Details'
import { Start } from '../start/Start';


export const Card = (props) => {
  return (
    <CardStyle card={props.card}>
      <div className="card-image">
        <img src={props.src} alt={props.alt} />
      </div>
      <div className="card-black"></div>
      <div className="card-description">
       <div className="card-title"> <h3>{props.title}</h3></div>
        <Link to={`/movie/${props.id}`}><Button secondary label="more"  onClick={props.onClick} iconButton={<Icon icon={moreInformation}/>}/></Link>
        
        <p>{props.date}</p>
        <p> <Start min={ props.vote}/></p>
      </div>
    </CardStyle>
  )
}

export default Card
 
 export const ListCard = ({images_Api,movies,onClick}) => {
   return (
     <ListCardStyle>
       {movies.map((movie,index)=>{
         return (
           index<6 ? <>
           <Card
             src={images_Api + movie.poster_path}
             title={movie.title}
             alt={movie.title}
             iconButton=""
             date={`Date : ${movie.release_date}`}
             vote={movie.vote_average}
             id={movie.id}
           />
         </>
         : ""
         );
       })}
     </ListCardStyle>
   )
 }
 
