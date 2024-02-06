import "./App.css";
import { NavBar } from "./components/NavBar";
import { TopMovies } from "./components/TopMovies";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <TopMovies></TopMovies>
    </div>
  );
}

export default App;
