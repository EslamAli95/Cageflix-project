import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import MovieCard from "../MovieCard/MovieCard";
import NavBar from "../NavBar/NavBar";
import "./MainPage.css";

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/cageflix.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const fuseOptions = {
    keys: ["title", "genres"],
    threshold: 0.4,
  };

  useEffect(() => {
    if (!searchTerm) {
      setFilteredMovies(movies);
    } else {
      const fuse = new Fuse(movies, fuseOptions);
      const results = fuse.search(searchTerm);
      setFilteredMovies(results.map((result) => result.item));
    }
  }, [searchTerm, movies]);

  return (
    <>
      <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
            />
          ))
        ) : (
          <p className="no-results">No movies found.</p>
        )}
      </div>
    </>
  );
}

export default MainPage;
