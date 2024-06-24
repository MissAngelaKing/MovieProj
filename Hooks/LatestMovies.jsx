import { useState, useEffect } from 'react';

const LatestMovies = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/latest?api_key=d1296bd66e7521efa2f1facf5b9ea2fe');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setLatestMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestMovies();
  }, []);

  return { latestMovies, loading, error };
};

export default LatestMovies;
