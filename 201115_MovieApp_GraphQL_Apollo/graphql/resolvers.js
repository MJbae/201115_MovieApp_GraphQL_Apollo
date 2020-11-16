import { Movies, getById, deleteMovie } from "./db";

const resolvers = {
  Query: {
    getMovies: () => Movies,
    getFilteredMovie: (_, arg) => getById(arg.id),
  },
  Mutation: {
    addMovie: (_, arg) => addMovie(arg.name, arg.score),
  },
};

export default resolvers;
