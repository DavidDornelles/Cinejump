import Api from "./api";
import './styles.css';
import WhiteLogo from './assets/Logo-white.svg';
import SearchIcon from './assets/FiSearch.svg';
import UserIcon from './assets/FaRegUserCircle.svg';

class App {
  constructor() {
    this.app = document.getElementById('app');
    this.app.innerHTML = this.render();
  }

  render() {
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
            <img src="https://missaohadomi.org/wp-content/uploads/2015/07/import_placeholder.png" />
            <div class="infos pa">
              <h3 class="infos-title">1917</h3>
              <p class="infos-text">Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route</p>
            </div>
          </div>
          <div class="secondary pr">
            <img src="https://missaohadomi.org/wp-content/uploads/2015/07/import_placeholder.png" />
            <div class="infos pa">
              <p class="infos-text">Carros 2</p>
            </div>
          </div>
          <div class="tertiary pr">
            <img src="https://missaohadomi.org/wp-content/uploads/2015/07/import_placeholder.png" />
            <div class="infos pa">
              <p class="infos-text">Bad Boys 2</p>
            </div>
          </div>
        </div>
      </header>
      <main>
      </main>
      <footer>Footer</footer>
    `;
    return app;
  }
}

class Movies {
  constructor() {
    this.moviesList = [];
  }

  async getMovies(category) {
    this.moviesList = await Api.getMoviesByCategory(category);
    console.log('this.moviesList -> ', this.moviesList);
  }
}

const app = new App();

const listMovies = new Movies();

listMovies.getMovies('popular');
listMovies.getMovies('latest');