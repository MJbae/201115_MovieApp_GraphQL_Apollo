const Person = {
  name: "Manjin Bae",
  age: 30,
  gender: "Male",
};

const resolvers = {
  Query: {
    MJ: () => Person,
  },
};

export default resolvers;
