import { useEffect, useState } from "react";
import Carousel,{consts}from 'react-elastic-carousel';
import Button from "../button/Button";
import { Icon, InlineIcon } from '@iconify/react';
import starFilled from '@iconify-icons/ant-design/star-filled';

import videoClip20Regular from '@iconify-icons/fluent/video-clip-20-regular';
import bxLeftArrow from '@iconify-icons/bx/bx-left-arrow';
import bxRightArrow from '@iconify-icons/bx/bx-right-arrow';


import { ContainerDetails, DetailStyle } from './DetailStyle'
import { Start } from "../start/Start";
import { Title } from '../title/Title';
import Card from "../card/Card";
import ModalExampleBasic from "../modal/Modal";

const proprietesSlider={
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:false,
    arrows:true
  };

export const Details = ({match}) => {
    console.log("url movies",match.url);

    const [detailsMovie,setDetailsMovie] = useState();
    const[actors,setActors] = useState([]);
    const [similarMovies, setSimilarMovies]=useState([]);
    const [video,setVideo] = useState();
    const [open, setOpen] = useState(false)
    

    const movie_id= match.url;
    const images_Api = "https://image.tmdb.org/t/p/w1280";
    const details_Movies_Api=`https://api.themoviedb.org/3${movie_id}?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US`;
    const actor_Api=`https://api.themoviedb.org/3${movie_id}/credits?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US`;
    const similarMovie_Api=`https://api.themoviedb.org/3${movie_id}/similar?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US&page=1`
    const video_Api=`https://api.themoviedb.org/3/${movie_id}/videos?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US`
    useEffect(() => {
        fetch(details_Movies_Api)
          .then((res) => res.json())
          .then((data) => {
              setDetailsMovie(data);
          });
          fetch(actor_Api).then(res => res.json()).then((data)=>{
            const dataTampon = data.cast;
            const actorTampon = dataTampon.filter((actor) =>
              actor.profile_path !== null ? actor : ""
            );
            setActors(actorTampon);
          })
          fetch(similarMovie_Api).then(res => res.json()).then((data)=>{
           console.log(data.results);
           const similar=data.results.map(similar=>similar)
           setSimilarMovies(similar);
          })
          fetch(video_Api)
            .then((res) => res.json())
            .then(data=>
             { setVideo(data.results[0].key);
              console.log(data)});
          window.scrollTo(0,0);
    }, [details_Movies_Api])
    console.log(detailsMovie);
    console.log("les acteurs",actors);
    console.log("les films similaire",similarMovies)

    const  myArrow = ({ type, onClick, isEdge }) => {
      const pointer = type === consts.PREV ? '👈': '👉';
      return (
        <Button onClick={onClick} disabled={isEdge}>
          {pointer}
        </Button>
      )
    }
    const showVideo =()=>(
      setOpen(true)
    );
    return (
      <DetailStyle>
        <ContainerDetails
          background={`https://image.tmdb.org/t/p/w1280${
            detailsMovie === undefined || detailsMovie.backdrop_path
          }`}
        >
          <div className="container-details-image">
            <img
              src={`https://image.tmdb.org/t/p/w1280${
                detailsMovie === undefined || detailsMovie.poster_path
              }`}
              alt=""
            />

            <div className="Container-slider__btn-video" onClick={showVideo}>
              <Button
                className="video-play"
                iconButton={<Icon icon={videoClip20Regular} onClick={showVideo}/>}
              />
            </div>
          </div>
          <div className="container-details-description">
            <div className="container-details-description-title">
              <h3>{detailsMovie === undefined || detailsMovie.title}</h3>
            </div>
            <div className="container-details-description-genre">
              <h4>Category : </h4>
              <p>
                {detailsMovie === undefined ||
                  detailsMovie.genres.map(({ name }) => {
                    return <span>{name}</span>;
                  })}
              </p>
            </div>
            <div className="container-details-description-start">
              <Start
                min={
                  detailsMovie === undefined ||
                  Math.round(detailsMovie.vote_average)
                }
              />
              <p>
                Date : {detailsMovie === undefined || detailsMovie.release_date}
              </p>
            </div>
            <div className="container-details-description-overview">
              <h4>Overview :</h4>
              <p>{detailsMovie === undefined || detailsMovie.overview}</p>
            </div>
          </div>
        </ContainerDetails>
        <div className="container-casting">
          <Title className="Title" title="Casting"/>
          <Carousel itemsToScroll={4} pagination={false} itemsToShow={4}   focusOnSelect={true}>
            {actors=== undefined ||actors.map((actor) => {
             return (
                <div className="container-box">
                  <div className="container-image">
                    <img src={images_Api + actor.profile_path} alt="" />
                  </div>
                  <div className="container-description">
                    <p>Role:{actor.character}</p>
                    <p >name : {actor.name}</p>
                    <p>popularity : {actor.popularity} {<Icon icon={starFilled} />}</p>
                  </div>
                </div>
              )

              })
            }
          </Carousel>
        </div>
        <div className="container-similar">
        <Title className="Title" title="Similar Movies"/>
          <Carousel itemsToScroll={4} pagination={false} itemsToShow={4}   showArrows={true} focusOnSelect={true}>
            {similarMovies=== undefined ||similarMovies.map((similar) => {
              return (
                <Card
                  src={images_Api + similar.poster_path}
                  title={similar.title}
                  alt={similar.title}
                  iconButton=""
                  date={`Date : ${similar.release_date}`}
                  vote={similar.vote_average}
                  id={similar.id}
                  className="container-similar-card"
                />
              );  
              })
            }
          </Carousel>
        </div>
        <div className="container-recommandation"></div>
        <ModalExampleBasic key={video} open={open} onClose={()=>setOpen(false)} onOpen={()=>setOpen(true)}/>
      </DetailStyle>
    );
}