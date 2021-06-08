import React from "react";
import logout from "../img/logout.svg";
import notificationicon from "../img/notification icon.svg";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import calendericon from "../img/calendericon.svg";
import Edit from "../img/Edit2icon.svg";
import "./Standuphistory.css";
import { useHistory } from "react-router-dom";
import useStanduphistory from "./useStanduphistory";
import ReactMarkdown from "react-markdown";
function Standuphistory() {
  // const posts = resource?.posts.read();
  // console.log(posts);
  const { standUp, state, Setstate } = useStanduphistory();
  let history = useHistory();
  function convert(str) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(str),
      mn = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, month[mn - 1], date.getFullYear()].join(" ");
  }
  function handleEdit(pos, t) {
    history.push(`/StandupEdit/${pos}`);
  }

  function Open(v) {
    const x = document.getElementById(v);
    if (state === 0) {
      x.style.height = "fit-content";
      const z = document.getElementById(v + 5);
      const c = x.offsetHeight - 40 + "px";
      Setstate(1);
      z.style.marginTop = c;
    } else {
      x.style.height = "138px";
      const z = document.getElementById(v + 5);
      Setstate(0);
      z.style.marginTop = "78px";
    }
  }
  return (
    <>
      <div className="container">
        <div className="header-form">
          <div className="div-grp">
            <KeyboardBackspaceIcon
              className="arrow"
              style={{ color: "white", marginTop: "16px" }}
              onClick={() => {
                history.goBack();
              }}
            />
            <span className="txt">Previous Standups</span>
          </div>
          <div className="div-grp-two">
            <img src={notificationicon} alt="notification icon" className="notification-icon" />
            <img
              src={logout}
              className="logout"
              alt="logout icon"
              onClick={() => {
                history.push("/");
              }}
            />
          </div>
        </div>
        <div className="text-grpfirst">
          <span className="textsecond">Last five Standups</span>
          <img src={calendericon} alt="calender icon" className="divimg"></img>
        </div>

        {standUp.map(
          (c, k) =>
            k < 5 && (
              <div id={k} className="details" key={standUp[k].id}>
                <div className="text-grpfirst">
                  <div className="text-grpfirst">
                    <img src={calendericon} alt="calender icon" className="divimgone"></img>
                    <span className="divtextone">{convert(standUp[k].createdAt.split("T")[0])}</span>
                  </div>
                  <img src={Edit} alt="edit icon" onClick={() => handleEdit(standUp[k].id, k)} className="Editicon2" />
                </div>
                <div className="prev-standup">
                  <div className="standup-content">
                    <blockquote>What I did yesterday?</blockquote>
                    <div className="content-new">
                      {[...Array(Object.keys(standUp[k].data?.split("**")[0]?.split("\n")).length)].map((ele, index) => (
                        <div className="circle-div" key={standUp[k].data?.split("**")[0].split("\n")[index]}>
                          <ReactMarkdown className="d">{standUp[k].data.split("**")[0].split("\n")[index]}</ReactMarkdown>
                        </div>
                      ))}
                    </div>

                    <blockquote>What will I do today?</blockquote>
                    <div className="content-new">
                      {[...Array(Object.keys(standUp[k].data?.split("**")[1]?.split("\n")).length)].map((ele, index) => (
                        <div className="circle-div" key={standUp[k].data?.split("**")[1].split("\n")[index]}>
                          <ReactMarkdown className="d">{standUp[k]?.data.split("**")[1]?.split("\n")[index]}</ReactMarkdown>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id={k + 5} className="show" onClick={() => Open(k)}>
                    <span>Show...</span>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
}
export default Standuphistory;
