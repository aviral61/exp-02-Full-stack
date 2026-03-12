import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Details</h1>
      <p>Showing details for movie ID: {id}</p>
    </div>
  );
}

export default MovieDetails;