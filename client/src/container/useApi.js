import { useState, useEffect } from "react";

export const useApi = () => {
  const [state, setState] = useState({ trend: null, time: null });

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch("/ncov/api", { signal })
      .then(res => res.json())
      .then(data => {
        setState({
          trend: data.trend,
          time: data.time
        });
      })
      .catch(err => console.log(err));

    return () => {
      abortController.abort();
    };
  }, []);

  return state;
};
