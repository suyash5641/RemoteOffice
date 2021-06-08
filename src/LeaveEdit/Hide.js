import React, { useState } from "react";
import closeicon from "../img/closeicon.svg";
import "./Hide.css";
import "./LeaveEdit.css";
import { useHistory } from "react-router-dom";
function Hide(props) {
  const [isOpen, setIsopen] = useState(false);
  let history = useHistory();

  function Remove(init) {
    console.log(init);
    const access_token = localStorage.getItem("x-api-key");
    const url1 = `http://52.66.236.104/api/leave/${init}`;
    fetch(url1, {
      method: "DELETE",
      headers: {
        "x-api-key": `${access_token}`,
      },
    }).then(() => history.push("/Message"));
  }

  function Check() {
    setIsopen(!isOpen);
    var x = document.getElementById(props.index);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
    <div>
      <div id={props.index} className="m">
        <img src={closeicon} alt="closeicon" className="button-style" onClick={Check} />
        <br></br>
        <button
          className="text-box"
          onClick={() => {
            history.push(`/Leavemodify/${props.f}`);
          }}
        >
          modify leave
        </button>
        <br></br>
        <button className="text-box" onClick={() => Remove(props.f)}>
          Cancel leave
        </button>
      </div>
    </div>
  );
}
export default Hide;
