import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopMovies = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    async function fetchTopMovies() {
      try {
        const response = await fetch("http://localhost:5000/topmovies");
        const data = await response.json();
        setTopMovies(data);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    }

    fetchTopMovies();
  }, []);

  return (
    <div>
      <b>Top 5 Movies</b>
      <br></br>
      <br></br>
      <ul>
        {topMovies.map((movie) => (
          <li key={movie.film_id}>
            <Link
              to="/moreInfo"
              state={movie.film_id}
              style={{ color: "white" }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TopMovies }; // Named export instead of export default
