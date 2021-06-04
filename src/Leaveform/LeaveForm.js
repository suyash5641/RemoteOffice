import React from "react";
import './LeaveForm.css';
import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import useLeaveform from "./useLeaveform";

function LeaveForm()
{
  let history=useHistory();
  const {
  startDate,
  endDate,
  reason,
  leaveType,
  totalDays,
  a,
  start,
  setStartDate,
  setEndDate,
  setReason,
  setLeaveType,
  setVal,
  setStart,
  setTotalDays,}=useLeaveform();  
  

   React.useEffect(() => {
      //calcutae total days
      setTotalDays(1+(Math.floor((endDate.getTime()-startDate.getTime())/86400000)));
    //  console.log(totalDays);
    }, [setTotalDays,startDate,endDate])
    

    function handle()
    {
     setVal(!a);
     if(a)
     setStart("Select");
    }
    function handleChange(id)
    {
      //console.log(id);
      setStart(id);
     // console.log(start,"hello");
      setLeaveType(id);
    }
    function handleStartDate(event)
    {
      setStartDate(event);
      setEndDate(event);

    }
    
    const Submit = async () => {
      const access_token=localStorage.getItem('x-api-key');
 
      const data = {
        leaveFrom:startDate.toISOString(),
        leaveTo:endDate.toISOString(),
        leaveType:leaveType,
        reason: reason,
      }
     // console.log(data);
     
     // console.log(access_token);
      await fetch('http://localhost:8080/api/leave',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
         // "Content-type":"application/json;charset=UTF-8",
          'x-api-key':`${access_token}` 
        }
      })
      history.push('/Complete');
    }
  
    
   
return (
    <div className="main-body">
         <div className="header-form">
         <div className="div-grp">
         <KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"16px"}}
           onClick={()=>{history.goBack()}}/>
             <span className="txt">Leave Application</span>
          </div>
          <div className="div-grp-two">
            <img src={notificationicon} alt="notification icon" className="notification-icon"/> 
            <img src={logout} alt="logout icon"  onClick={()=>{history.push("/")}} className="logout"/> 
            </div>
         </div>
         <div className="new-form">
          <form className="fm" >
          <div className="start-new">
            
              <div className="leave-divone">
              <label className="label-text">From Date:</label>
              <DatePicker selected={startDate} 
              onChange={handleStartDate}
              dateFormat='dd/MMM/yyyy'
              minDate={new Date()}
              className="date"
              ></DatePicker> 
              
              </div> 
            
          </div>
          <div className="start-two">
              <label className="label-text-one">To Date: </label>
              <DatePicker selected={endDate} 
              onChange={(value)=>{setEndDate(value)}}
              dateFormat='dd/MMM/yyyy'
              minDate={startDate}
              className="date-one"/>
              
          </div> 
          <div className="style-div" >
                <label className="labletext" >Leave type:</label>
                <span className="select-form">
                  <span  onClick={handle} >{start}</span>
                    {!a && <div  onClick={handle}>
                   <div>
                     <span className="leave" onClick={()=>handleChange("sick")}>Sick leave</span>
                   </div>
                   <div>
                     <span className="leave" onClick={()=>handleChange("casual")}>Casual leave</span>
                   </div>
                   <div>
                      <span className="leave" onClick={()=>handleChange("other")}>others</span>
                   </div>
                   </div>}
                </span>
          </div> 
          <div>
              <label className="label-textdays">Total Days:</label>
              <input type="numeric" className="day-calc" defaultValue={totalDays}></input>
          </div>   
          <div >
              <div className="label-last">
              <label className="label-text-new">Reason:</label>
              <textarea type="text" className="reason" name="resonn" 
              onChange={(e)=>{setReason(e.target.value)}}
              ></textarea>
              </div>
          
          </div>
              <div className="submit-bttn">
              <Button variant='contained'    style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"155px",
              height:"43px",marginTop:"15px" } }
              onClick={Submit} > 
              Submit
              </Button>
              
              </div>
          </form>
         </div>
    </div>
)
}
export default LeaveForm;