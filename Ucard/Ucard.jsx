// Ucard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import './Ucard.css';

const Ucard = ({ item }) => {
  return (
    <div className="ucard">
      <Link to={`/movie/${item.id}`} className="movie-link">
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
        <div className="overlay">
          <FaPlay className="play-icon" />
        </div>
        <h3>{item.title}</h3>
      </Link>
    </div>
  );
};

export default Ucard;
