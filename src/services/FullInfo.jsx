export const FullInfo = (movie_id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b6e6c21ac077893d8efa67c324fb45b8`
  )
      .then(resp => {
        if (!resp.ok) {
          throw new Error('calm down for real');
        }
        return resp.json();
      })
      .catch(error => {
        console.error(`wow calm down ...${error}`);
        throw error;
      });
  };
  