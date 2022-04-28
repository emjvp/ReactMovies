
import { TextField } from '@mui/material';
import MovieList from '../Components/MovieList';


const MovieFilter = () => {
    
    
    return (
        <>
            <form action="" method="post">
                Buscador
                <br />
                <TextField></TextField>            
            </form>
            <MovieList />
        </>
    );
    
}
 
export default MovieFilter;
