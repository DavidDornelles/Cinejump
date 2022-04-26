import React, { Fragment, useState } from "react";
import axios from "axios";
import { MovieSection } from "../sections";
import { StyledMovieTrailerContainer } from "../styled/StyledMovieTrailer";

const Main = (props: any) => {
  const [favorites, setFavorites]:any[] = useState([]);

  async function toggleFavorite(id: number) {
    const alreadyAdded = !!favorites && favorites.findIndex((favorite: { id: number; }) => favorite.id === id);

    if (alreadyAdded === -1) {
        await axios
          .get(`${process.env.REACT_APP_TMDB_URL}${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
          .then(
            response => {
              const { data } = response;
              setFavorites((prevState:any[]) => [...prevState, data]);
            }
          )
          .catch(error => console.log(error));
    } else {
      const favGallery = favorites.filter((elem: { id: number; }) => elem.id !== id);
      setFavorites(favGallery);
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
          <MovieSection id="upcoming" title={'Trailers'} isTrailer={true} />
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