import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ActorsPage.css'

const ActorsPage = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=d1296bd66e7521efa2f1facf5b9ea2fe');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setActors(data.results);
      } catch (error) {
        console.error('Error fetching actors:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, []);

  const handleActorClick = (actorId) => {
    navigate(`/actor/${actorId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className='actors-header'>Actors</h1>
      <div className='container'>
        <div className='content'>
          {actors.map(actor => (
            <div key={actor.id} className='actor-card' onClick={() => handleActorClick(actor.id)}>
              {actor.profile_path ? (
                <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
              ) : (
                <div>No image available</div>
              )}
              <h3>{actor.name}</h3>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default ActorsPage;
