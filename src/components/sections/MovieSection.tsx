import React, { Fragment, useEffect, useState } from "react";
import { getFavoriteMovie, getMovies } from "services";
import MoviePoster from "./MoviePoster";
import MovieTrailer from "./MovieTrailer";
import {
  Section,
  Title
} from "../globals";
import { StyledSectionContainer } from "../styled/StyledSectionContainer";
import * as DS from "../../css/variables";

interface MovieSectionProps {
  id: string;
  style?:any;
  title: string;
  isTrailer?: boolean;
  areFavorites?: boolean;
  favorites: number[];
  toggleFavorite?: Function;
}

const MovieSection = (props:MovieSectionProps) => {
  const {
    id,
    style,
    title,
    isTrailer = false,
    areFavorites = false,
    favorites,
    toggleFavorite
  } =props;

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies]:any[] = useState([]);

  useEffect(() => {
    if (id !== 'favorites') {
      getMovies(id)
        .then(data => {
          const { results } = data;
          setMovies([...results]);
          setIsLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id === 'favorites') {
      getFavoriteMovie(favorites)
        .then(data => {
          const results = data;
          setMovies([...results]);
          setIsLoading(false);
        })
        .catch(error => error);
    }
  }, [favorites, id]);

  return (
    <Fragment>
      <Section id={id} classes={'container'} >
        <Title
          hierarchy={'h2'}
          classes={"section-title"}
          style={{
            color: `${isTrailer ? DS.COLOR_LIGHT : DS.COLOR_PRIMARY}`,
            fontSize: '24px',
            fontWeight: '300',
            lineHeight: '27.58px',
            marginBottom: '16px',
          }}
        >{title}</Title>
        <StyledSectionContainer>
          {isTrailer
            ? (
              <MovieTrailer movies={movies} />
            ) : (
              !favorites.length && areFavorites
              ? (
                'Nenhum filme adicionado.'
              ) : (
                movies && movies.map((movie: any) => (<MoviePoster
                  style={style}
                  isLoading={isLoading}
                  movie={movie}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />))
              )
            )
          }
        </StyledSectionContainer>
      </Section>
    </Fragment>
  );
};

export default MovieSection;