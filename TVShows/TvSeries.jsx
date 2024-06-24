import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './TvSeries.css';

const TvSeries = () => {
  const [tvSeries, setTvSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  const fetchTvSeries = async (url) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTvSeries(data.results);
    } catch (error) {
      console.error('Error fetching TV series:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const genre = params.get('genre');
    let url = '';

    if (category) {
      url = `https://api.themoviedb.org/3/tv/${category}?api_key=d1296bd66e7521efa2f1facf5b9ea2fe`;
    } else if (genre) {
      url = `https://api.themoviedb.org/3/discover/tv?api_key=d1296bd66e7521efa2f1facf5b9ea2fe&with_genres=${genre}`;
    } else {
      url = `https://api.themoviedb.org/3/tv/popular?api_key=d1296bd66e7521efa2f1facf5b9ea2fe`;
    }

    fetchTvSeries(url);
  }, [location.search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className='tv-series-header'>TV Series</h1>
      <div className='container'>
        <div className='content'>
          {tvSeries.map(series => (
            <div key={series.id} className="tv-series-item">
              <Link to={`/tv/${series.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} alt={series.name} />
                <h3>{series.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
