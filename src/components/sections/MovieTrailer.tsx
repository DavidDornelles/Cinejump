import React from "react";

const MovieTrailer = (props: { trailers:string[] }) => {
  const { trailers } = props;

  return (
    <>
      {!!trailers && trailers.map((trailer: string, index:number) =>  (
        <iframe key={index} src={`https://www.youtube.com/embed/${trailer}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      ))}
    </>
  );
};

export default MovieTrailer;