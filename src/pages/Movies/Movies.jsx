import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchList } from 'services/SearchList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

export const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;

    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const movieInfo = await searchList(query);
        setFilms(movieInfo.results);
        console.log(movieInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchingString = event.currentTarget.elements.searchMovie.value;
    setSearchParams({ query: searchingString });
  };

  return (
    <div className={css.div}>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Enter...</p>
          <input type="text" name="searchMovie" required />
        </label>
        <button type="submit">Search</button>
      </form>
      <section>
        {loading && <Loader />}
        {error && <Error message={error} />}
        {films.length > 0 && (
          <ul>
            {films.map(film => (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>
                  {film.title || film.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Movies;
