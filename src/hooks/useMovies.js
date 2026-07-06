import { useEffect, useState } from "react";
import { getMovies, searchMovies } from "../services/tmdb";

function useMovies(selectedCategory, debouncedSearchText) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");



    
    useEffect(() => {
    setLoading(true);
    setError("");

    const request =
        debouncedSearchText.trim() === ""
            ? getMovies(selectedCategory)
            : searchMovies(debouncedSearchText);

    request
        .then((data) => {
            setMovies(data.results);
        })
        .catch(() => {
            setError("Failed to load movies. Please try again.");
        })
        .finally(() => {
            setLoading(false);
        });
}, [debouncedSearchText, selectedCategory]);
return {
    movies,
    loading,
    error,
};
}
export default useMovies;