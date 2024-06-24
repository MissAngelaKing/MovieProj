import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Ucard from '../../Components/Ucard/Ucard'
import './MoviePage.css';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    const fetchMovies = async (url) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
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
            url = `https://api.themoviedb.org/3/movie/${category}?api_key=d1296bd66e7521efa2f1facf5b9ea2fe`;
        } else if (genre) {
            url = `https://api.themoviedb.org/3/discover/movie?api_key=d1296bd66e7521efa2f1facf5b9ea2fe&with_genres=${genre}`;
        } else {
            url = `https://api.themoviedb.org/3/movie/popular?api_key=d1296bd66e7521efa2f1facf5b9ea2fe`;
        }

        fetchMovies(url);
    }, [location.search]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
          <h1 className='movie-header'>Movies</h1>
          <div className='container'>
            <div className='content'>
                {movies.map(movie => (
                    <Ucard key={movie.id} item={movie} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default MoviesPage;
