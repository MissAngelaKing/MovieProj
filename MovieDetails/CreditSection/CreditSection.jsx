import React from 'react';
import { Link } from 'react-router-dom';
import './CreditSection.css';

const CreditSection = ({ credits }) => {
  if (!credits || credits.cast.length === 0) return null;

  return (
    <div className="credit-section">
      <h2>Main Actors</h2>
      <div className="grid-container">
        {credits.cast.slice(0, 4).map(actor => (
          <div key={actor.id} className="grid-item">
            <Link to={`/actor/${actor.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
              <span>{actor.name}</span>
            </Link>
          </div>
        ))}
      </div>
      {credits.cast[4] && (
        <div className="main-actor">
          <Link to={`/actor/${credits.cast[4].id}`}>
            <img src={`https://image.tmdb.org/t/p/w500/${credits.cast[4].profile_path}`} alt={credits.cast[4].name} />
            <span>{credits.cast[4].name}</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CreditSection;
