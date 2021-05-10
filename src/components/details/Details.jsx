import { useEffect, useState } from "react";
import Button from "../button/Button";
import { Icon, InlineIcon } from '@iconify/react';
import videoClip20Regular from '@iconify-icons/fluent/video-clip-20-regular';
import { ContainerDetails, DetailStyle } from './DetailStyle'
import { Start } from "../start/Start";

export const Details = ({match}) => {
    console.log(match.url);

    const [detailsMovie,setDetailsMovie] = useState()

    const movie_id= match.url;
    const images_Api = "https://image.tmdb.org/t/p/w1280";
    const details_Movies_Api=`https://api.themoviedb.org/3${movie_id}?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US`;
   
    useEffect(() => {
        fetch(details_Movies_Api)
          .then((res) => res.json())
          .then((data) => {
              setDetailsMovie(data);
          });
    }, [])
    console.log(detailsMovie);

    return (
        <DetailStyle>
           <ContainerDetails background={`https://image.tmdb.org/t/p/w1280${detailsMovie === undefined || detailsMovie.backdrop_path }`}>
              
               <div className="container-details-image">
                   <img src={`https://image.tmdb.org/t/p/w1280${detailsMovie === undefined || detailsMovie.poster_path}`} alt=""/>
                  
                   <div className="Container-slider__btn-video">
                        <Button  className="video-play" iconButton={<Icon icon={videoClip20Regular}/>}/>
                   </div>
               </div>
               <div className="container-details-description">
                    <div className="container-details-description-title">
                        <h3>{detailsMovie === undefined ||detailsMovie.title}</h3>
                    </div>
                    <div className="container-details-description-genre">
                        <p> Category : 
                            {detailsMovie === undefined || detailsMovie.genres.map(({name})=>{
                                return <span>{name}</span>
                            })}
                        </p>
                    </div>
                    <div className="container-details-description-start">
                        <Start min={detailsMovie === undefined || Math.round(detailsMovie.vote_average)}/>
                        <p>Date : {detailsMovie === undefined || detailsMovie.release_date}</p>
                    </div>
                    <div className="container-details-description-overview">
                    <p> Overview  : 
                    {detailsMovie === undefined || detailsMovie.overview}
                    </p>
                    </div>
               </div>
           </ContainerDetails>
           <div className="container-casting"></div>
           <div className="container-similaire"></div>
           <div className="container-recommandation"></div>
        </DetailStyle>
    )
}