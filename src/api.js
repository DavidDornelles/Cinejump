import axios from "axios";

class Api {
  static async getMoviesByCategory(category) {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=5947bc2184fbd0743bf96b5f416de9e1`);

    return data;
  }
}

export default Api;