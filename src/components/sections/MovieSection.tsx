import React, { Fragment } from "react";
import {
  Section,
  Title
} from "../globals";
import MoviePoster from "./MoviePoster";
import * as DS from "../../css/variables";

interface MovieSectionProps {
  id: string;
  title: string;
}

const MovieSection = (props:MovieSectionProps) => {
  const {
    id,
    title
  } =props;
  return (
    <Fragment>
      <Section id={id} classes={'container'} >
        <Title
          hierarchy={'h2'}
          classes={"section-title"}
          style={{
            color: DS.COLOR_PRIMARY,
            fontSize: '24px',
            fontWeight: '300',
            lineHeight: '27.58px',
            marginBottom: '16px',
          }}
        >{title}</Title>
        <div className="section-content">
          <MoviePoster cover="http://placekitten.com/500/500" />
        </div>
      </Section>
    </Fragment>
  );
};

export default MovieSection;