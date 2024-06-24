import React from 'react';

const ActorDetails = ({ actor }) => {
  if (!actor) return null;

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
      <h2>{actor.name}</h2>
      <p>Gender: {actor.gender === 1 ? 'Female' : 'Male'}</p>
      <p>Popularity: {actor.popularity}</p>
      <p>Birthday: {actor.birthday}</p>
      <p>Biography: {actor.biography}</p>
    </div>
  );
};

export default ActorDetails;
