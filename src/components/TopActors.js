import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopActors = () => {
  const [topActors, setTopActors] = useState([]);

  useEffect(() => {
    async function fetchTopActors() {
      try {
        const response = await fetch("http://localhost:5000/topactors");
        const data = await response.json();
        setTopActors(data);
      } catch (error) {
        console.error("Error fetching top actors:", error);
      }
    }

    fetchTopActors();
  }, []);

  return (
    <div>
      <br></br>
      <br></br>
      <b>Top 5 Actors</b>
      <br></br>
      <br></br>
      <ul>
        {topActors.map((actor, index) => (
          <li key={actor.actor_id}>
            <Link
              to="/moreactor"
              state={actor.actor_id}
              style={{ color: "white" }}
            >
              {actor.actor_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TopActors };
