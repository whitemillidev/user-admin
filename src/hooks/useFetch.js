import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid url");
        }
        setError();
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        setError(err.massage);
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { loading, data, error };
}
