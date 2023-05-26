import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'api_key=c58a02c56b9ca1a7c220c591cdd54fa6';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/all/day?${KEY}`);
    const moviesList = response.data.results;
    return moviesList;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMovie = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${movieId}?${KEY}`);

    const { poster_path, title, vote_average, overview, genres } =
      response.data;
    return { poster_path, title, vote_average, overview, genres };
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?${KEY}`
    );

    const cast = response.data.cast.map(
      ({ name, character, id, profile_path }) => ({
        name,
        character,
        id,
        profile_path,
      })
    );
    return cast;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?${KEY}`
    );

    const reviews = response.data.results.map(({ author, id, content }) => ({
      author,
      id,
      content,
    }));

    return reviews;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesByName = async movieName => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?query=${movieName}&include_adult=false&language=en-US&page=1&${KEY}`
      // 'https://api.themoviedb.org/3/search/movie?query=hi&include_adult=false&language=en-US&page=1&api_key=c58a02c56b9ca1a7c220c591cdd54fa6'
    );
    const moviesList = response.data.results;
    return moviesList;
  } catch (error) {
    console.log(error.message);
  }
};

// 'https://api.themoviedb.org/3/search/movie?query=hi&include_adult=false&language=en-US&page=1'
