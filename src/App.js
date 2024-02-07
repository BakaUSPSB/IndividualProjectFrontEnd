import "./App.css";
import { NavBar } from "./components/NavBar";
import { TopMovies } from "./components/TopMovies";
import { MoreInfo } from "./components/MoreInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
              </div>
            }
          ></Route>
          <Route path="/moreInfo" element={<MoreInfo></MoreInfo>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
