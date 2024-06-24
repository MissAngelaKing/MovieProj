import React from 'react'

const MovieDetails = ({movie}) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.release_date}</p>
      <p>Runtime: {movie.runtime} minutes</p>
      <p>Language: {movie.original_language}</p>
      <p>Rating: {movie.vote_average} ({movie.vote_count} votes)</p>
      <p>Director: {movie.credits.crew.find(member => member.job === 'Director').name}</p>
      <p>Overview: {movie.overview}</p>
    </div>
  )
}

export default MovieDetails
