import MovieCard from "./MovieCard";
import "../styles/MovieList.css";
import MovieCardSkeleton from "./MovieCardSkeleton";
function MovieList({searchText,movies,loading,error})
{
    const filteredMovies=movies.filter((movie)=>movie.title.toLowerCase().includes(searchText.toLowerCase()));
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
    return (
<div className="movie-list">
    {
        filteredMovies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))
    }

</div>
    )
}
export default MovieList;