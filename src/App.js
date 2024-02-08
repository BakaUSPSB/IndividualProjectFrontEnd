import "./App.css";
import { NavBar } from "./components/NavBar";
import { TopMovies } from "./components/TopMovies";
import { MoreInfo } from "./components/MoreInfo";
import { TopActors } from "./components/TopActors";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MoreActor } from "./components/MoreActor";
import { RentalForm } from "./components/RentalForm"; // Import the RentalForm component

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
                    <mark>Go to Rental Form</mark>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
