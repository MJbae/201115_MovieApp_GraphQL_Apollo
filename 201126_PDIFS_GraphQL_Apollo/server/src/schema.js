const { gql } = require("apollo-server");

const typeDefs = gql`
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]!
    token: String
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
  type Movie {
    id: Int!
    title: String!
    rating: Float
    language: String
    genres: [String]
    description_intro: String
    medium_cover_image: String
    small_cover_image: String
  }

  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
    someMovies(limit: Int!, minRating: Int!): [Movie]!
    movies: [Movie]!
    movie(id: Int!): Movie!
  }
  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): User
  }
  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
