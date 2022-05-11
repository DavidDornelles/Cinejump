import React from "react";
import {
  Article,
  Image,
  Loading,
} from "../globals";
import CtaFavorite from "../ctas/CtaFavorite";
import FavNot from '../../assets/BsHeartFill-black.svg';
import FavYes from '../../assets/BsHeartFill-red.svg';

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
  const { isLoading, movies, favorites, toggleFavorite } = props;

  return isLoading
    ? <Loading height={'50px'} width={'50px'} color={'gray'} />
    : movies && movies.map(
      (movie: { poster_path: string; id: number; title: string; }) => 
        <Article key={movie.id} styles={styles}>
          <CtaFavorite type="button" id={movie.id} toggleFavorite={toggleFavorite}>
            <Image source={favorites?.find((favorite: number) => favorite === movie.id) ? FavYes : FavNot} alt='' title='' />
          </CtaFavorite>
          <picture>
            <Image source={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} title={movie.title} />
          </picture>
        </Article>
    )
};

export default MoviePoster;