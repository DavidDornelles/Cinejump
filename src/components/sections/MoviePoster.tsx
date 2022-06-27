import React from "react";
import { Link } from "react-router-dom";
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
  overflow: 'hidden',
  position: "relative",
} as React.CSSProperties;

const MoviePoster = (props: { style: any; isLoading: boolean; movie: any; favorites: any; toggleFavorite: any; }) => {
  const { style, isLoading, movie, favorites, toggleFavorite } = props;
  const { poster_path, id, title } = movie;

  return isLoading
    ? <Loading height={'50px'} width={'50px'} color={'gray'} />
    : <Article key={id} styles={{ ...styles, ...style }}>
        <CtaFavorite type="button" id={id} toggleFavorite={toggleFavorite}>
          <Image source={favorites?.find((favorite: number) => favorite === id) ? FavYes : FavNot} alt={title} title={title} />
        </CtaFavorite>
        <Link key={id} to={`/movie/${id}`}>
          <picture>
            <Image source={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} title={title} />
          </picture>
        </Link>
      </Article>
};

export default MoviePoster;