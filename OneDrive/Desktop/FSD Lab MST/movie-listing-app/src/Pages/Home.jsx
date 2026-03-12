import { Link } from "react-router-dom";
import Movie from "../components/Movie";

const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "The Dark Knight", year: 2008 },
];

function Home() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Movie Listings</h1>
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Movie title={movie.title} year={movie.year} />
        </Link>
      ))}
    </div>
  );
}

export default Home;