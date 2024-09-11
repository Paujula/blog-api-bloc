import { useState, useEffect } from 'react';

const useFetchFormations = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await fetch('https://mten.ficatgroup.com/api/v1/formations-listes');
        if (!response.ok) {
          throw new Error('Erreur de réseau');
        }
        const result = await response.json();
        setFormations(result.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFormations();
  }, []);

  return { formations, loading, error };
};

export default useFetchFormations;
