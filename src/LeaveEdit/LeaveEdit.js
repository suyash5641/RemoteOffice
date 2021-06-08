import React from "react";
import "./LeaveEdit.css";
import logout from "../img/logout.svg";
import notificationicon from "../img/notification icon.svg";
import annual from "../img/annual.svg";
import sunbed from "../img/sunbed.svg";
import sneeze from "../img/sneeze.svg";
import IconEdit from "../img/IconEdit.svg";
import calendericon from "../img/calendericon.svg";
import Hide from "./Hide";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
//import ButtonComponent from "../sdk/ButtonComponent";
import { useHistory } from "react-router-dom";
import useLeaveEdit from "./useLeaveEdit";
function LeaveEdit() {
  let history = useHistory();
  const { leaveinfo, sickleave, casualleave, totalsickleave, totalcasualleave, otherleave, totalotherleave } = useLeaveEdit();
  function handleClick() {
    history.push("/LeaveForm");
  }
  function convert(str) {
    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const date = new Date(str),
      mn = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, month[mn - 1], date.getFullYear()].join(" ");
  }
  function Check(key) {
    var x = document.getElementById(key);

    if (x.style.display !== "none" && x.style.display !== "block") x.style.display = "block";
    else if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <>
      <div className="content" id="fullheight">
        <div className="header-form">
          <div className="div-grp">
            <KeyboardBackspaceIcon
              className="arrow"
              style={{ color: "white", marginTop: "16px" }}
              onClick={() => {
                history.goBack();
              }}
            />
            <span className="txt">Leave Application</span>
          </div>
          <div className="div-grp-two">
            <img src={notificationicon} alt="notification icon" className="notification-icon" />
            <img
              src={logout}
              alt="logout icon"
              onClick={() => {
                history.push("/");
              }}
              className="logout"
            />
          </div>
        </div>
        <div className="box">
          <div className="div-one">
            <div className="first-div">
              <img src={sneeze} alt="sneeze" className="sickimg"></img>
              <span className="div-one-text">Sick Leave</span>
            </div>
            <span className="info">
              <span className="info-one">{sickleave}</span>/{totalsickleave}
            </span>
          </div>
          <div className="div-one">
            <div className="first-div">
              <img src={sunbed} alt="sunbed" className="sickimg"></img>
              <span className="div-two-text">Casual Leave</span>
            </div>
            <span className="info">
              <span className="info-one">{casualleave}</span>/{totalcasualleave}
            </span>
          </div>
          <div className="div-one">
            <div className="first-div">
              <img src={annual} alt="annual" className="sickimg"></img>
              <span className="div-three-text">Annual Leave</span>
            </div>
            <span className="info-div">
              <span className="info-divone">{otherleave}</span>/{totalotherleave}
            </span>
          </div>
        </div>
        <div className="st">
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              color: "white",
              backgroundColor: "#307FE2",
              width: "180px",
              height: "50px",
              marginTop: "18px",
              marginLeft: "10px",
            }}
            onClick={handleClick}
          >
            Apply Leave
          </Button>
        </div>
        <br></br>
        <div className="st">
          <span className="recent">Recent leave history</span>
        </div>

        {leaveinfo.map((c, k) => (
          <div className="Leavedetail" key={leaveinfo[k].id}>
            <div className="first">
              <div className="first-add">
                <div className="setflex">
                  <img src={calendericon} alt="calender icon" className="first-add-img" />
                  <span className="list">{convert(leaveinfo[k].leaveFrom.split("T")[0])}</span>

                  <span className="list-one">To</span>

                  <img src={calendericon} alt="calender icon" className="first-add-img" />
                  <span id="list-new">{convert(leaveinfo[k].leaveTo.split("T")[0])}</span>
                </div>
              </div>
              <div>
                <img src={IconEdit} alt="edit icon" className="set" onClick={() => Check(k)} />
              </div>
            </div>
            <div className="reset">
              <Hide index={k} f={leaveinfo[k].id} />
            </div>
            <div className="second">
              <span>{leaveinfo[k].reason}</span>
            </div>
            <div className="final"></div>
          </div>
        ))}
      </div>
    </>
  );
}
export default LeaveEdit;
