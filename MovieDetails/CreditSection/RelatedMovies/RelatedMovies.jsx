import React from 'react';
import Ucard from '../../../Ucard/Ucard'
import './RelatedMovies.css'

const RelatedMovies = ({ relatedMovies }) => {
  if (!relatedMovies || relatedMovies.length === 0) {
    return <div>No related movies available.</div>;
  }

  return (
    <div className="related-movies">
      <h2>Related Movies</h2>
      <div className="related-movies-list">
        {relatedMovies.slice(0, 5).map(movie => (
          <Ucard key={movie.id} item={movie} />
        ))}
      </div>
    </div>
  );
};

export default RelatedMovies;
