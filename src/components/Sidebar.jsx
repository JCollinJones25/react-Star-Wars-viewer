import { Link } from "react-router-dom";
import movieData from "../data.json";

const Sidebar = () => {
  const movies = movieData.movies;

  const middleIndex = Math.ceil(movies.length / 2)

  
  const prequels = movies.splice(0, middleIndex)
  console.log(prequels)
  const originals = movies.splice(-middleIndex)
  console.log(originals)

 

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
