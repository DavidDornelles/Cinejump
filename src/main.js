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
            <li class="nav-item">Filmes</li>
            <li class="nav-item">Séries</li>
            <li class="nav-logo"><img src="${WhiteLogo}" /></li>
            <li class="nav-search"><img src="${SearchIcon}" /></li>
            <li class="nav-account"><img src="${UserIcon}" /></li>
          </ul>
        </nav>
      </header>
      <main>Main</main>
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