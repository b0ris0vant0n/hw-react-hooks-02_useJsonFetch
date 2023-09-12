import { useState, useEffect } from 'react';

function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, opts);

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, opts]);

  return [data, loading, error];
}

export default useJsonFetch;
