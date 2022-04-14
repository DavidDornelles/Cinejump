import React, { Fragment, useEffect, useState } from "react";
import { MovieSection } from "../sections";
import { StyledMovieTrailerContainer } from "../styled/StyledMovieTrailer";

const Main = (props: any) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    console.log('favorites -> ', favorites);
  }, [favorites]);

  return (
    <Fragment>
      <main>
        <MovieSection id={'popular'} title={'Populares'} ctrlFavorites={setFavorites} />
        <MovieSection id={'now_playing'} title={'Em Exibição'} ctrlFavorites={setFavorites} />
        <StyledMovieTrailerContainer>
          <MovieSection id="upcoming" title={'Trailers'} isTrailer={true} />
        </StyledMovieTrailerContainer>
        <MovieSection id={'favorites'} title={'Favoritos'} ctrlFavorites={setFavorites} />
      </main>
    </Fragment>
  );
}

export default Main;