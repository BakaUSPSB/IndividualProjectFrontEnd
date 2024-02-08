import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const MoreActor = () => {
  const location = useLocation();
  const id = location.state; // Extract movie ID from state
  const [actorDetails, setActorDetails] = useState(null);

  useEffect(() => {
    async function fetchActorDetails() {
      try {
        const response = await fetch(`http://localhost:5000/moreactor/${id}`);
        const data = await response.json();
        setActorDetails(data);
      } catch (error) {
        console.error("Error fetching actor details:", error);
      }
    }

    fetchActorDetails();
  }, [id]);

  return (
    <div>
      {actorDetails ? (
        <div>
          <h2>Actor Details</h2>
          <p>Actor ID: {actorDetails.actor_id}</p>
          <h3>Top Movies:</h3>
          <ul>
            {actorDetails.top_movies.map((movie) => (
              <li key={movie.film_id}>
                <div>
                  <strong>{movie.title}</strong>
                  <p>Description: {movie.description}</p>
                  <p>Release Year: {movie.release_year}</p>
                  <p>Length: {movie.length}</p>
                  <p>Total Rental Score: {movie.total_rental_score}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { MoreActor };
