import React, { useState } from "react";

function RentalForm() {
  const [rentalId, setRentalId] = useState("");
  const [rentDate, setRentDate] = useState(new Date().toISOString());
  const [customerId, setCustomerId] = useState("");
  const [staffId, setStaffId] = useState("");
  const [lastUpdate, setLastUpdate] = useState(new Date().toISOString());

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Form submitted:", {
      rentalId,
      rentDate,
      customerId,
      staffId,
      lastUpdate,
    });
  };

  return (
    <div>
      <h2>Rental Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Rental ID:
          <input
            type="text"
            value={rentalId}
            onChange={(e) => setRentalId(e.target.value)}
          />
        </label>
        <label>
          <label>
            Rent Date:
            <input
              type="text"
              value={rentDate}
              onChange={(e) => setRentDate(e.target.value)}
            />
          </label>
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
        <label>
          Last Update:
          <input
            type="text"
            value={lastUpdate}
            onChange={(e) => setLastUpdate(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { RentalForm };
