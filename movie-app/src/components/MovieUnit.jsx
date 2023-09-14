import React, { useEffect, useState } from 'react';

const MovieUnit = ({ movie }) => {
  const [movieImages, setMovieImages] = useState([]);

  // useEffect(() => {
  //   const fetchMovieImages = async () => {
  //     const apiKey = '27379da32e0ad1910ce97a137ffcc04b'; // Replace with your TMDB API key
  //     const movieId = movie.id; // Use the actual movie ID

  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         // Assuming you want to extract images from the response data
  //         setMovieImages(data.backdrops);
  //       } else {
  //         console.error('Failed to fetch movie images');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching movie images:', error);
  //     }
  //   };

  //   fetchMovieImages();
  // }, [movie.id]);

  return (
    <div className="movie-card" data-testid="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
      />
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">{movie.release_date}</p>

      {/* Display fetched movie images */}
      {movieImages.map((image) => (
        <img
          key={image.file_path}
          src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
          alt={`Image for ${movie.title}`}
        />
      ))}
    </div>
  );
};


export default MovieUnit;
