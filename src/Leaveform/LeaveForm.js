import React, { useState } from "react";
import './LeaveForm.css';
import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import DatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
import calendericon from '../img/calendericon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Icon from "@material-ui/core/Icon";
import DateFnsUtils from '@date-io/date-fns'; 
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import axios from 'axios';
import ButtonComponent from '../sdk/ButtonComponent';
import { useHistory } from 'react-router';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const useStyles = makeStyles(theme=>({
  formControl:{
     minWidth:100
  },
  root: {
    backgroundColor:"#E2EEFD",
    //color:"#6C6C6C",
    fontFamily:"Lato",
    letterSpacing:"0.72px",
    fontSize:"14px",
    textAlign:"left",
    paddingLeft:"5px",
    
  },
}));


function LeaveForm()
{
  let history=useHistory();
    
   //  const[total,setTotal]=useState(0);
    const classes = useStyles();
  /*  function calc()
    {
      const a=Date2.getTime();
      const b=Date1.getTime();
      const result=(a-b)/(86400000);
      const c=Math.floor(result);
      if(c>=1)
        setTotal(c+1);
      else if(c===0)
        setTotal(c+1);
    }*/
   /* function convert(str) {
      
        const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [day,mnth,date.getFullYear()].join("/");
    }*/
 
   /* function Data()
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
    }*/
      
    /**
     * ritik block starts
     */
     const [StartDate, setStartDate] = useState(new Date()); 
     const [EndDate, setEndDate] = useState(new Date()); 
     const [reason,setReason]=useState(""); 
     const [leaveType,setLeaveType]=useState("");
    // const [VALUE,setValue]=useState("Select"); 
    const [totalDays, setTotalDays] = React.useState(1);

   React.useEffect(() => {
      //calcutae total days
      setTotalDays(1+(Math.floor((EndDate.getTime()-StartDate.getTime())/86400000)));
    //  console.log(totalDays);
    }, [StartDate,EndDate])
    
    const[a,setVal]=useState("true");
    const[start,setStart]=useState("Select");
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
    const access_token=localStorage.getItem('x-api-key');
    const Submit = () => {
      history.push('/Complete');
 
      const data = {
        leaveFrom:StartDate.toISOString(),
        leaveTo:EndDate.toISOString(),
        leaveType:leaveType,
        reason: reason,
      }
      console.log(data);
     
      console.log(access_token);
      fetch('http://localhost:8080/api/leave',{
        method:'POST',
        body:JSON.stringify(data),
        headers:{
         // "Content-type":"application/json;charset=UTF-8",
          'x-api-key':`${access_token}` 
        }
      })
     
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
            <img src={notificationicon} className="notification-icon"/> 
            <img src={logout}  onClick={()=>{history.push("/")}} className="logout"/> 
            </div>
         </div>
         <div className="new-form">
          <form className="fm" >
          <div className="start-new">
            
              <div className="leave-divone">
              <label className="label-text">From Date:</label>
              <DatePicker selected={StartDate} 
              onChange={(value)=>{setStartDate(value)}}
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              className="date"
              ></DatePicker> 
              
              </div> 
            
          </div>
          <div className="start-two">
              <label className="label-text-one">To Date: </label>
              <DatePicker selected={EndDate} 
              onChange={(value)=>{setEndDate(value)}}
              dateFormat='dd/MM/yyyy'
              minDate={StartDate}
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
              <input type="numeric" className="day-calc" 
              value={totalDays}></input>
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
              <Button variant='contained'  fullWidth='true'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"155px",
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