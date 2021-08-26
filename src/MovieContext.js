import react, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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

    return (
        <MovieContext.Provider>
            {props.children}
        </MovieContext.Provider>
    )
}