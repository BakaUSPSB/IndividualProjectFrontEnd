import React, { useState, useEffect } from "react";
import axios from "axios";

function AddCustomer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressId, setAddressId] = useState(""); // Foreign key for address
  const [storeId, setStoreId] = useState(""); // Foreign key for store
  const [email, setEmail] = useState(""); // To store address options
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/new_customer", {
        firstName,
        lastName,
        addressId,
        storeId,
        email,
        phone,
        postalCode,
        city,
        district,
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
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email (Otpional):
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={addressId}
            onChange={(e) => setAddressId(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          District:
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Postal Code:
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Store ID:
          <input
            type="text"
            value={storeId}
            onChange={(e) => setStoreId(e.target.value)}
          />
        </label>
        <br></br> <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { AddCustomer };
