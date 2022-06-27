import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieById } from "services";
import { Header } from "components/header";
import { MoviePoster } from "components/sections";
import { Paragraph, Section, Title } from "components/globals";

const StyledGridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 295px auto;
    gap: 0 32px;
  }
`;

const StyledTitleArea = styled.div`
  margin-bottom: 60px;
`;

const StyledTagline = styled.p`
  font-size: 18px;
  font-style: italic;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
  margin-bottom: 60px;
`;

const StyledOverview = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  margin-bottom: 60px;
`;

const StyledStrong = styled.span`
  font-weight: 500;
`;

const styles = {
  height: '452px',
  marginBottom: '16px',
  width: '296px',
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

  useEffect(() => {
    getMovieById(id)
      .then(response => setMovie(response))
      .catch(error => error);
  }, [id]);

  return (
    <Fragment>
      <Header customHeight={'584px'} menu={menu} pageName={pageName} postal={backdrop_path} />
      <Section id={pageName} classes={'container'}>
        <StyledGridSection>
          <MoviePoster style={styles} isLoading={false} movie={movie} favorites={[]} toggleFavorite={true}/>
          <div>
            <StyledTitleArea>
              <Title hierarchy={'h2'} line={'36.77px'} size={'32px'} style={{ fontWeight: '500', marginBottom: '8px' }}>{title}</Title>
              <Paragraph line={['20.68px']} size={['18px']} style={{ fontWeight: '300' }}>{`${release_date?.split('-').reverse().join('/')} - ${genres?.map((genre: { name: any; }) => genre.name).join(', ')} - ${Math.floor(runtime / 60)}h${Math.floor(runtime % 60)}min`}</Paragraph>
            </StyledTitleArea>
            <StyledTagline>"{tagline}"</StyledTagline>
            <Title hierarchy={'h3'} line={'22.98px'} size={'20px'} style={{ fontWeight: '500', marginBottom: '8px' }}>Sinopse</Title>
            <StyledOverview>{overview}</StyledOverview>
            <p><StyledStrong>Avaliação do Público:</StyledStrong> {vote_average}</p>
          </div>
        </StyledGridSection>
        <article>
          <section>
          </section>
          <section>
            <h3>Elenco Principal</h3>
            {credits?.cast.map((actor:any) => <p key={actor.name}>{actor.name}</p>)}
          </section>
          <section>
            <h3>Vídeos</h3>
            {videos?.results.map((video: { key: string; name: string }) => (<iframe key={video.key} src={`https://www.youtube.com/embed/${video.key}`} title={`${video.name}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
            )}
          </section>
          <section>
            <h3>Recomendações</h3>
            {recommendations?.results.map((recommendation: { title: string; }, index:number) => <p key={index}>{recommendation.title}</p>)}
          </section>
        </article>
      </Section>
      {/* <div id='menu' style={{backgroundColor: 'red', height: '100px'}}>
      </div> */}
    </Fragment>
  );
};

export default Movie;