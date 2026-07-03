import MovieCard from "./MovieCard";
import "../styles/MovieList.css";
function MovieList({searchText,movies})
{
    const filteredMovies=movies.filter((movie)=>movie.title.toLowerCase().includes(searchText.toLowerCase()));
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