import "../styles/MovieCard.css";
function MovieCard({movie,favorites,setFavorites,setSelectedMovieId})
{
    const isFavorite=favorites.includes(movie.id);
    const handleFavorite=()=>{
        if(isFavorite)
        {
    const newFavorites=favorites.filter((id)=>id!==movie.id);
            setFavorites(newFavorites);
        }
        else{
          setFavorites(  [...favorites,movie.id]);
        }
    }

    return (
<div className="movie-card">
<img 
 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
 alt={movie.title}/>
<div className="movie-info">
<h3>{movie.title}</h3>
<p>{movie.vote_average}</p>
<p>{movie.release_date}</p>
<div className="card-buttons">
   <button onClick={handleFavorite}>
    {isFavorite ? "❤️ " :"🤍 "}</button> 
   <button onClick={()=>setSelectedMovieId(movie.id)}>View Details</button> 
</div>
</div>
</div>
    );
}
export default MovieCard;