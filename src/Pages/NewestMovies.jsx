
import { Container } from "@mui/material";
import * as React from 'react';

import MovieList from "../Components/MovieList";

const NewestMovies = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3010/latest-movies")
        .then((response) => response.json())
        .then((latestmovies) => {
            setData(latestmovies.data);            
        });
    }, []);
    
    return (   
                             
        <MovieList category={"Estrenos"} movies={data}/>
             
    );
}
 
export default NewestMovies;