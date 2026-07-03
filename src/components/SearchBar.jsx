
import "../styles/SearchBar.css";
function SearchBar({searchText,setSearchText})
{

    return (
<section className="search-container">
<h1>Find your Favorite Movies</h1>
<input type="text" placeholder="Search for Movies..." value={searchText} 
onChange={(e)=>setSearchText(e.target.value)}/>
<p>Searching for:<strong>{searchText || "nothing yet"}</strong></p>
</section>
    );
}
export default SearchBar;