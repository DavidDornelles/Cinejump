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

  useEffect(() => {
    if (id !== 'favorites' && id !== 'upcoming') {
      axios
        .get(`${process.env.REACT_APP_TMDB_URL}${id}${isTrailer ? '/videos' : '' }?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => {
          const { data: { results } } = response;
          setMovies([...results]);
        })
        .catch();
    }
  }, [id, isTrailer]);

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
          {isTrailer ? <MovieTrailer /> : <MoviePoster movies={movies} ctrlFavorites={ctrlFavorites} />}
        </StyledSectionContainer>
      </Section>
    </Fragment>
  );
};

export default MovieSection;