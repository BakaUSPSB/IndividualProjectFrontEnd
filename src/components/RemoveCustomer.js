import React, { useState, useEffect } from "react";
import axios from "axios";

function RemoveCustomer() {
  const [customerId, SetCustomerId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/remove", {
        customerId,
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
      <h2>Remove Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Id:
          <input
            type="text"
            value={customerId}
            onChange={(e) => SetCustomerId(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { RemoveCustomer };
