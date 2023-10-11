export const DayList = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=b6e6c21ac077893d8efa67c324fb45b8'
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
