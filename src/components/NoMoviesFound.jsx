import "../styles/NoMoviesFound.css";

function NoMoviesFound({setSearchText})
{
    return(
       <div className="no-movies">
        <div className="no-movies-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"></svg>
        </div>
        <h2>No Movies Found</h2>
        <p>We could not find any movies matching your search.</p>
        <span>Try searching with another movie title.</span>
         <button onClick={()=>setSearchText("")}> Clear Search</button>
       </div>

    
    );
}
export default NoMoviesFound;