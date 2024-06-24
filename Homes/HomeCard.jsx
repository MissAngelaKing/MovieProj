import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ item: { id, poster_path, title, vote_average = "N/A", release_date = "N/A", overview, genre_ids = [] } }) => {
  return (
    <div className='box'>
      <div className='coverImage'>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      </div>
      <div className='content flex'>
        <div className='details row'>
          <h1>{title}</h1>
          <div className='rating flex'>
            <div className='rate'>
              <i className='fas fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star-half'></i>
            </div>
            <label>{vote_average}(IMDb)</label>
            <span>GP</span>
            <label>{release_date}</label>
          </div>
          <p>{overview}</p>
          <div className='cast'>
            <h4>
              <span>Genres </span>
              {genre_ids.join(", ")}
            </h4>
          </div>
          <button className='primary-btn'>
            <i className='fas fa-play'></i> PLAY NOW
          </button>
        </div>
        <div className='playButton row'>
          <Link to={`/singlepage/${id}`}>
            <button>
              <div className='img'>
                <img src='./images/play-button.png' alt='' />
                <img src='./images/play.png' className='change' />
              </div>
              WATCH TRAILER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
