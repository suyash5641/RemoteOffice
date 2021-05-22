import React, { useState } from "react";
import './LeaveForm.css';
import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const LEAVE_TYPES = [
  'Casual',
  'Sick',
  'Others'
]
function LeaveForm()
{
    const [Date1, setDate1] = useState(new Date()); 
    const [Date2, setDate2] = useState(new Date()); 
    const [r,setReason]=useState("");
    const[total,setTotal]=useState(0);
    function calc()
    {
      const a=Date2.getTime();
      const b=Date1.getTime();
      const result=(a-b)/(86400000);
      const c=Math.floor(result);
      if(c>=1)
        setTotal(c+1);
      else if(c===0)
        setTotal(c+1);
    }
    function convert(str) {
      
        const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [day,mnth,date.getFullYear()].join("/");
    }
 
    function Data()
    {
     // console.log(convert(Date1));
      //console.log(convert(Date2));
      //console.log(r);
      
      const d={start_date:convert(Date1),end_date:convert(Date2),reason:r}
      const n={...d};
      console.log(n);
      fetch("http://localhost:8080/leave",{
        method:'POST',
        headers:{'content-type':'application.json'},
        body:JSON.stringify(d)
       }).then(v=>v.json()).then(response=>{
      if(response){
        alert("created ");
      }
    })
    }
      
    /**
     * ritik block starts
     */

    const [fromDate, setFromDate] = React.useState(new Date())
    const [toDate, setToDate] = React.useState(new Date())
    const [leaveType, setLeaveType] = React.useState(LEAVE_TYPES[0])
    const [totalDays, setTotalDays] = React.useState(1)
   // const [reason, setReason] = React.useState('')

    React.useEffect(() => {
      //calcutae total days
      setTotalDays(2)
    }, [fromDate, toDate])

    const Submit = () => {
      const payload = {
        fromDate:convert(Date1),
        toDate:convert(Date2),
        leaveType:"others",
        reason: r,
      }
      console.log(payload);
      fetch('http://localhost:8080/leaves', payload).then(response=>{
        if(response){
          alert("created ");
        }
      })
    }

   
return (
    <div className="main-body">
         <div className="header-form">
         <div className="div-grp">
         <KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"20px"}}/>
             <span className="txt">Leave Application</span>
          </div>
          <div className="div-grp-two">
            <img src={notificationicon} className="notification-icon"/> 
            <img src={logout} className="logout"/> 
            </div>
         </div>
         <div className="new-form">
          <form className="fm" >
          <div className="start-one">
            
              <div className="first-divone">
              <label className="label-text">From Date:</label>
              <DatePicker selected={Date1} 
            onChange={(value)=>{setDate1(value)}}
            dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              className="date"
              />
              </div>
          </div>
          <div>
              <label className="label-text-one">To Date: </label>
              <DatePicker selected={Date2} 
            onChange={(value)=>{setDate2(value)}}
            dateFormat='dd/MM/yyyy'
              minDate={Date1}
              className="date-one"/>
          </div> 
          <div>
              <label className="label-text" >Leave type:</label>
              <select id="" name="" className="select-form">
              <option value="" disabled selected>Select</option>
              <option value="Sick leave">Sick leave</option>
              <option value="Casual leave">Casual leave</option>
              <option value="others">others</option>
              </select>
          </div> 
          <div>
              <label className="label-text">Total Days:</label>
              <input type="numeric" className="day-calc" 
              onSelect={calc}
              value={total}></input>
          </div>   
          <div>
              <div className="data">
              <label className="label-text-new">Reason:</label>
              <textarea type="text" className="reason" name="resonn" 
              onChange={(e)=>{setReason(e.target.value)}}
              ></textarea>
              </div>
          </div>
              <Button variant='contained'  fullWidth='true'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"112px",
            height:"43px",marginTop:"30px",marginLeft:"120px" } }
            onClick={Submit} > 
            Submit
          </Button>
          </form>
         </div>
    </div>
)
}
export default LeaveForm;