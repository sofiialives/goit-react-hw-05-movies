export const searchList = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b6e6c21ac077893d8efa67c324fb45b8&query=${query}`
    );
  
    if (!response.ok) {
      throw new Error('some troubles...');
    }
  
    const data = await response.json();
    return data;
  };
  