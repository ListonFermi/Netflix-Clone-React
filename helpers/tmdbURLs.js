const API_KEY_HERE = import.meta.env.VITE_API_KEY_HERE;

const tmdb= {
  baseURL: "https://api.themoviedb.org/3",

  imageURLOriginal: "https://image.tmdb.org/t/p/original",

  imageURLSmall: "https://image.tmdb.org/t/p/w500",

  trending: `/trending/all/week?api_key=${API_KEY_HERE}&language=en-US`,

  action: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=28`,

  originals: `/discover/tv?api_key=${API_KEY_HERE}&with_networks=213`,

  comedy: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=35`,

  horror: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=27`,

  action: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=28`,

  romanceMovies: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749`,

  documentaries: `/discover/movie?api_key=${API_KEY_HERE}&with_genres=99`,
};

export default tmdb
