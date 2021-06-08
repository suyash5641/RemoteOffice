import { useState, useEffect } from "react";
export default function useStandupEdit({ Id }) {
  const [today, setToday] = useState("");
  const [yesterday, setYesterday] = useState("");
  useEffect(() => {
    async function EditStandup() {
      // console.log(Id);
      const access_token = localStorage.getItem("x-api-key");
      const url1 = "http://52.66.236.104/api/standup/";
      const response = await fetch(url1 + Id, {
        method: "GET",
        headers: {
          "x-api-key": `${access_token}`,
        },
      });
      const json = await response.json();
      setYesterday(json.data?.split("**")[0]);
      setToday(json.data?.split("**")[1]);
    }
    EditStandup();
  }, [Id]);

  return { today, yesterday, setToday, setYesterday };
}
