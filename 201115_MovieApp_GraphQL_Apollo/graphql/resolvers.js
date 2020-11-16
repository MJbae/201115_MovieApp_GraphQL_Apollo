import { Movies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    getMovies: () => Movies,
    getFilteredMovie: (_, arg) => getById(arg.id),
  },
  Mutation: {
    addOneMovie: (_, arg) => addMovie(arg.name, arg.score),
    deleteOneMovie: (_, arg) => deleteMovie(arg.id),
  },
};

export default resolvers;
