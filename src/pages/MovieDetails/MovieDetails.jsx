import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { FullInfo } from 'services/FullInfo';
import { useState, useEffect, useRef } from 'react';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/')
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!moviesId) return;

    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const movieInfo = await FullInfo(moviesId);
        setInfo(movieInfo);
        console.log(movieInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [moviesId]);

  const showPosts = info && Object.keys(info).length > 0;

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      {showPosts && (
        <div key={moviesId} className={css.commonDiv}>
          <Link to={backLinkHref.current} className={css.button}>&#8592; Go Back</Link>
          <img src={info.backdrop_path} alt={info.title || info.name} />
          <div className={css.infoDiv}>
            <h1>
              {info.title || info.name} ({info.release_date})
            </h1>
            <p>User Score: {info.vote_average}%</p>
            <h2>Overview</h2>
            <p>{info.overview}</p>
            <h3>Genres</h3>
            <p>
              {info.genres && info.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
          <div className={css.addDiv}>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Review</Link>
              </li>
            </ul>
          </div>
          <Outlet/>
        </div>
      )}
    </div>
  );
};
