import { Movies, getById, deleteMovie, addMovie } from "./db";

const resolvers = {
  Query: {
    getMovies: () => Movies,
    getFilteredMovie: (_, arg) => getById(arg.id),
  },
  Mutation: {
    addOneMovie: (_, arg) => addMovie(arg.name, arg.score),
  },
};

export default resolvers;
