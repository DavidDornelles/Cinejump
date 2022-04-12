import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Section,
  Title
} from "../globals";
import MoviePoster from "./MoviePoster";
import * as DS from "../../css/variables";
import MovieTrailer from "./MovieTrailer";

interface MovieSectionProps {
  id: string;
  title: string;
  isTrailer?: boolean;
}

const MovieSection = (props:MovieSectionProps) => {
  const {
    id,
    title,
    isTrailer = false
  } =props;

  const [movies, setMovies] = useState({});

  useEffect(() => {
    if (id !== 'favorites' && id !== 'upcoming') {
      axios
        .get(`${process.env.REACT_APP_TMDB_URL}${id}${isTrailer ? '/videos' : '' }?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => {
          setMovies(response.data.results);
        })
        .catch();
    }
  }, [id, isTrailer]);
  
  console.log('id | movies -> ', id, movies);

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
        <div className="section-content">
          {isTrailer ? <MovieTrailer /> : <MoviePoster cover="http://placekitten.com/500/500" />}
        </div>
      </Section>
    </Fragment>
  );
};

export default MovieSection;