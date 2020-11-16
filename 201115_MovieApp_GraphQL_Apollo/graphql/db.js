const MovieAPI_URL = "https://yts.mx/api/v2/list_movies.json?";
const fetch = require("node-fetch");

const getMovies = (limit, minRating) => {
  let REQUESTED_URI = MovieAPI_URL;
  if (limit > 0) {
    REQUESTED_URI += `&limit=${limit}`;
  }
  if (minRating > 0) {
    REQUESTED_URI += `&minimum_rating=${minRating}`;
  }

  return fetch(REQUESTED_URI)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

export { getMovies };
