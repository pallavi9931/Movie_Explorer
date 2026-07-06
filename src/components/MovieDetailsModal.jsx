import {useEffect,useState} from "react";
import "../styles/MovieDetailsModal.css";
function MovieDetailsModal({movieId,onClose})
{
    const[movie,setMovie]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");

    useEffect(()=>
    {
        setLoading(true);
        setError("");
      fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      )
      .then((res)=>res.json())
      .then((data)=>
    {
        setMovie(data);
        setLoading(false);
    })
    .catch(()=>
    {
        setError("failed to load movie details");
        setLoading(false);
    });
    },[movieId]);
    if(loading)
    {
        return <h2>Loading...</h2>
    }
    if (error)
    {
        return <h2>{error}</h2>
    }
    return(
        <div className="modal-overlay">
            <div className="movie-modal">
              <button className="close-btn" onClick={onClose}> close </button>

              <div className="modal-content">
               <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-details">
  <h2>{movie.title}</h2>

          <p>⭐ {movie.vote_average}</p>

          <p>📅 {movie.release_date}</p>

          <p>🌍 {movie.original_language.toUpperCase()}</p>

          <p>⏱ {movie.runtime} min</p>

          <p>{movie.overview}</p>
        </div>
              </div>
            </div>

        </div>
    );
}
export default MovieDetailsModal;