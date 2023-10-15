import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { useSearchParams, Link } from 'react-router-dom';
import { DayList } from 'services/DayList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

export const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const movieInfo = await DayList(query);
        setLinks(movieInfo.results);
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
        {error && <Error />}
        {links !== null && (
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Link to={`/movies/${link.id}`}>{link.title || link.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};
