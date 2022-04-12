import React from "react";
import {
  Article,
  Image
} from "../globals";
import CtaFavorite from "../ctas/CtaFavorite";
import FavNot from '../../assets/BsHeartFill-black.svg';

const styles = {
  borderRadius: '10px',
  height: '253px',
  marginBottom: '16px',
  maxWidth: '165px',
  minWidth: '165px',
  overflow: 'hidden',
  position: "relative",
} as React.CSSProperties;

const MoviePoster = (props:any) => {
  const { movies } = props;
  
  // console.log('movies -> ', movies);

  return (
    movies && movies.map((movie: { backdrop_path: string; id: number; title: string; }) => (
    <Article key={movie.id} styles={styles}>
      <CtaFavorite type="button" id="movieId">
        <Image source={FavNot} alt='' title='' />
      </CtaFavorite>
      <picture>
        <Image source={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} title={movie.title} />
      </picture>
    </Article>
    ))
  );
};

export default MoviePoster;