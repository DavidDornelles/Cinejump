import axios from "axios";

const endPoint = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

async function getMovies(id:string) {
  const { data } = await endPoint
    .get(`/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&page=1&region=BR`);
  return data;
}

async function getMovieTrailers(movies:any[]) {
  const trailers = await axios
    .all(movies
      .slice(0,8)
      .map((movie) => endPoint
        .get(`/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&page=1&region=BR`)
        .then(response => response.data.results[0])
        .catch(error => error)
      )
    )
    .then(response => response.filter((el: undefined) => el !== undefined))
    .catch(error => error);
  return [...trailers];
};

async function getFavoriteMovie(movies:number[]) {
  const favorites = await axios
    .all(movies?.map((movie) => endPoint
      .get(`/${movie}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
      .then(response => response.data)
      .catch(error => error)
    ))
  return favorites;
}

async function getMovieById(id:string|undefined) {
  const movie = await endPoint
    .get(`/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR&page=1&region=BR&append_to_response=videos,images,recommendations,keywords,credits`)
    .then(response => response.data)
    .catch(error => error);
  return movie;
};

export {
  getMovies,
  getMovieTrailers,
  getFavoriteMovie,
  getMovieById,
};