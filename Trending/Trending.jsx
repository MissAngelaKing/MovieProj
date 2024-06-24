import React from 'react';

const Trending = ({ items }) => {
  return (
    <div>
      <h2>Trending Movies</h2>
      <div className="trending-container">
        {items.map((movie) => (
          <div key={movie.id} className="trending-item">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

