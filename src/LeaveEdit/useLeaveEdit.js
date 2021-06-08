import { useState, useEffect } from "react";
export default function useLeaveEdit() {
  const [leaveinfo, setLeaveInfo] = useState([]);
  const [sickleave, setSickleave] = useState(0);
  const [casualleave, setCasualleave] = useState(0);
  const [totalsickleave, setTotalSickleave] = useState(12);
  const [totalcasualleave, setTotalCasualleave] = useState(13);
  const [otherleave, setOtherleave] = useState(0);
  const [totalotherleave, setTotalOtherleave] = useState(20);

  const url1 = "http://52.66.236.104/api/leave";
  const url2 = "http://52.66.236.104/api/leave/stat";
  useEffect(() => {
    const access_token = localStorage.getItem("x-api-key");
    fetch(url1, {
      method: "GET",
      headers: {
        "x-api-key": `${access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLeaveInfo(data);
        // console.log(data);
      });
  }, []);
  /* const scrollToEnd = () => {
    setPage(page + 1);
    setA(a + 2);
    setB(b + 2);
  };*/
  /* window.onscroll = function () {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) scrollToEnd();
  };*/
  useEffect(() => {
    async function fetchLeave() {
      const access_token = localStorage.getItem("x-api-key");
      const response = await fetch(url2, {
        method: "GET",
        headers: {
          "x-api-key": `${access_token}`,
        },
      });
      const json = await response.json();

      //  console.log(json);

      if (json[0]?.leaveType === "sick") {
        setSickleave(json[0].usedLeaves);
        setTotalSickleave(json[0].allowedLeaves);
        if (json[1]?.leaveType === "casual") {
          setCasualleave(json[1].usedLeaves);
          setTotalCasualleave(json[1].allowedLeaves);
          if (json[2]?.leaveType === "other") {
            setOtherleave(json[2].usedLeaves);
            setTotalOtherleave(json[2].allowedLeaves);
          }
        } else if (json[1]?.leaveType === "other") {
          setOtherleave(json[1].usedLeaves);
          setTotalOtherleave(json[1].allowedLeaves);
        }
      } else if (json[0]?.leaveType === "casual") {
        setCasualleave(json[0].usedLeaves);
        setTotalCasualleave(json[0].allowedLeaves);
        if (json[1]?.leaveType === "other") {
          setOtherleave(json[1].usedLeaves);
          setTotalOtherleave(json[1].allowedLeaves);
        }
      } else if (json[0]?.leaveType === "other") {
        setOtherleave(json[0].usedLeaves);
        setTotalOtherleave(json[0].allowedLeaves);
        if (json[1]?.leaveType === "casual") {
          setCasualleave(json[1].usedLeaves);
          setTotalCasualleave(json[1].allowedLeaves);
        }
      }
    }

    fetchLeave();
  }, []);

  return { leaveinfo, sickleave, casualleave, totalsickleave, totalcasualleave, otherleave, totalotherleave };
}
