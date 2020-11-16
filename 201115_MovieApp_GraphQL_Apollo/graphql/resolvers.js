import { People } from "./db";

const resolvers = {
  Query: {
    showPeople: () => People,
  },
};

export default resolvers;
