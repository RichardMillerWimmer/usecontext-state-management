import React, {useState, useContext} from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState(null);
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateId = (e) => {
        setId(e.target.value)
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, id: id}])
    }

    return(
        <form onSubmit={addMovie}>
            <input type='text' name='name' value={name} onChange={updateName}/>
            <input type='number' name='id'value={id} onChange={updateId}/>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;