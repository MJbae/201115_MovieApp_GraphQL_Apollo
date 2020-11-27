module.exports = {
  Query: {
    launches: (_, __, { dataSources }) =>
      dataSources.launchAPI.getAllLaunches(),
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
    movies: (_, __, { dataSources }) => dataSources.movieAPI.getAllMovies(),
    movie: (_, { id }, { dataSources }) =>
      dataSources.movieAPI.getMovieById({ movieId: id }),
    someMovies: (_, { limit, minRating }, { dataSources }) =>
      dataSources.movieAPI.getMoviesByConditions({
        limit: limit,
        minRating: minRating,
      }),
  },
};
