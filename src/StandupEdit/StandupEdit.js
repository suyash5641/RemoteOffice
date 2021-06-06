import React from "react";
import logout from "../img/logout.svg";
import notificationicon from "../img/notification icon.svg";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Button from "@material-ui/core/Button";
import historyicon from "../img/History icon.svg";
import calendericon from "../img/calendericon.svg";

import { useHistory, useParams } from "react-router";
import useStandupEdit from "./useStandupEdit";
function StandupEdit() {
  // console.log(props.h);
  const { Id } = useParams();
  const { today, yesterday, setToday, setYesterday } = useStandupEdit({ Id });
  let history = useHistory();

  // console.log(obj);

  async function HandleChanges() {
    const obj = {
      data: yesterday + "**" + today,
    };
    if (yesterday && today) {
      const access_token = localStorage.getItem("x-api-key");
      await fetch("http://localhost:8080/api/standup/" + Id, {
        method: "PUT",
        headers: {
          "x-api-key": `${access_token}`,
        },
        body: JSON.stringify(obj),
      });
      history.push("/Standuphistory");
    } else alert("please fill all the details");
  }

  // console.log(detail.data);
  return (
    <>
      <div className="main-body">
        <div className="header-form">
          <div className="div-grp">
            <KeyboardBackspaceIcon
              className="arrow"
              style={{ color: "white", marginTop: "16px" }}
              onClick={() => {
                history.goBack();
              }}
            />
            <span className="txt">Standup</span>
          </div>
          <div className="div-grp-two">
            <img src={notificationicon} alt="notification icon" className="notification-icon" />
            <img src={logout} alt="logout icon" className="logout" />
          </div>
        </div>
        <div className="main-heading">
          <div>
            <span className="standup-heading">What I Did Yesterday ?</span>
          </div>
          <textarea className="standup-input" type="text" defaultValue={yesterday} onChange={(e) => setYesterday(e.target.value)}></textarea>
        </div>
        <div className="main-heading">
          <div>
            <span className="standup-heading">What I Will Do Today ?</span>
          </div>
          <textarea className="standup-input" type="text" defaultValue={today} onChange={(e) => setToday(e.target.value)}></textarea>
        </div>
        <div className="bttn">
          <Button
            variant="contained"
            style={{ textTransform: "none", color: "white", backgroundColor: "#307FE2", width: "155px", height: "43px", marginTop: "15px" }}
            onClick={HandleChanges}
          >
            Save Changes
          </Button>
        </div>
        <div className="standup-footer">
          <div className="div-last">
            <img
              src={historyicon}
              alt="history icon"
              className="footer-img"
              onClick={() => {
                history.push("/Standuphistory");
              }}
            />
            <span className="last-txt">Previous Standup</span>
          </div>
          <img src={calendericon} alt="calender icon" className="set-footer-img" />
        </div>
      </div>
    </>
  );
}
export default StandupEdit;
