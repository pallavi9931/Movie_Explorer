const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL="https://api.themoviedb.org/3";

export const getMovies=(category)=>
{
    return fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`)
    .then((res)=>res.json());
};

export const searchMovies=(query)=>
{
    return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((res)=>res.json());
};

export const getMoviesDetails=(movieId)=>
{
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then((res)=>res.json());
};