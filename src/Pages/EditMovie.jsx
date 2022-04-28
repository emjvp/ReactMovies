import MovieForm from "../Components/MovieForm";
import { Container } from "@mui/material";


const EditMovie = () => {
    return (         
        <Container maxWidth="sm">
            <h1>Editar Película</h1>
            <MovieForm/>
        </Container>        
     );
}
 
export default EditMovie;