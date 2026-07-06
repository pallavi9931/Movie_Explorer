import MovieCard from "./MovieCard";
import "../styles/MovieList.css";
import MovieCardSkeleton from "./MovieCardSkeleton";
import NoMoviesFound from "./NoMoviesFound";
function MovieList({searchText,movies,loading,error,setSearchText,favorites,setFavorites,showFavorites,selectedMovieId,setSelectedMovieId})
{
    const filteredMovies=movies.filter((movie)=>movie.title.toLowerCase().includes(searchText.toLowerCase()));
    let displayedMovies=filteredMovies;
    if(showFavorites)
    {
        displayedMovies=filteredMovies.filter((movie)=>favorites.includes(movie.id));
    }
   if (loading){
      return (
<div className="movie-list">
     {Array.from({length:8}).map((_,index)=>(
        <MovieCardSkeleton key={index}/>
     ))}
</div>
      );
    }
    if(error)
    {
        return <h2>{error}</h2>
    }
    if(filteredMovies.length===0)
    {
        return <NoMoviesFound setSearchText={setSearchText}/>
    }
    return (
<div className="movie-list">
    {
        displayedMovies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie} favorites={favorites} setFavorites={setFavorites} setSelectedMovieId={setSelectedMovieId}/>
        ))
    }

</div>
    )
}
export default MovieList;