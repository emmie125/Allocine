import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { ListCard } from '../card/Card';
import { Details } from '../details/Details';
import { Title } from '../title/Title';
import HomeStyle from './HomeStyle'

export const Home = ({imagesApi,movies,series,onClick}) => {
    return (
      <HomeStyle>
        
        <div className="containerTrending">
            <Title title="Recent movies"  />
            <div className="card">
                <ListCard movies={movies} imagesApi={imagesApi} position={20} onClick={onClick}/>
            </div>
        </div>
       <div className="containerTrending">
        <Title  title="Recent on Tv"/>
          <div className="card">
              <ListCard movies={series} imagesApi={imagesApi} position={20} onClick={onClick}/>
          </div>
       </div>
        
      </HomeStyle>
    );
}
