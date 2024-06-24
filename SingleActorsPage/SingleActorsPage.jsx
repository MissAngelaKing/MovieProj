import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActorDetails from '../../Components/ActorsDetails/ActorsDetails';

const SingleActorPage = () => {
  const { actorId } = useParams();
  const [actorDetails, setActorDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=d1296bd66e7521efa2f1facf5b9ea2fe`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setActorDetails(data);
      } catch (error) {
        console.error('Error fetching actor details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActorDetails();
  }, [actorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ActorDetails actor={actorDetails} />
    </div>
  );
};

export default SingleActorPage;
