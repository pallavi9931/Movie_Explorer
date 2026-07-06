import "../styles/Navbar.css";
function Navbar({title,favorites,showFavorites,setShowFavorites})
{
    return(
<nav>
    <h1>{title}</h1>
    

    <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Popular</li>
        <li>Favorites</li>
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