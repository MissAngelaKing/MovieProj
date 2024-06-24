import { useState, useEffect } from 'react';

const UseGenres = () => {
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=d1296bd66e7521efa2f1facf5b9ea2fe');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    return { genres, loading, error };
};

export default UseGenres;
