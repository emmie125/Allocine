import { useEffect, useState } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import hamburgerMenu from "@iconify-icons/cil/hamburger-menu";
import crossIcon from "@iconify-icons/akar-icons/cross";
import { Header } from "./components/header/Header";
import { Container } from "./Styled";
import { Home } from "./components/home/Home";
import {Fader} from "./components/slider/Slider";
import { Route, Switch } from "react-router-dom";
import { Details } from "./components/details/Details";
import { Category } from "./components/category/Category";

function App() {
  const [movies, SetMovies] = useState([]);
  const [series, SetSeries] = useState([]);
  const [genres, setGenres] = useState([]);

  const [navbarState, setNavbarState] = useState(false);
  const [iconToggle, seticonToggle] = useState(<Icon icon={hamburgerMenu} />);

  const trendingtvApi=`https://api.themoviedb.org/3/trending/series/day?api_key=eed93b57e7a406131996aebb2acb0aaa`
  const trendingMoviesApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=eed93b57e7a406131996aebb2acb0aaa`;
  const search_Api =
    "https://api.themoviedb.org/3/search/movie?&api_key=eed93b57e7a406131996aebb2acb0aaa&query=";
  const imagesApi = "https://image.tmdb.org/t/p/w1280";
    const moviesGenresApi =
      "https://api.themoviedb.org/3/genre/movie/list?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US";

  const toggleClick = (e) => {
    e.preventDefault();
    setNavbarState(!navbarState);
    seticonToggle(
      navbarState ? <Icon icon={hamburgerMenu} /> : <Icon icon={crossIcon} />
    );
  };

  async function getTrending(){
    const resultsMovies = await fetch(trendingMoviesApi);
    let dataMovies = await resultsMovies.json();
    SetMovies(dataMovies.results);
    const resultseries = await fetch(trendingtvApi);
    let dataseries = await resultseries.json();
    dataseries=dataseries.results;
    
    SetSeries(dataseries);
    
  }
  useEffect(() => {
      getTrending();

       fetch(moviesGenresApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.genres);
        setGenres(data.genres);
      });
  }, []);

  const getMoviesByGenre = () => {
    const moviesByGenre = [];
    for (let genre of genres) {
      const foundMovies = [];
      for (let movie of movies) {
        if (movie.genre_ids.includes(genre.id)) {
          foundMovies.push({
            title: movie.title,
            overview: movie.overview,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
          });
        }
      }
      moviesByGenre.push({ ...genre, movies: foundMovies });
    }
    return moviesByGenre;
  };
  
  console.log(series);
  
  return (
    <Container>
      <Header
        toggleClick={toggleClick}
        navbarState={navbarState}
        iconButton={iconToggle}
      />
      <Switch>
        <Route exact path="/">
          
            <Fader movies={movies} imagesApi={imagesApi} />
            <Home movies={movies} imagesApi={imagesApi} series={series} />
        </Route>
        <Route path="/movie/:id" render={({match})=> <Details match={match}/>}/>
        <Route path="/tv/:id" render={({match})=> <Details match={match}/>}/>
        <Route path="/category" >
          <Category/>
        </Route>
      </Switch>
    </Container>
  );
}
export default App;
