import axios from 'axios';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=c58a02c56b9ca1a7c220c591cdd54fa6'
    );
    // const moviesList = response.data.results.map(({ id, title }) => ({
    //   id,
    //   title,
    // }));
    const moviesList = response.data.results;
    console.log(moviesList);
    return moviesList;
  } catch (error) {
    console.log(error.message);
  }
};
