import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Top 10 Movies</h1>
        <MovieList />
      </header>
    </div>
  );
}

export default App;
