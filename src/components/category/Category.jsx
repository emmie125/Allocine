import Button from "../button/Button";
import { CategoryStyle } from "./CategoryStyle";
import { useEffect, useState } from "react";
import { ListCard } from "../card/Card";
import { Link } from "react-router-dom";


export const Category = () => {
    const [genres, setGenres]= useState([]);
    const [movies,setMovies] = useState([]);
    const [moviepage,setMoviepage]=useState(1);

   
    const genreMovies_Api = "https://api.themoviedb.org/3/genre/movie/list?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US";
    const imagesApi = "https://image.tmdb.org/t/p/w1280";
    

    useEffect(() => {
        fetch(genreMovies_Api).then((response) =>response.json()).then(data=>{
            setGenres(data.genres);
        })
       
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${moviepage}&with_watch_monetization_types=flatrate`
        )
          .then((response) => response.json())
          .then((data) => {
            const moviesData =  data.results
            for (const movie of moviesData) {
              movie.media_type="movie" 
            }
            setMovies(moviesData);
            
          });
    },[moviepage])
   
    const getMoviesByGenre = (id) => {
      const discoveryMovies_Api = `https://api.themoviedb.org/3/discover/movie?api_key=eed93b57e7a406131996aebb2acb0aaa&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`;
      
      // fetch(discoveryMovies_Api).then(response =>response).then(data=>{
      //   const moviesData =  data.results
      //       for (const movie of moviesData) {
      //         movie.media_type="movie" 
      //       }
       
      // })
    }
    console.log("movies",movies);
    console.log(genres);
    return (
      <CategoryStyle>
        <div>
          <div className="category">
            <Link><Button   btndetails label="All" /></Link>
            <Link><Button btndetails label="Movie" /></Link>
            <Link> <Button btndetails label="Tv" /></Link>
          </div>
        </div>
        
        <hr />
        <div className="genres">
          {genres === undefined ||
            genres.map((genre) => {
              return (
                <>
                  <Button label={genre.name} btngenre onClick={()=>getMoviesByGenre(genres.id)}/>
                </>
              );
            })}
        </div>
        <hr />
        <div className="listCard">
        <ListCard movies={movies} imagesApi={imagesApi} position={20}/>
        </div>
      </CategoryStyle>
    );
}
