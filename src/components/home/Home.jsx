import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import Button from '../button/Button'
import HomeStyle from './HomeStyle'

export const Home = (props) => {
    return (
      <HomeStyle>
        <div>
          <SimpleImageSlider width={200} height={10} images={props.images} />
        </div>
        <div>
          {/* <Button onClick={props.onClick} className={props.className} iconButton={props.iconButton}/>
                <Button onClick={props.onClick} className={props.className} iconButton={props.iconButton}/> */}
        </div>
      </HomeStyle>
    );
}
