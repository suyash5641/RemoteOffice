import React from "react";
import "./LeaveForm.css";
import logout from "../img/logout.svg";
import notificationicon from "../img/notification icon.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory } from "react-router";
import useLeaveform from "./useLeaveform";
import ButtonComponent from "../sdk/ButtonComponent";
//import Popup from "../Popup/Popup";

function LeaveForm() {
  let history = useHistory();
  const { startDate, endDate, reason, leaveType, totalDays, a, start, setStartDate, setEndDate, setReason, setLeaveType, setVal, setStart, setTotalDays } = useLeaveform();

  React.useEffect(() => {
    //calcutae total days
    const end_date = new Date(endDate).getTime();
    const start_date = new Date(startDate).getTime();
    const result = 1 + Math.ceil((end_date - start_date) / (1000 * 60 * 60 * 24));
    setTotalDays(result);
  }, [setTotalDays, startDate, endDate]);

  function handle() {
    setVal(!a);
    if (a) setStart("Select");
  }
  function handleChange(id) {
    //console.log(id);
    setStart(id);
    // console.log(start,"hello");
    setLeaveType(id);
  }
  function handleStartDate(event) {
    setStartDate(event);
    setEndDate(event);
  }
  // const [popupOpen, setPopupOpen] = useState(false);
  //console.log(totalDays);
  const Submit = React.useCallback(async () => {
    const access_token = localStorage.getItem("x-api-key");

    const data = {
      leaveFrom: startDate.toISOString(),
      leaveTo: endDate.toISOString(),
      leaveType: leaveType,
      reason: reason,
    };
    console.log(data);

    // console.log(access_token);
    function handleErrors(response) {
      if (!response.ok) throw Error(response.statusText);
      return response;
    }
    if (reason) {
      const url1 = "http://52.66.236.104/api/leave";
      await fetch(url1, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "x-api-key": `${access_token}`,
        },
      })
        .then(handleErrors)
        .then((res) => res.json())
        .then((data) => {
          history.push("/Complete");
        })
        .catch((err) => {
          alert("please fill all the details");
        });
    } else alert("please fill all the details");
  }, [startDate, endDate, leaveType, reason, history]);

  return (
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
      <div className="new-form">
        <form className="fm">
          <div className="start-new">
            <div className="leave-divone">
              <label className="label-text">From Date:</label>
              <DatePicker selected={startDate} onChange={handleStartDate} dateFormat="dd/MMM/yyyy" minDate={new Date()} className="date"></DatePicker>
            </div>
          </div>
          <div className="start-two">
            <label className="label-text-one">To Date: </label>
            <DatePicker
              selected={endDate}
              onChange={(value) => {
                setEndDate(value);
              }}
              dateFormat="dd/MMM/yyyy"
              minDate={startDate}
              className="date-one"
            />
          </div>
          <div className="style-div">
            <label className="labletext">Leave type:</label>
            <span className="select-form">
              <span onClick={handle}>{start}</span>
              {!a && (
                <div onClick={handle}>
                  <div>
                    <span className="leave" onClick={() => handleChange("sick")}>
                      Sick leave
                    </span>
                  </div>
                  <div>
                    <span className="leave" onClick={() => handleChange("casual")}>
                      Casual leave
                    </span>
                  </div>
                  <div>
                    <span className="leave" onClick={() => handleChange("other")}>
                      others
                    </span>
                  </div>
                </div>
              )}
            </span>
          </div>
          <div>
            <label className="label-textdays">Total Days:</label>
            <input type="numeric" className="day-calc" id="myInput" value={totalDays || 1} onChange={(e) => setTotalDays(e.target.value)}></input>
          </div>
          <div>
            <div className="label-last">
              <label className="label-text-new">Reason:</label>
              <textarea
                type="text"
                className="reason"
                name="resonn"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="submit-bttn">
            <ButtonComponent onClick={Submit}>Submit</ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
}
export default LeaveForm;
