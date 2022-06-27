import React, { Fragment } from "react";
import styled from "styled-components";
import { Image, Paragraph, Title } from "../globals";
import { StyledTopRated } from "../styled/StyledTopRated";

interface BannerProps {
  movies: any;
  area: string;
  hasTitle?: boolean;
  className?: string;
}

type StyledInfosTypes = {
  hasTitle: boolean;
}

const StyledInfos = styled.div.attrs((props:StyledInfosTypes) => ({
  hasTitle: props.hasTitle,
}))<StyledInfosTypes>`
  background-color: rgba(0, 0, 0, .3);
  bottom: 0;
  padding: ${props => props.hasTitle ? '16px' : '8px'};
  position: absolute;
  width: 100%;
`;

const Banner = (props:BannerProps) => {
  const { movies, area, hasTitle = false } = props;

  return (
    <StyledTopRated area={area}>
      <Image source={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`} classes="" alt={movies.title} title={movies.title} />
      <StyledInfos hasTitle={hasTitle}>
        {hasTitle
          ? (
            <Fragment>
              <Title hierarchy="h3" classes={'header3'} size={'24px'} line={'27.58px'}>{movies.title}</Title>
              <Paragraph classes={'paragraph'} size={['16px', '16px']} line={['', '24px']}>{movies.overview}</Paragraph>
            </Fragment>
          ) : (
            <Paragraph classes={'paragraph'} size={['16px', '16px']} line={['', '18.38px']}>{movies.title}</Paragraph>
          )}
      </StyledInfos>
    </StyledTopRated>
  );
};

export default Banner;