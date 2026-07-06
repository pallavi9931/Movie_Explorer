import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import MovieDetailsModal from "./components/MovieDetailsModal";

import {useState,useEffect} from "react";
function App()
{
  const[searchText,setSearchText]=useState("");
  const[movies,setMovies]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");
  const[debouncedSearchText,setDebouncedSearchText]=useState("");
  const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");

  if (savedFavorites) {
    return JSON.parse(savedFavorites);
  }

  return [];
});
const[showFavorites,setShowFavorites]=useState(false);
const[selectedMovieId,setSelectedMovieId]=useState(null);

useEffect(()=>
{
  localStorage.setItem("favorites",JSON.stringify(favorites));
},[favorites]);
  useEffect(()=>{
  const timer=setTimeout(()=>
  {
    setDebouncedSearchText(searchText);
  },500);
  return ()=>clearTimeout(timer);
  },[searchText]);
  useEffect(()=>
  {
    setLoading(true);
    setError("");
    let url = "";
    if(debouncedSearchText.trim() === "")
    {
      url=`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${debouncedSearchText}`;
    }
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.results);
      setLoading(false);
    })
    .catch((error)=>
    {
      console.log(error);
      setError("Failed to load movies.please try again");
      setLoading(false);
    })
  },[debouncedSearchText]);
 
console.log(selectedMovieId);
  return(
<>
<Navbar title="Movie Explorer" favorites={favorites} showFavorites={showFavorites} setShowFavorites={setShowFavorites}/>
<SearchBar searchText={searchText} setSearchText={setSearchText}/>

<MovieList searchText={searchText} movies={movies} loading={loading} error={error} setSearchText={setSearchText} favorites={favorites} setFavorites={setFavorites} showFavorites={showFavorites} selectedMovieId={setSelectedMovieId} setSelectedMovieId={setSelectedMovieId}/>
{
  selectedMovieId && (<MovieDetailsModal movieId={selectedMovieId} onClose={()=>setSelectedMovieId(null)}/>)
}
<Footer/>


</>
  );
}
export default App;