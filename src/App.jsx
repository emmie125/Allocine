import { useEffect, useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import { Card, Grid, Segment} from 'semantic-ui-react'
import hamburgerMenu from '@iconify-icons/cil/hamburger-menu';
import crossIcon from '@iconify-icons/akar-icons/cross';
import {Header} from './components/header/Header';
import CardExampleCard from './components/card/Card';
import{Container} from './Styled';



function App() {
    const [movies,setMovies]=useState([]);
    const [genres,setGenres]=useState([]);

    const [etatNavbar,setNavbar] = useState(false);
    const [iconToggle,seticonToggle]= useState(<Icon icon={hamburgerMenu} />);

    const featured_Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eed93b57e7a406131996aebb2acb0aaa&page=1`;
    const search_Api = "https://api.themoviedb.org/3/search/movie?&api_key=eed93b57e7a406131996aebb2acb0aaa&query=";
    const images_Api = "https://image.tmdb.org/t/p/w1280";
    const genreMovies_Api="https://api.themoviedb.org/3/genre/movie/list?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US";
   
    const toggleClick=(e)=>{
     e.preventDefault();
     setNavbar(!etatNavbar);
     seticonToggle(etatNavbar?<Icon icon={hamburgerMenu} />:<Icon icon={crossIcon} />)
 
    }

    useEffect(() => {
      fetch(featured_Api)
        .then((res) => res.json())
        .then(data =>{
            console.dir(data.results);
            setMovies(data.results);
        });
        fetch(genreMovies_Api)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.genres);
            setGenres(data.genres)
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
                release_date:movie.release_date
              });
            }
          }
          moviesByGenre.push({ ...genre, movies: foundMovies });
        }
        return moviesByGenre;
      };
      console.log(getMoviesByGenre());
  
    
    return (
      <Container>
        <Header
          toggleClick={toggleClick}
          etatNavbar={etatNavbar}
          iconButton={iconToggle}
        />
        <section>
          
          
        </section>
      </Container>
    );
}
export default App;

