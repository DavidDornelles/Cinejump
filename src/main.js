import Api from "./api";
import './styles.css';
import WhiteLogo from './assets/Logo-white.svg';
import SearchIcon from './assets/FiSearch.svg';
import UserIcon from './assets/FaRegUserCircle.svg';

class App {
  constructor() {
    this.moviesList = {
      popular: this.getMovies('popular'),
      playing: this.getMovies('now_playing'),
    };
    this.app = document.getElementById('app');
  }

  async getMovies(category) {
    if (category === 'popular') {
      const { results } = await Api.getMoviesByCategory(category);
      this.moviesList.popular = results;
    } else {
      const { results } = await Api.getMoviesByCategory(category);
      this.moviesList.playing = results;
    }
    this.app.innerHTML = this.render();
  }
  
  render() {
    const popular = this.moviesList.popular
      .map(movie => /*html*/`
        <article class="section-card pr">
          <picture>
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-responsive" />
          </picture>
        </article>`)
      .join('');

    const playing = this.moviesList.playing
      .map(movie => /*html*/`
        <article class="section-card pr">
          <picture>
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-responsive" />
          </picture>
        </article>`)
      .join('');

    const app = /*html*/`
      <div class="bg-pink pa"></div>
      <header class="header">
        <nav class="navigation container">
          <ul class="nav-items">
            <li class="nav-item"><a href="#">Filmes</a></li>
            <li class="nav-item"><a href="#">Séries</a></li>
            <li class="nav-logo"><img src="${WhiteLogo}" /></li>
            <li class="nav-search"><img src="${SearchIcon}" /></li>
            <li class="nav-account"><a href="#"><img src="${UserIcon}" /></a></li>
          </ul>
        </nav>
        <div class="highlights container">
          <div class="primary pr">
            <img src="https://missaohadomi.org/wp-content/uploads/2015/07/import_placeholder.png" class="img-responsive" />
            <div class="infos pa">
              <h3 class="infos-title">1917</h3>
              <p class="infos-text">Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route</p>
            </div>
          </div>
          <div class="secondary pr">
            <img src="https://missaohadomi.org/wp-content/uploads/2015/07/import_placeholder.png" class="img-responsive" />
            <div class="infos pa">
              <p class="infos-text">Carros 2</p>
            </div>
          </div>
          <div class="tertiary pr">
            <img src="https://missaohadomi.org/wp-content/uploads/2015/07/import_placeholder.png" class="img-responsive" />
            <div class="infos pa">
              <p class="infos-text">Bad Boys 2</p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="section container">
          <h2 class="section-title">Popular</h2>
          <div class="section-content">
            ${popular}
          </div>
        </section>
        <section class="section container">
          <h2 class="section-title">Em Exibição</h2>
          <div class="section-content">
            ${playing}
          </div>
        </section>
      </main>
      <footer>Footer</footer>
    `;
    return app;
  }
}

const app = new App();
