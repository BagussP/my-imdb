  export const getAllMovies = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/movie");
      let movie = await response.json();
      return movie
    } catch (error) {
      console.error(error);
    }
  };