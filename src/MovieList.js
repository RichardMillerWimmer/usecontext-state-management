import react, {useState} from 'react';
import Movie from './Movie';


const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Interstellar',
            id: 1
        },
        {
            name: 'A New Hope',
            id: 2
        },
        {
            name: 'The Hobbit',
            id: 3
        },
        {
            name: 'Inception',
            id: 4
        }
    ]);

    // console.log(movies)

    return(
       <div>
           {movies.map(movie => {
               return <Movie name={movie.name} id={movie.id} key={movie.id}/>
           })}
       </div>
    )
}

export default MovieList