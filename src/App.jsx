import ResponsiveBar from "./Components/ResponsiveBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateMovie from "./Pages/CreateMovie.jsx";
import EditMovie from "./Pages/EditMovie.jsx";
import NewestMovies from "./Pages/NewestMovies.jsx";
import MovieDetail from "./Pages/MovieDetail.jsx";
import MovieFilter from "./Pages/MovieFilter.jsx";


function App() {  
  
  return (    
    <Router>      
      <ResponsiveBar/>        
      <Routes>
        <Route exact path='/' element={<NewestMovies/>}/>          
        <Route path='/create-movie' element={<CreateMovie/>}/>          
        <Route path='/edit-movie' element={<EditMovie/>}/> 
        <Route path='/movies/:id' element={<MovieDetail/>}/> 
        <Route path='/movies-filter' element={<MovieFilter/>}/> 
      </Routes>        
    </Router>
    
  );
}

export default App;
