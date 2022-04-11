import React, { Fragment } from "react";
import { MovieSection } from "../sections";
import { StyledMovieTrailerContainer } from "../styled/StyledMovieTrailer";

const Main = (props: any) => {
  return (
    <Fragment>
      <main>
        <MovieSection id={'popular'} title={'Populares'} />
        <MovieSection id={'now_playing'} title={'Em Exibição'} />
        <StyledMovieTrailerContainer>
          <MovieSection id="upcoming" title={'Trailers'} isTrailer={true} />
        </StyledMovieTrailerContainer>
        <MovieSection id={'favorites'} title={'Favoritos'} />
      </main>
    </Fragment>
  );
}

export default Main;