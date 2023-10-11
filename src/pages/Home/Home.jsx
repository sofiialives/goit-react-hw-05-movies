import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DayList } from 'services/DayList';
import css from './Home.module.css'

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    DayList().then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.moviesList}>
        {movies.map(movie => (
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
