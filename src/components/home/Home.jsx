import React from 'react'
import { ListCard } from '../card/Card';
import { Title } from '../title/Title';
import HomeStyle from './HomeStyle'

export const Home = ({images_Api,movies}) => {
    return (
      <HomeStyle>
        
        <Title title="The recent movies"/>
        <div className="home-card">
            <ListCard movies={movies} images_Api={images_Api}/>
        </div>
        
      </HomeStyle>
    );
}
