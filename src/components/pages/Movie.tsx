import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieById } from "services";
import { Header } from "components/header";
import { ActorsSection, MoviePoster, MovieSection, MovieTrailer } from "components/sections";
import { Paragraph, Section, Title } from "components/globals";
import { Footer } from "components/footer";
import * as DS from '../../css/variables';

const StyledGridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 295px auto;
    gap: 0 32px;
  }
`;

const StyledTitleArea = styled.div`
  margin-bottom: 0;
`;

const StyledTagline = styled.p`
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
`;

const StyledOverview = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
`;

const StyledStrong = styled.span`
  font-weight: 500;
`;

const StyledTrailersContainer = styled.div`
  display: flex;
  gap: 16px;
  overflox-x: auto;
  padding-bottom: 16px;
`;

const mainPoster = {
  height: '452px',
  marginBottom: '16px',
  width: '296px',
} as React.CSSProperties;

const topStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: '16px',
} as React.CSSProperties;

const styledPoster = {
  height: '253px',
  marginBottom: '16px',
  maxWidth: '165px',
  minWidth: '165px',
} as React.CSSProperties;

const Movie = (props: { menu:string[]; pageName:string }) => {
  const { menu, pageName } = props;
  const { id } = useParams();
  const [movie, setMovie]:any = useState({});

  const {
    backdrop_path,
    credits,
    genres,
    overview,
    recommendations,
    release_date,
    runtime,
    tagline,
    title,
    videos,
    vote_average
  } = movie;

  const directors = credits?.crew.filter((item: {
    name: any; job: string; 
  }) => item.job === 'Director');

  useEffect(() => {
    getMovieById(id)
      .then(response => setMovie(response))
      .catch(error => error);
  }, [id]);

  return (
    <Fragment>
      <Header customHeight={'584px'} menu={menu} pageName={pageName} postal={backdrop_path} />
      <main id={pageName} className={'container'}>
        <StyledGridSection>
          <MoviePoster style={mainPoster} isLoading={false} movie={movie} favorites={[]} toggleFavorite={true}/>
          <div style={topStyles}>
            <StyledTitleArea>
              <Title hierarchy={'h2'} line={'36.77px'} size={'32px'} style={{ fontWeight: '500', marginBottom: '8px' }}>{title}</Title>
              <Paragraph line={['20.68px']} size={['18px']} style={{ fontWeight: '300' }}>{`${release_date?.split('-').reverse().join('/')} - ${genres?.map((genre: { name: any; }) => genre.name).join(', ')} - ${Math.floor(runtime / 60)}h${Math.floor(runtime % 60)}min`}</Paragraph>
            </StyledTitleArea>
            {!!tagline && <StyledTagline>"{tagline}"</StyledTagline>}
            <div>
              <Title hierarchy={'h3'} line={'22.98px'} size={'20px'} style={{ fontWeight: '500', marginBottom: '8px' }}>Sinopse</Title>
              <StyledOverview>{overview}</StyledOverview>
            </div>
            <p><StyledStrong>Avaliação do Público:</StyledStrong> {vote_average}</p>
            <p><StyledStrong>Diretor:</StyledStrong> {!!directors && directors.map((director: { name: string; }) => director.name)}</p>
          </div>
        </StyledGridSection>
        <ActorsSection id={'cast'} title={'Elenco Principal'} cast={credits?.cast} style={styledPoster} />
        <Section id={'trailers'} classes={'container'} style={{overflowX: 'auto'}}>
          <Title hierarchy={'h3'} line={'27.58px'} size={'24px'} style={{
            color: `${DS.COLOR_PRIMARY}`, fontWeight: '300', marginBottom: '16px'
          }}>Vídeos</Title>
          <StyledTrailersContainer>
            <MovieTrailer isMoviePage={true} movies={videos?.results}/>
          </StyledTrailersContainer>
        </Section>
        <MovieSection
          id={'recommendations'}
          title={'Recomendações'}
          style={styledPoster}
          recommendations={recommendations?.results}
          favorites={[]}
        />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Movie;