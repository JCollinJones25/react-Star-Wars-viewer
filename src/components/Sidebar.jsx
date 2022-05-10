import { Link } from "react-router-dom";
import movieData from "../data.json";

const Sidebar1 = () => {
  const movies = movieData.movies;

  console.log(movies);

  return (
    <div className="Sidebar">
      {movies.map((movie, idx) => (
        <div className="Movies">
          <Link to={`/movie/${idx}`} key={idx}>
            <img src={`../images/${movie.poster}`} alt={movie.slug} />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar1;
