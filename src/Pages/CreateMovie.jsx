import MovieForm from "../Components/MovieForm";
import { Container } from "@mui/material";


const CreateMovie = () => {
    return (         
        <Container maxWidth="sm">
            <h1>Crear Película</h1>
            <MovieForm/>
        </Container>        
     );
}
 
export default CreateMovie;