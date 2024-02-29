import "./App.css";
import { NavBar } from "./components/NavBar";
import { TopMovies } from "./components/TopMovies";
import { MoreInfo } from "./components/MoreInfo";
import { TopActors } from "./components/TopActors";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MoreActor } from "./components/MoreActor";
import { RentalForm } from "./components/RentalForm";
import { ListCustomers } from "./components/ListCustomers";
import { AddCustomer } from "./components/AddCustomer";
import { RemoveCustomer } from "./components/RemoveCustomer";
import { ReturnRental } from "./components/ReturnRental";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-content">
                <TopMovies></TopMovies>
                <div className="main-content-side">
                  <TopActors></TopActors>
                </div>
                <Link to="/rental-form" style={{ color: "white" }}>
                  <div>
                    <br></br>
                    <mark>Rental Form</mark>
                  </div>
                </Link>
                <Link to="/customers" style={{ color: "white" }}>
                  <div>
                    <br></br>
                    <mark>List Customers</mark>
                  </div>
                </Link>
                <Link to="/newcustomer" style={{ color: "white" }}>
                  <div>
                    <br></br>
                    <mark>Add Customer</mark>
                  </div>
                </Link>
                <Link to="/remove" style={{ color: "white" }}>
                  <div>
                    <br></br>
                    <mark>Remove Customer</mark>
                  </div>
                </Link>
                <Link to="/returnRental" style={{ color: "white" }}>
                  <div>
                    <br></br>
                    <mark>Return DVD</mark>
                  </div>
                </Link>
              </div>
            }
          ></Route>
          <Route
            path="/topactors"
            element={
              <div>
                <TopActors></TopActors>
              </div>
            }
          ></Route>
          <Route
            path="/moreinfo"
            element={
              <div className="main-content">
                <MoreInfo></MoreInfo>
              </div>
            }
          ></Route>
          <Route
            path="/moreactor"
            element={
              <div className="main-content">
                <MoreActor></MoreActor>
              </div>
            }
          ></Route>
          <Route
            path="/rental-form"
            element={
              <div className="main-content">
                <RentalForm></RentalForm>
              </div>
            }
          ></Route>
          <Route
            path="/customers"
            element={
              <div className="main-content">
                <ListCustomers></ListCustomers>
              </div>
            }
          ></Route>
          <Route
            path="/newcustomer"
            element={
              <div className="main-content">
                <AddCustomer></AddCustomer>
              </div>
            }
          ></Route>
          <Route
            path="/remove"
            element={
              <div className="main-content">
                <RemoveCustomer></RemoveCustomer>
              </div>
            }
          ></Route>
          <Route
            path="/returnRental"
            element={
              <div className="main-content">
                <ReturnRental></ReturnRental>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
