  export const getAllMovies = async () => {
    try {
      let response = await fetch("https://bagussp-imdb.netlify.app/api/movie");
      let movie = await response.json();
      return movie
    } catch (error) {
      console.error(error);
    }
  };