import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import { ReviewsList } from 'services/ReviewsList';

export const Reviews = () => {
  const { moviesId } = useParams();
  const [loading, setLoading] = useState(false);
  const [revs, setRevs] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const revsData = await ReviewsList(moviesId);
        setRevs(revsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [moviesId]);

  const showPosts = revs && Object.keys(revs).length > 0;

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {showPosts ? (
        <ul>
          {revs.results.map(rev => (
            <li key={rev.id}>
              <h3>Author: {rev.author}</h3>
              <p>{rev.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        'We dont have any reviews for this movie'
      )}
    </>
  );
};
