import { useState } from "react";
import {useFetch} from "./getData";
import { Icon} from "@iconify/react";
import hamburgerMenu from "@iconify-icons/cil/hamburger-menu";
import crossIcon from "@iconify-icons/akar-icons/cross";
import { Header } from "./pages/header/Header";
import { Container } from "./Styled";
import { Home } from "./pages/home/Home";
import {Fader} from "./components/slider/Slider";
import { Route, Switch } from "react-router-dom";
import { Details } from "./pages/details/Details";
import { Category } from "./pages/category/Category";
import LoaderComponent from "./components/loader/Loader";

function App() {
  const trendingtvApi=`https://api.themoviedb.org/3/trending/series/day?api_key=eed93b57e7a406131996aebb2acb0aaa`
  const trendingMoviesApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=eed93b57e7a406131996aebb2acb0aaa`;

  const [movies,loadingMovies] = useFetch(trendingMoviesApi);
  const [series,loadingSeries] =useFetch(trendingtvApi);
 

  const [navbarState, setNavbarState] = useState(false);
  const [iconToggle, seticonToggle] = useState(<Icon icon={hamburgerMenu} />);

  // const search_Api =    "https://api.themoviedb.org/3/search/movie?&api_key=eed93b57e7a406131996aebb2acb0aaa&query=";
  const imagesApi = "https://image.tmdb.org/t/p/w1280";
   
  const toggleClick = (e) => {
    e.preventDefault();
    setNavbarState(!navbarState);
    seticonToggle(
      navbarState ? <Icon icon={hamburgerMenu} /> : <Icon icon={crossIcon} />
    );
  };

  
  
  console.log("movies",movies);
  
  return (
      <>
      {loadingMovies? <LoaderComponent/> :
      <Container>
      <Header
        toggleClick={toggleClick}
        navbarState={navbarState}
        iconButton={iconToggle}
      />
      <Switch>
        <Route exact path="/">
          
            <Fader movies={movies} imagesApi={imagesApi} />
            <Home movies={movies} imagesApi={imagesApi} series={series} loadingSeries={loadingSeries} loadingMovies={loadingMovies}/>
        </Route>
        <Route path="/category/movie/:id" render={({match})=> <Details match={match}/>}/>
        <Route path="/category/tv/:id" render={({match})=> <Details match={match}/>}/>
        <Route path="/category" >
          <Category/>
        </Route>
      </Switch>
      </Container>}
    </>
  );
}
export default App;
