const Movies = [
  {
    id: 0,
    name: "MJ",
    score: 8,
  },
  {
    id: 1,
    name: "M",
    score: 5,
  },
  {
    id: 2,
    name: "J",
    score: 9,
  },
  {
    id: 3,
    name: "MJ",
    score: 3,
  },
  {
    id: 4,
    name: "MaaJ",
    score: 2,
  },
];

const getById = (id) => {
  const filteredMovie = Movies.filter((movie) => movie.id === id);
  return filteredMovie[0];
};

const deleteMovie = (id) => {
  const leftMovies = Movies.filter((movie) => movie.id !== id);
  if (leftMovies.length < Movies.length) {
    Movies = leftMovies;
    return true;
  } else {
    return false;
  }
};

export { Movies, getById, deleteMovie };
