import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { DayList } from 'services/DayList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

export const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') || '';

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

  const filteredSearch = links.filter(
    link => link.title && link.title.toLowerCase().includes(query.toLowerCase())
  );

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
        {links !== null && (
          <ul>
            {links &&
              filteredSearch.map(link => (
                <li key={link.id}>
                  <Link to={`/movies/${link.id}`} state={{ from: location }}>
                    {link.title || link.name}
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
