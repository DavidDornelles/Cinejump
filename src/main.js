import Api from "./api";
import './styles.css';
import WhiteLogo from './assets/Logo-white.svg';
import SearchIcon from './assets/FiSearch.svg';
import UserIcon from './assets/FaRegUserCircle.svg';
import FavNot from './assets/BsHeartFill-black.svg';
import FavYes from './assets/BsHeartFill-red.svg';

class App {
  constructor() {
    this.moviesList = {
      top_rated: [],
      popular: [],
      now_playing: [],
      upcoming: [],
      trailers: [],
      favorites: [],
    };

    this.app = document.getElementById('app');
    this.app.innerHTML = this.render();
  }

  async getMovies(category) {
    try {
      const results = await Api.getMoviesByCategory(category);
      this.moviesList[category] = results;
    } catch (error) {
      console.log(error);
    }

    let position = document.getElementById(category);
    
    if (category === 'top_rated') {
      position.innerHTML = this.bannersGallery(this.moviesList[category]);
    } else {
      position = document.querySelector(`#${category} .section-content`);

      if (category === 'upcoming') {
        const trailers = await this.getTrailers(this.moviesList[category]);
        position.innerHTML = this.trailersGallery(trailers);
      } else {
        position.innerHTML = this.moviesGallery(this.moviesList[category]);
      }
    }
    
    this.handleFavorite();
  }

  async toggleFavorite(id) {
    let favorites = this.moviesList.favorites;    
    const alreadyAdded = favorites.findIndex(
      favorite => favorite.id === Number(id)
    );
    const position = document.querySelector(`#favorites .section-content`);

    if (alreadyAdded === -1) {
      try {
        const data = await Api.getMovieById(id);
        this.moviesList.favorites.push(data);
      } catch (error) {
        console.log(error);
      } finally {
        position.innerHTML = this.moviesGallery(this.moviesList.favorites);
      }
    } else {
      favorites = this.moviesList.favorites.filter(elem => elem.id !== Number(id));
      this.moviesList.favorites = favorites;      
      position.innerHTML = this.moviesGallery(this.moviesList.favorites);
    }
    this.getMovies('popular');
    this.getMovies('now_playing');
  }

  async getTrailers(list) {
    if (!list.length) return '';

    try {
      const trailersId = list.map(async movie => {
        const trailerId = await Api.getTrailerById(movie.id);

        return trailerId;
      });
      
      const trailers = await Promise.all(trailersId);

      return this.moviesList.trailers = trailers;
    } catch (error) {
      console.log(error);
    }
  };

  bannersGallery(list) {
    if (!list.length) return 'Carregando...';

    const top3 = list.slice(0,3);
    const banners = /*html*/`
      <div class="primary pr">
        <img src="https://image.tmdb.org/t/p/w500/${top3[0].backdrop_path}" class="img-responsive" />
        <div class="infos pa">
          <h3 class="infos-title">${top3[0].title}</h3>
          <p class="infos-text">${top3[0].overview}</p>
        </div>
      </div>
      <div class="secondary pr">
        <img src="https://image.tmdb.org/t/p/w500/${top3[1].backdrop_path}" class="img-responsive" />
        <div class="infos pa">
          <p class="infos-text">${top3[1].title}</p>
        </div>
      </div>
      <div class="tertiary pr">
        <img src="https://image.tmdb.org/t/p/w500/${top3[2].backdrop_path}" class="img-responsive" />
        <div class="infos pa">
          <p class="infos-text">${top3[2].title}</p>
        </div>
      </div>
    `;
    return banners;
  }

  moviesGallery(list) {
    if (!list.length) return 'Nenhum filme adicionado.';

    const gallery = list.map(movie => /*html*/`
      <article class="section-card pr">
        <button type="button" id="${movie.id}" class="section-button pa">
          <img src="${this.moviesList.favorites.find(favorite => favorite.id === movie.id) ? FavYes : FavNot}" />
        </button>
        <picture>
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="img-responsive" />
        </picture>
      </article>
    `).join('');

    return gallery;
  }

  trailersGallery(list) {
    if (!list.length) return 'Carregando...';

    const trailers = list.map(movie => /*html*/`
      <iframe src="https://www.youtube.com/embed/${movie}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `).join('');

    return trailers;
  }

  handleFavorite() {
    const favButtons = document.getElementsByTagName('button');

    for (let i = 0; i < favButtons.length; i++) {
      favButtons[i].onclick = () => this.toggleFavorite(favButtons[i].id);
    }
  }
  
  render() {
    const app = /*html*/`
      <header class="header pr">
        <div class="bg-primary pa"></div>
        <nav class="navigation container">
          <ul class="nav-items">
            <li class="nav-item"><a href="#">Filmes</a></li>
            <li class="nav-item"><a href="#">Séries</a></li>
            <li class="nav-logo"><img src="${WhiteLogo}" /></li>
            <li class="nav-search"><img src="${SearchIcon}" /></li>
            <li class="nav-account"><a href="#"><img src="${UserIcon}" /></a></li>
          </ul>
        </nav>
        <div id="top_rated" class="highlights container"></div>
      </header>
      <main>
        <section id="popular" class="section container">
          <h2 class="section-title">Popular</h2>
          <div class="section-content"></div>        
        </section>
        <section id="now_playing" class="section container">
          <h2 class="section-title">Em Exibição</h2>
          <div class="section-content"></div>
        </section>
        <div class="bg-secondary">
          <section id="upcoming" class="section container">
            <h2 class="section-title">Trailers</h2>
            <div class="section-content"></div>
          </section>
        </div>
        <section id="favorites" class="section container">
          <h2 class="section-title">Favoritos</h2>
          <div class="section-content">Nenhum filme adicionado.</div>
        </section>
      </main>
      <footer class="bg-primary">
        <div class="container footer-content">
          <div class="footer-logo"><img src="${WhiteLogo}" /></div>
          <div class="footer-links">
            <ul class="footer-list">
              <li class="footer-list-item"><a href="#">Desenvolvido por David Dornelles (após Lucas Grabriel)</a></li>
              <li class="footer-list-item"><a href="#">Proposta do Projeto</a></li>
              <li class="footer-list-item"><a href="#">Protótipo Figma</a></li>
              <li class="footer-list-item"><a href="#">Apresentação ao Comitê</a></li>
              <li class="footer-list-item"><a href="#">Documentação</a></li>
            </ul>
          </div>
        </div>
      </footer>
    `;
    return app;
  }
}

const app = new App();

app.getMovies('top_rated');
app.getMovies('popular');
app.getMovies('now_playing');
app.getMovies('upcoming');
    