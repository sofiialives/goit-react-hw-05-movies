import { useParams } from 'react-router-dom';
import { FullInfo } from 'services/FullInfo';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const { moviesId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    FullInfo(moviesId).then(data => {
      console.log(data);
      setInfo(data);
    });
  }, [moviesId]);

  return (
    <>
      <div key={moviesId}>
        <button>Go Back</button>
        {info.map(inf => (
          <div>
            <img src={inf.poster_path} alt={inf.title || inf.name} />
            <h1>
              {inf.title || inf.name}({inf.release_date})
            </h1>
            <p>User Score: {inf.vote_average}%</p>
            <h2>Overview</h2>
            <p>{inf.overview}</p>
            <h3>Genres</h3>
            <p>Genres...</p>
          </div>
        ))}
      </div>
    </>
  );
};
