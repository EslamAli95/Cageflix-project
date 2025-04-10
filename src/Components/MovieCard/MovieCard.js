import "./MovieCard.css";
import poster from "./Cinema_Background.jpg";
function MovieCard({ title, year, genres }) {
  return (
    <div className="card">
      <div className="poster">
        <img src={poster} />
      </div>

      <div className="details">
        <div className="title">
          <h2 className="title">{title}</h2>
        </div>

        <span className="year-genres">
          <p className="year">{year}</p>
          <p className="genres">
            {genres.length > 0 ? genres.join(", ") : "No genres available"}
          </p>
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
