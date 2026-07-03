import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import {useState,useEffect} from "react";
function App()
{
  const[searchText,setSearchText]=useState("");
  const[movies,setMovies]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>
  {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.results);
      setLoading(false);
    })
    .catch((error)=>
    {
      console.log(error);
      setLoading(false);
    })
  },[]);
 

  return(
<>
<Navbar title="Movie Explorer"/>
<SearchBar searchText={searchText} setSearchText={setSearchText}/>

<MovieList searchText={searchText} movies={movies} loading={loading}/>
<Footer/>


</>
  );
}
export default App;