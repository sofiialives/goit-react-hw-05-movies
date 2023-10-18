import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DayList } from 'services/DayList';
import css from './Home.module.css';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const moviesPost = await DayList();
        setMovies(moviesPost.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const showPosts = Array.isArray(movies) && movies.length;

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <Error message={error} />}
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.moviesList}>
        {showPosts &&
          movies.map(movie => (
            <li key={movie.id} className={css.movies}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
