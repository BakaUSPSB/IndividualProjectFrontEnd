import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoreInfo = () => {
  const location = useLocation();
  const filmId = location.state; // Extract movie ID from state

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `http://localhost:5000/moreinfo/${filmId}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [filmId]);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Release Year: {movie.release_year}</p>
          <p>Length in minutes: {movie.length}</p>
          <p>Genre: {movie.genre}</p>
          <p>Actors: {movie.actors}</p>
          {/* Add more movie details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { MoreInfo };
