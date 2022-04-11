import React, { Fragment } from "react";
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