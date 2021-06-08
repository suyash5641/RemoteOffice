//import { useEffect } from "react";
export default function CreateResource() {
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
    return json;
  }
  function wrapPromise(promise) {
    let status = "loading";
    let result;
    let suspender = promise.then(
      (data) => {
        status = "success";
        result = data;
      },
      (error) => {
        status = "error";
        result = error;
      }
    );

    return {
      read() {
        if (status === "loading") {
          throw suspender;
        } else if (status === "error") {
          throw result;
        } else if (status === "success") {
          return result;
        }
      },
    };
  }
  return {
    posts: wrapPromise(fetchStandup()),
    // add here
  };
}

// add here
