import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxCategory from '@iconify-icons/bx/bx-category';
import videoIcon from '@iconify-icons/file-icons/video';
import videoClip20Regular from '@iconify-icons/fluent/video-clip-20-regular';

import { Slide,Fade } from 'react-slideshow-image';
import { ContainerSlider, LinkStyleMore,LinkStyleCat } from './SliderStyle';
import Button from '../button/Button';
import ModalExampleBasic from '../modal/Modal';


const proprietes={
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:false,
    arrows:false
};


export const Fader = ({imagesApi,movies}) => {
    return (
      <ContainerSlider>
        <Fade {...proprietes}>
         
            {movies.map((movie)=>{
                
                return (
                  <div className="each-slide" key={movie.id}>
                    <div
                      className="Container-slider__images"
                      style={{
                            background: `linear-gradient(to left bottom,rgba(4, 13, 42, 0.287),rgba(0, 0, 0, 0.7)),url(${
                          imagesApi + movie.backdrop_path
                        })`,
                        backgroundSize : "cover",
                      }}
                    >
                    </div>
                    <div>
                      <h2 className="Container-slider__title">{`Title : ${movie.title}`}</h2>
                    </div>
                    <div className="Container-slider__btn-cat">
                     <LinkStyleMore  to={`${movie.media_type}/${movie.id}`} > <Button btnmore label="More"  /></LinkStyleMore>
                      <LinkStyleCat to="/category"><Button btncat label="Categorys"  /></LinkStyleCat>
                     
                    </div>
                    <div className="Container-slider__btn-video">
                      <Button  iconButton={<Icon icon={videoClip20Regular}/>}/>
                    </div>
                    {/* <ModalExampleBasic /> */}
                  </div>
                );
            })}
          
        </Fade>
      </ContainerSlider>
    );
}






//export default Fader;