import { useState, useEffect, useRef } from "react";

export const useApi = url => {
  const [state, setState] = useState({ data: null, loading: true });
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      // called when component is going to unMount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isCurrent.current) {
          setState({ data, loading: false });
        }
      })
      .catch(err => console.log(err));
  }, [url]);

  return state;
};
