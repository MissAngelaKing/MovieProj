import React from 'react'

const Trailer = ({trailers}) => {
    if (!trailers || trailers.length === 0) return null;
  return (
    <div>
      <h3>Trailer:</h3>
      <iframe
        width="1350"
        height="400"
        src={`https://www.youtube.com/embed/${trailers[0].key}`}
        title="Trailer"
        frameborder="10"
        allowfullscreen
      ></iframe>
    </div>
  )
}

export default Trailer
