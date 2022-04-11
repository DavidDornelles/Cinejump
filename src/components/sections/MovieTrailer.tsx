import React from "react";

const MovieTrailer = (props:any) => {
  return (
    <iframe
      src="https://www.youtube.com/embed/movie"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  );
};

export default MovieTrailer;