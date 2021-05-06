import React from 'react'
import Button from '../button/Button'
import { ListCard } from '../card/Card';
import HomeStyle from './HomeStyle'

export const Home = ({images_Api,movies}) => {
    return (
      <HomeStyle>
        <div className="home-card">
            <ListCard movies={movies} images_Api={images_Api}/>
        </div>
        
      </HomeStyle>
    );
}
