import "../styles/Navbar.css";
function Navbar(props)
{
    return(
<nav>
    <h2>{props.title}</h2>

    <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Popular</li>
        <li>Favorites</li>
    </ul>
</nav>
    );
}
export default Navbar;