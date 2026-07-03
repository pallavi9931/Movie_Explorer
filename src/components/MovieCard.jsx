import "../styles/MovieCard.css";
function MovieCard({movie})
{
    return (
<div className="movie-card">
<img src={movie.poster} alt={movie.title}/>
<div className="movie-info">
<h3>{movie.title}</h3>
<p>{movie.rating}</p>
<p>{movie.year}</p>
<div className="card-buttons">
   <button>Favorite</button> 
   <button>View Details</button> 
</div>
</div>
</div>
    );
}
export default MovieCard;