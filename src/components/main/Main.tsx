import React, { Fragment } from "react";
import MovieSection from "../sections/MovieSection";

const Main = (props: any) => {
  return (
    <Fragment>
      <main>
        <MovieSection id={'popular'} title={'Populares'} />
        <MovieSection id={'now_playing'} title={'Em Exibição'} />
        <MovieSection id={'favorites'} title={'Favoritos'} />
        {/* <div className="bg-secondary">
          <section id="upcoming" className="section container">
            <h2 className="section-title">Trailers</h2>
            <div className="section-content"></div>
          </section>
        </div> */}
      </main>
    </Fragment>
  );
}

export default Main;