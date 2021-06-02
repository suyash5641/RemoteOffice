import React, { useState ,useEffect} from "react";
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
import { useHistory, useParams } from 'react-router';
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


function Leavemodify()
{
  let history=useHistory();
    
   //  const[total,setTotal]=useState(0);
    const classes = useStyles();
    const {N}=useParams();
     const [StartDate, setStartDate] = useState(new Date()); 
     const [EndDate, setEndDate] = useState(new Date()); 
     const [reason,setReason]=useState(""); 
     const [leaveType,setLeaveType]=useState("");
     const [VALUE,setValue]=useState("Select"); 
    const [LEAVE, setLEAVE] = React.useState([]);
    const [totalDays, setTotalDays] = React.useState(1);
    const[a,setVal]=useState("true");
    const[start,setStart]=useState("Select"); 
    const[w,setW]=useState("");
   React.useEffect(() => {
      //calcutae total days
      setTotalDays(1+(Math.floor((EndDate.getTime()-StartDate.getTime())/86400000)));
    //  console.log(totalDays);
    }, [StartDate,EndDate])
    useEffect(() => {
        async function fetchDetail()
        {
        const access_token=localStorage.getItem('x-api-key');
        const response=await fetch('http://localhost:8080/api/leave/'+N,{
            method:'GET',
            headers:{
             'x-api-key':`${access_token}` 
           }
        }) 
        const json=await response.json();
        console.log(json);
       setStartDate(new Date(json.leaveFrom));
       setEndDate(new Date(json.leaveTo));
       setW(json.reason);
       setStart(json.leaveType);

    }
    
    fetchDetail();

    },[]) 
   
    
  /*  if(LEAVE)
    {
       // console.log(LEAVE);
        const z=new Date(LEAVE.leaveFrom);
        //console.log(z);
    }
    */
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
      history.push('/LeaveEdit');
 
      const data = {
        leaveFrom:StartDate.toISOString(),
        leaveTo:EndDate.toISOString(),
        leaveType:leaveType,
        reason: reason,
      }
      console.log(data);
     
     // console.log(access_token);
      fetch('http://localhost:8080/api/leave/'+N,{
        method:'PUT',
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
            <img src={logout} className="logout"/> 
            </div>
         </div>
         <div className="new-form">
          <form className="fm" >
          <div className="start-new">
            
              <div className="leave-divone">
              <label className="label-text">From Date:</label>
              <DatePicker  selected={StartDate}
              onChange={(value)=>{setStartDate(value)}}
              dateFormat='dd/MM/yyyy'
             
              className="date"
              ></DatePicker> 
              
              </div> 
            
          </div>
          <div className="start-two">
              <label className="label-text-one">To Date: </label>
              <DatePicker selected={EndDate} 
              onChange={(value)=>{setEndDate(value)}}
              dateFormat='dd/MM/yyyy'
              
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
              <label className="label-text">Total Days:</label>
              <input type="numeric" className="day-calc" 
              value={totalDays}></input>
          </div>   
          <div >
              <div className="label-last">
              <label className="label-text-new">Reason:</label>
              <textarea type="text" className="reason" name="resonn" defaultValue={w}
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
export default Leavemodify;