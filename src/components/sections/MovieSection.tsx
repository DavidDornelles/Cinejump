import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
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
  title: string;
  isTrailer?: boolean;
  ctrlFavorites?: Function;
}

const MovieSection = (props:MovieSectionProps) => {
  const {
    id,
    title,
    isTrailer = false,
    ctrlFavorites
  } =props;

  const [movies, setMovies]:any[] = useState([]);
  const [trailers, setTrailers]:any[] = useState([]);

  useEffect(() => {
    if (id !== 'favorites') {
      axios
        .get(`${process.env.REACT_APP_TMDB_URL}${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => {
          const { data: { results } } = response;
          setMovies(isTrailer ? results.map((result: { id: number; }) => result.id) : [...results]);
        })
        .catch();
    }
  }, [id, isTrailer]);

  useEffect(() => {
    if(id !== 'upcoming') return;
    axios.all(
      movies.map((trailer: number) => axios.get(`${process.env.REACT_APP_TMDB_URL}${trailer}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`))
    ).then(
      (responses: any[]) => {
        const trailers = responses.map(
        response => {
          if(!!response.data.results.length) {
            const { data: { results }} = response;
            return results[0].key;
          }
        }
      );
      setTrailers(trailers);
    }
    ).catch();
  }, [id, movies]);

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
            ? <MovieTrailer trailers={trailers} />
            : <MoviePoster movies={movies} ctrlFavorites={ctrlFavorites} />
          }
        </StyledSectionContainer>
      </Section>
    </Fragment>
  );
};

export default MovieSection;