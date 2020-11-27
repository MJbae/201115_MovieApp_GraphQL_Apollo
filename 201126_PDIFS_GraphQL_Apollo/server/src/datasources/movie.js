const { RESTDataSource } = require("apollo-datasource-rest");
const MOVIE_BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `list_movies.json`;
const MOVIE_DETAILS_URL = `movie_details.json`;

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = MOVIE_BASE_URL;
  }

  movieReducer(movie) {
    return {
      id: movie.id,
      title: movie.title,
      rating: movie.rating,
      language: movie.language,
    };
  }

  async getAllMovies() {
    const {
      data: { movies },
    } = await this.get(LIST_MOVIES_URL);
    return Array.isArray(movies)
      ? movies.map((movie) => this.movieReducer(movie))
      : [];
  }

  async getMoviesByConditions({ limit, minRating }) {
    const {
      data: { movies },
    } = await this.get(LIST_MOVIES_URL, {
      limit: limit,
      minimum_rating: minRating,
    });
    return Array.isArray(movies)
      ? movies.map((movie) => this.movieReducer(movie))
      : [];
  }

  async getMovieById({ movieId }) {
    const {
      data: { movie },
    } = await this.get(MOVIE_DETAILS_URL, { movie_id: movieId });
    return this.movieReducer(movie);
  }
}

module.exports = MovieAPI;
