import React, { Fragment, useState } from "react";
import { MovieSection } from "../sections";
import { StyledMovieTrailerContainer } from "../styled/StyledMovieTrailer";

const styles = {
  height: '253px',
  marginBottom: '16px',
  maxWidth: '165px',
  minWidth: '165px',
} as React.CSSProperties;

const Main = (props: any) => {
  const [favorites, setFavorites]:any[] = useState([]);

  function toggleFavorite(id: number) {
    const alreadyAdded = favorites.includes(id);

    if (alreadyAdded) {
      const favGallery = favorites.filter((fav:number) => fav !== id);
      setFavorites(favGallery);
    } else {
      setFavorites((prevState:any[]) => [...prevState, id]);
    }
  }

  return (
    <Fragment>
      <main>
        <MovieSection
          id={'popular'}
          style={styles}
          title={'Populares'}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <MovieSection
          id={'now_playing'}
          style={styles}
          title={'Em Exibição'}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <StyledMovieTrailerContainer>
          <MovieSection id="upcoming" title={'Trailers'} isTrailer={true} favorites={[]} />
        </StyledMovieTrailerContainer>
        <MovieSection
          id={'favorites'}
          style={styles}
          title={'Favoritos'}
          areFavorites={true}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </Fragment>
  );
}

export default Main;