import movies from "../data/movies";
import MovieCard from "./MovieCard";
import "../styles/MovieList.css";
function MovieList()
{
    return (
<div className="movie-list">
    {
        movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))
    }

</div>
    )
}
export default MovieList;