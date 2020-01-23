import { useState, useEffect } from "react";

export const useApi = () => {
  const [state, setState] = useState({ trend: {}, location: [], time: "" });

  useEffect(() => {
    fetch("/ncov/api")
      .then(res => res.json())
      .then(data => {
        setState({
          trend: data.trend,
          location: data.location,
          time: data.time
        });
      })
      .catch(err => console.log(err));
  }, []);

  return state;
};
