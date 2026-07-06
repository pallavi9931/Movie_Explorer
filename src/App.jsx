import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import MovieDetailsModal from "./components/MovieDetailsModal";

import {useState,useEffect} from "react";
/*import {getMovies,searchMovies} from "./services/tmdb"; */
import useMovies from "./hooks/useMovies";
function App()
{
 const[showFavorites,setShowFavorites]=useState(false);
const[selectedMovieId,setSelectedMovieId]=useState(null);
const[selectedCategory,setSelectedCategory]=useState("popular");

  const[searchText,setSearchText]=useState("");
 /* const[movies,setMovies]=useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState("");
  */
 
  const[debouncedSearchText,setDebouncedSearchText]=useState("");
  const { movies, loading, error } = useMovies(
    selectedCategory,
    debouncedSearchText
);
  const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");

  if (savedFavorites) {
    return JSON.parse(savedFavorites);
  }

  return [];
});

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
  /*useEffect(()=>
  {
    setLoading(true);
    setError("");
    
    const request=debouncedSearchText.trim()===""?getMovies(selectedCategory):searchMovies(debouncedSearchText);
    request.then((data)=>
    {
      setMovies(data.results);
      setLoading(false);
    })
    .catch((error)=>
    {
      console.log(error);
      setError("Failed to load movies.please try again");
      setLoading(false);
    })
  },[debouncedSearchText,selectedCategory]);
  */
  
 
  return(
<>
<Navbar title="Movie Explorer" favorites={favorites} showFavorites={showFavorites} setShowFavorites={setShowFavorites} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
<SearchBar searchText={searchText} setSearchText={setSearchText}/>

<MovieList searchText={searchText} movies={movies} loading={loading} error={error} setSearchText={setSearchText} favorites={favorites} setFavorites={setFavorites} showFavorites={showFavorites} selectedMovieId={selectedMovieId} setSelectedMovieId={setSelectedMovieId}/>
{
  selectedMovieId && (<MovieDetailsModal movieId={selectedMovieId} onClose={()=>setSelectedMovieId(null)}/>)
}
<Footer/>


</>
  );
}
export default App;