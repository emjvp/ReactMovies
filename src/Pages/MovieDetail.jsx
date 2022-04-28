import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const { id } = useParams();
    console.log(id)
    return (<>Movie Detail</>);
}
 
export default MovieDetail;