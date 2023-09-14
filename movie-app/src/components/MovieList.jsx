import React, { useEffect, useState } from "react";
import MovieUnit from "./MovieUnit";
import PosterImage from "./images/Poster.png";
import Navbar from "./NavBar";
import Mainbar from "./MainBar";
// import ';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     // Fetch top-rated movies from TMDB API
  //     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log('API Data:', data); // Corrected syntax
  //         setMovies(data.results);
  //       })
  //       .catch((error) => console.error('Error fetching data:', error));
  //   }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <section className="container-fluid">
        <img src={PosterImage} />
      </section>
      <Mainbar />
      {/* {movies.map((movie) => (
        <MovieUnit key={movie.id} movie={movie} />
      ))} */}
    </div>
  );
};

export default MovieList;
