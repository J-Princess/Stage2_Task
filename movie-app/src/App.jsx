import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import './index.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Mainbar from './components/MainBar';


const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="user-container" >
      <h2>An Error Has Occurred somewhere in your code</h2>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Go Home</button>
    
    </div>
  );
};


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <MovieList /> */}
   
      <Routes>

        <Route path='/' element={<MovieList />} />
    {/* <Route path="/movie/:id">
          <Mainbar />
        </Route> */}
        <Route path="/movie/:id"  element={<Mainbar />} />
        {/* Add more routes as needed */}

    </Routes>
    </div>
  );
}

export default App;
