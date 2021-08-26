import React, {useContext} from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieContext';


const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    

    return(
       <div>
           {movies.map(movie => {
               return <Movie name={movie.name} id={movie.id} key={movie.id}/>
           })}
       </div>
    )
}

export default MovieList