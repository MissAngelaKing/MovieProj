import { useState, useEffect } from 'react';
import axios from 'axios';

const useMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestMovies, setLatestMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingResponse = await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
          params: { api_key: 'd1296bd66e7521efa2f1facf5b9ea2fe' }
        });

        const popularResponse = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: { api_key: 'd1296bd66e7521efa2f1facf5b9ea2fe' }
        });

        const latestResponse = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: { api_key: 'd1296bd66e7521efa2f1facf5b9ea2fe' }
        });

        setTrendingMovies(trendingResponse.data.results);
        setPopularMovies(popularResponse.data.results);
        setLatestMovies(latestResponse.data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { trendingMovies, popularMovies, latestMovies, loading, error };
};

export default useMovies;
