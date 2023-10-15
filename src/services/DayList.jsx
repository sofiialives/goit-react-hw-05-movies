export const DayList = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=b6e6c21ac077893d8efa67c324fb45b8'
  );

  if (!response.ok) {
    throw new Error('some troubles...');
  }

  const data = await response.json();
  return data;
};
