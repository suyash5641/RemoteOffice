import { useState, useEffect } from "react";
export default function useStanduphistory() {
  const [state, Setstate] = useState(0);
  const [standUp, setStandUp] = useState([]);

  useEffect(() => {
    async function fetchStandup() {
      const access_token = localStorage.getItem("x-api-key");
      const url1 = "http://52.66.236.104/api/standup";
      const response = await fetch(url1, {
        method: "GET",
        headers: {
          "x-api-key": `${access_token}`,
        },
      });
      const json = await response.json();
      setStandUp(json);
    }
    fetchStandup();
  }, []);

  return { standUp, state, Setstate };
}
