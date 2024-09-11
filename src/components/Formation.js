import React from 'react';
import useFetchFormations from './useFetchFormations';
import Loading from './Loading';
import Error from './Error';

const Formation = () => {
  const { formations, loading, error } = useFetchFormations();

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <div>
      {formations.map(formation => (
        <div key={formation.id}>
          <h2>{formation.title}</h2>
          <p>{formation.description}</p>
          <img src={formation.media[0]?.original_url} alt={formation.title} />
        </div>
      ))}
    </div>
  );
};

export default Formation;
