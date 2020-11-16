import { getMovies } from "./db";

const resolvers = {
  Query: {
    getAllMovies: (_, args) => getMovies(args.limit, args.minRating),
  },
};

export default resolvers;
