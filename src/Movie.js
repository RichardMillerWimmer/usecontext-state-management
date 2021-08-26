import react from 'react';



const Movie = (props) => {
    

    return(
       <div>
           <h3>{props.name}</h3>
           <p>id: {props.id}</p>
       </div>
    )
}

export default Movie