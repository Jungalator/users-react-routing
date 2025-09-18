import { useState, useEffect } from "react";

export const useFetch = (fetchUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(fetchUrl, { signal });

        if (!response.ok) {
          throw new Error(`Error of HTTP request: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch (error) {
        if (error !== "AbortError") setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();

    return () => {
      controller.abort();
    };
  }, [fetchUrl]);
  return [data, loading, error];
};
