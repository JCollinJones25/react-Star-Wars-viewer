import { Link } from "react-router-dom";
import data from "../data.json";

const Sidebar = () => {

  const movies = data.movies;
console.log(movies)
  const middleIndex = Math.ceil(movies.length / 2)
  const prequels = movies.splice(0, middleIndex)
  const originals = movies.splice(-middleIndex)

  
  return (
    <>
    <div className="SidebarLeft">
      {prequels.map((movie, idx) => (
        <div className="Movies">
          <Link to={`/movie/${idx}`} key={idx}>
            <img src={`../images/${movie.poster}`} alt={movie.slug} />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
    <div className="SidebarRight">
      {originals.map((movie, idx) => (
        <div className="Movies">
          <Link to={`/movie/${idx}`} key={idx}>
            <img src={`../images/${movie.poster}`} alt={movie.slug} />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
      </>
  );
};

export default Sidebar;
