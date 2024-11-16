import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { title, id} = movie;
  return (
    <article>
      <h2>{title}</h2>
      {<Link to={`/movie/${id}`}>View Movie</Link>}
    </article>
  );
}

export default MovieCard;
