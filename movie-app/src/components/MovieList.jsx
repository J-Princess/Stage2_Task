import React, { useEffect, useState } from 'react';
import MovieUnit from './MovieUnit';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch top-rated movies from TMDB API
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieUnit key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
