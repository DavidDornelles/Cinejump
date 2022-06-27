import React, { useEffect, useState } from "react";
import { getMovieTrailers } from "services";

const MovieTrailer = (props: { movies:string[] }) => {
  const { movies } = props;
  const [trailers, setTrailers]:any[] = useState([]);

  useEffect(() => {
    try {
      getMovieTrailers(movies)
        .then(trailers => {
          setTrailers(trailers);
        })
    } catch (error) {
      console.log(error);
    }
  }, [movies]);

  return (
    <>
      {!!trailers && trailers.map((trailer: { key: string, name: string }, index:number) =>  (
        <iframe key={index} src={`https://www.youtube.com/embed/${trailer.key}`}
          title={`${trailer.name}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      ))}
    </>
  );
};

export default MovieTrailer;