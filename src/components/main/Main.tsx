import React, { Fragment } from "react";

const Main = (props: any) => {
  return (
    <Fragment>
      <main>
        <section id="popular" className="section container">
          <h2 className="section-title">Popular</h2>
          <div className="section-content"></div>        
        </section>
        <section id="now_playing" className="section container">
          <h2 className="section-title">Em Exibição</h2>
          <div className="section-content"></div>
        </section>
        <div className="bg-secondary">
          <section id="upcoming" className="section container">
            <h2 className="section-title">Trailers</h2>
            <div className="section-content"></div>
          </section>
        </div>
        <section id="favorites" className="section container">
          <h2 className="section-title">Favoritos</h2>
          <div className="section-content">Nenhum filme adicionado.</div>
        </section>
      </main>
    </Fragment>
  );
}

export default Main;