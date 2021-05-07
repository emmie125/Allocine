import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxCategory from '@iconify-icons/bx/bx-category';
import videoIcon from '@iconify-icons/file-icons/video';
import videoClip20Regular from '@iconify-icons/fluent/video-clip-20-regular';

import { Slide,Fade } from 'react-slideshow-image';
import { ContainerSlider, LinkStyleMore,LinkStyleCat } from './SliderStyle';
import Button from '../button/Button';


const proprietes={
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:false,
    arrows:false
};

export const Fader = ({images_Api,movies}) => {
    return (
      <ContainerSlider>
        <Fade {...proprietes}>
         
            {movies.map((movie)=>{
                console.log(images_Api + movie.backdrop_path);
                return (
                  <div className="each-slide">
                    <div
                      className="Container-slider__images"
                      style={{
                            background: `linear-gradient(to left bottom,rgba(4, 13, 42, 0.287),rgba(0, 0, 0, 0.7)),url(${
                          images_Api + movie.backdrop_path
                        })`,
                        backgroundSize : "cover",
                        
                    
                      }}
                    >
                    </div>
                    <div>
                      <h2 className="Container-slider__title">{`Title : ${movie.title}`}</h2>
                    </div>
                    <div className="Container-slider__btn-cat">
                     <LinkStyleMore to="/details"> <Button btnmore label="More"  /></LinkStyleMore>
                      <LinkStyleCat to="/category"><Button btncat label="Categorys"  /></LinkStyleCat>
                     
                    </div>
                    <div className="Container-slider__btn-video">
                      <Button  iconButton={<Icon icon={videoClip20Regular}/>}/>
                      
                    </div>
                  </div>
                );
            })}
          
        </Fade>
      </ContainerSlider>
    );
}
//export default Fader;