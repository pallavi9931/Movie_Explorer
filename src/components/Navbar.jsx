import "../styles/Navbar.css";
function Navbar({title,favorites,showFavorites,setShowFavorites,selectedCategory,setSelectedCategory})
{
    
    return(
<nav>
    <h1>{title}</h1>
    

    <ul>
        <li onClick={()=>setSelectedCategory("popular")}>Home</li>
        <li onClick={()=>setSelectedCategory("top_rated")}>Trending</li>
        <li onClick={()=>{setSelectedCategory("upcoming")}}>UpComing</li>
        <li onClick={()=>{setSelectedCategory("popular")}}>Top-rated</li>
    </ul>
    <button onClick={()=>setShowFavorites(!showFavorites)}>
      {showFavorites
          ? "🎬 All Movies"
          : `❤️ Favorites (${favorites.length})`}
    </button>
</nav>
    );
}
export default Navbar;