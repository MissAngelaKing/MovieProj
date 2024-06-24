import React, { useState, useEffect, useRef } from 'react';
import useMovies from '../../Components/Hooks/UseMovie';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaPlay } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  const { trendingMovies, popularMovies, latestMovies, loading, error } = useMovies();
  const [randomTrendingMovies, setRandomTrendingMovies] = useState([]);
  const [index, setIndex] = useState(0);

  const latestMoviesRef = useRef(null);
  const popularMoviesRef = useRef(null);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      const interval = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % trendingMovies.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [trendingMovies]);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      const getRandomMovies = () => {
        const shuffled = trendingMovies.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
      };
      setRandomTrendingMovies(getRandomMovies());
    }
  }, [trendingMovies, index]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleHover = (direction, sliderRef) => {
    if (direction === 'left') {
      sliderRef.current.slickPrev();
    } else if (direction === 'right') {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='home-page'>
      <div className='movie-section trending-movies'>
        <h2>Trending Movies</h2>
        <div className='movie-grid'>
          {randomTrendingMovies.map(movie => (
            <div key={movie.id} className='movie-item'>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
              <button className='play-button'>
                <FaPlay />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='movie-section latest-movies'>
        <h2>Latest Movies</h2>
        <div className='carousel-hover'>
          <div className='hover-left' onMouseEnter={() => handleHover('left', latestMoviesRef)}></div>
          <div className='hover-right' onMouseEnter={() => handleHover('right', latestMoviesRef)}></div>
          <Slider ref={latestMoviesRef} {...settings}>
            {latestMovies.map(movie => (
              <div key={movie.id} className='movie-item'>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </Link>
                <button className='play-button'>
                  <FaPlay />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className='movie-section popular-movies'>
        <h2>Popular Movies</h2>
        <div className='carousel-hover'>
          <div className='hover-left' onMouseEnter={() => handleHover('left', popularMoviesRef)}></div>
          <div className='hover-right' onMouseEnter={() => handleHover('right', popularMoviesRef)}></div>
          <Slider ref={popularMoviesRef} {...settings}>
            {popularMovies.map(movie => (
              <div key={movie.id} className='movie-item'>
                <Link to={`/movie/${movie.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  <h3>{movie.title}</h3>
                </Link>
                <button className='play-button'>
                  <FaPlay />
                </button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
