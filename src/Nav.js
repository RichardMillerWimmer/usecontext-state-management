import React, {useContext} from 'react';
import { MovieContext } from './MovieContext';


const Nav = () => {
    const [movies] = useContext(MovieContext);
    
    return(
       <nav>
          <h2>Richard</h2>
          <h3>Number of Movies: {movies.length}</h3>
       </nav>
    )
}

export default Nav