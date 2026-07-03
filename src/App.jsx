import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
function App()
{

  return(
<>
<Navbar title="Movie Explorer"/>
<SearchBar/>
<MovieList/>
<Footer/>


</>
  );
}
export default App;