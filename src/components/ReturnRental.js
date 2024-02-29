import React, { useState, useEffect } from "react";
import axios from "axios";

function ReturnRental() {
  const [customerId, SetCustomerId] = useState("");
  const [rentalId, setRentalId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/return_rental", {
        customerId,
        rentalId,
      });
      console.log("Response from backend:", response.data);
      // Optionally handle success response from backend
    } catch (error) {
      console.error("Error sending data to backend:", error);
      // Optionally handle error response from backend
    }
  };

  return (
    <div>
      <h2>Return DVD</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Id:
          <input
            type="text"
            value={customerId}
            onChange={(e) => SetCustomerId(e.target.value)}
          />
        </label>
        <label>
          Rental Id:
          <input
            type="text"
            value={rentalId}
            onChange={(e) => setRentalId(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { ReturnRental };
