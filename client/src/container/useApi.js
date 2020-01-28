import { useState, useEffect } from "react";

export const useApi = (url, defaultValue) => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(url, { signal })
      .then(res => res.json())
      .then(data => {
        setState(data);
      })
      .catch(err => console.log(err));

    return () => {
      abortController.abort();
    };
  }, [state]);

  return state;
};
