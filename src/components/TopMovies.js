import React, { useState, useEffect } from "react";

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
      <ul>
        {topMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export { TopMovies }; // Named export instead of export default
