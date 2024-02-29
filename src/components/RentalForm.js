import React, { useState } from "react";

function RentalForm() {
  const [filmId, setFilmId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [staffId, setStaffId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      filmId,
      customerId,
      staffId,
    });
  };

  return (
    <div>
      <h2>Rental Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Film ID:
          <input
            type="text"
            value={filmId}
            onChange={(e) => setFilmId(e.target.value)}
          />
        </label>
        <label>
          Customer ID:
          <input
            type="text"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </label>
        <label>
          Staff ID:
          <input
            type="text"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { RentalForm };
