import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../Components/MovieDetails/MovieDetails';
import CreditSection from '../../Components/MovieDetails/CreditSection/CreditSection';
import RelatedMovies from '../../Components/MovieDetails/CreditSection/RelatedMovies/RelatedMovies';
import Trailer from '../../Components/Trailer/Trailer';
import ProductionCompany from '../../Components/ProductionCompany/ProductionCompany';

const SingleMoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = 'd1296bd66e7521efa2f1facf5b9ea2fe'; 
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits,videos,similar`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <MovieDetails movie={movieDetails} />
      <CreditSection credits={movieDetails.credits} />
      <RelatedMovies relatedMovies={movieDetails.similar.results} />
      <Trailer trailers={movieDetails.videos.results} />
      <ProductionCompany companies={movieDetails.production_companies} />
    </div>
  );
};

export default SingleMoviePage;
