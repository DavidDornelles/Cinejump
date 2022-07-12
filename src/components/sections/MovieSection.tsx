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
  recommendations?: any[];
  trailers?: any[];
  favorites?: number[];
  toggleFavorite?: Function;
}

const MovieSection = (props:MovieSectionProps) => {
  const {
    id,
    style,
    title,
    isTrailer = false,
    areFavorites = false,
    recommendations,
    favorites,
    trailers,
    toggleFavorite
  } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies]:any[] = useState([]);

  useEffect(() => {
    if (id === 'favorites' && !!favorites) {
      getFavoriteMovie(favorites)
        .then(data => {
          const results = data;
          setMovies([...results]);
          setIsLoading(false);
        })
        .catch(error => error);
    }
  }, [id, favorites]);

  useEffect(() => {
    if (id === 'recommendations') {
      setMovies(recommendations);
      setIsLoading(false);
    }
  }, [id, recommendations]);

  useEffect(() => {
    if (id === 'movie-trailers') {
      setMovies(trailers);
    }
  }, [id, trailers]);

  useEffect(() => {
    if (id !== 'favorites' && id !== 'movie-trailers' && id !== 'recommendations') {
      getMovies(id)
        .then(data => {
          const { results } = data;
          setMovies([...results]);
          setIsLoading(false);
        });
    }
  }, [id]);

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
              !!movies && <MovieTrailer isMoviePage={false} movies={movies} />
            ) : (
              !!favorites && !favorites.length && areFavorites
              ? (
                'Nenhum filme adicionado.'
              )
              : (!!movies && movies.map((movie: any, index: number) => (
                <MoviePoster
                  key={index}
                  style={style}
                  isLoading={isLoading}
                  movie={movie}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              )))
            )
          }
        </StyledSectionContainer>
      </Section>
    </Fragment>
  );
};

export default MovieSection;