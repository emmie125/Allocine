import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { ListCard } from '../card/Card';
import { Details } from '../details/Details';
import { Title } from '../title/Title';
import HomeStyle from './HomeStyle'

export const Home = ({images_Api,movies}) => {
    return (
      <HomeStyle>
        
        <Title title="The recent movies"/>
        <div className="home-card">
            <ListCard movies={movies} images_Api={images_Api}/>
        </div>
        <Title className="Title" title="The movies"/>
        <div className="home-card">
            <ListCard movies={movies} images_Api={images_Api}/>
        </div>
        
      </HomeStyle>
    );
}
