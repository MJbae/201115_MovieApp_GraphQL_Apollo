const { RESTDataSource } = require("apollo-datasource-rest");

class MoviesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL =
      "https://api.themoviedb.org/3/movie/popular?api_key=11e0d23cc432799dedd841fb8b653902&language=en-US&page=1/";
  }

  movieReducer(movie) {
    return {
      id: movie.id,
      title: movie.original_title,
    };
  }

  async getMovies() {
    const response = await this.get();
    return response.results.map((movie) => this.movieReducer(movie));
  }

  // async getMostViewedMovies(limit = 10) {
  //   const data = await this.get("movies", {
  //     per_page: limit,
  //     order_by: "most_viewed",
  //   });
  //   return data.results;
  // }
}

module.exports = MoviesAPI;
