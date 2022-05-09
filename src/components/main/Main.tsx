import React, { Fragment, useState } from "react";
import { MovieSection } from "../sections";
import { StyledMovieTrailerContainer } from "../styled/StyledMovieTrailer";

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
          title={'Populares'}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <MovieSection
          id={'now_playing'}
          title={'Em Exibição'}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <StyledMovieTrailerContainer>
          <MovieSection id="upcoming" title={'Trailers'} isTrailer={true} favorites={[]} />
        </StyledMovieTrailerContainer>
        <MovieSection
          id={'favorites'}
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