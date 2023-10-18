import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ActorsList } from 'services/ActorsList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

const Cast = () => {
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        setLoading(true);
        const actorsData = await ActorsList(moviesId);
        setActors(actorsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchActors();
  }, [moviesId]);

  const showPosts = actors && Object.keys(actors).length > 0;

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {showPosts && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`} alt={actor.name} />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;