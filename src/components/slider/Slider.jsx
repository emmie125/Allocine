import React from 'react';
import { Slide } from 'react-slideshow-image';
import { ContainerSlider } from './SliderStyle';

const proprietes={
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:false,
    arrows:false
};

export const Slider = ({images_Api,movies}) => {
    return (
      <ContainerSlider>
        <Slide {...proprietes}>
         
            {movies.map((movie)=>{
                console.log(images_Api + movie.backdrop_path);
                return (
                  <div className="each-slide">
                    <div
                      className="ContainerSlider__Images"
                      style={{
                            background: `linear-gradient(to left bottom,rgba(4, 13, 42, 0.287),rgba(0, 0, 0, 0.7)),url(${
                          images_Api + movie.backdrop_path
                        })`,
                        backgroundSize : "cover",
                        
                    
                      }}
                    >
                    </div>
                    <div>
                      <h2 className="ContainerSlider__Title">{`Title : ${movie.title}`}</h2>
                    </div>
                  </div>
                );
            })}
          
        </Slide>
      </ContainerSlider>
    );
}
export default Slider;