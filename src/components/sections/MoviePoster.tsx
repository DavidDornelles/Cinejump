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
  const {
    cover,
    alt,
    title
  } = props;
  return (
    <Article styles={styles}>
      <CtaFavorite type="button" id="movieId">
        <Image source={FavNot} alt={alt} title={title} />
      </CtaFavorite>
      <picture>
        <Image source={cover} alt='' title='' />
      </picture>
    </Article>
  );
};

export default MoviePoster;