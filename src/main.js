import Api from "./api";

class Movies {
  constructor() {
    this.moviesList = [];
  }

  async getMovies(category) {
    this.moviesList = await Api.getMoviesByCategory(category);
    console.log('this.moviesList -> ', this.moviesList);
  }
}

const listMovies = new Movies();

listMovies.getMovies('popular');
listMovies.getMovies('latest');