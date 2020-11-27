const { ApolloServer, gql } = require("apollo-server");
const MoviesAPI = require("./datasources/movie");

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
  }

  type Query {
    movies: [Movie]!
  }
`;

const dataSources = () => ({
  launchAPI: new LaunchAPI(),
  MoviesAPI: new MoviesAPI(),
});

const resolvers = {
  Query: {
    movies: async (_, __, { dataSources }) => {
      const allMovies = await dataSources.MoviesAPI.getMovies();

      return allMovies;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports = {
  dataSources,
  typeDefs,
  resolvers,
  ApolloServer,
  MoviesAPI,
};
