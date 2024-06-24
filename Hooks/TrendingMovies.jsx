import { useState, useEffect } from 'react';

const TrendingMovies = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=d1296bd66e7521efa2f1facf5b9ea2fe');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setTrendingMovies(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    return { trendingMovies, loading, error };
};

export default TrendingMovies;
