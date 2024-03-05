import { useState, useEffect } from 'react';

export const useFetchHotelsData = () => {
  const [hotelsData, setHotelsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/84d90121-9e25-4c24-8127-a37e8d1ec335')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.statusText);
        }
      })
      .then((data) => {
        setHotelsData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { hotelsData, loading, error };
};
