import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './Standup.css';
import Button from '@material-ui/core/Button';
import historyicon from '../img/History icon.svg';
import calendericon from '../img/calendericon.svg';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
function Standup()
{
    const[today,setToday]=useState("");
    const[yesterday,setYesterday]=useState("");
    let history = useHistory();
    const[str,setValue]=useState("");
    function submitData()
    {
      
      setValue(yesterday+","+today);
     const g=yesterday+","+today;
      const v=g.split(",");
      console.log(v[0]);
      console.log(v[1]);
      const info={
        data:yesterday+","+today
      }
      fetch('http://localhost:8080/api/standup',{
        method:'POST',
        body:JSON.stringify(info),
        headers:{
         // "Content-type":"application/json;charset=UTF-8",
          'x-api-key':`${localStorage.getItem('x-api-key')}` 
        }
      })
      history.push("/Standuphistory");
    }
    function handleClick() {
      history.push("/Standuphistory");
    }
return(
      <>
        <div className="standup-main-body">
         <div className="header-form">
            <div className="div-grp">
             <KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"16px"}}
              onClick={()=>{history.goBack()}}/>
             <span className="txt">Standup</span>
             </div>
             <div className="div-grp-two">
            <img src={notificationicon} className="notification-icon"/> 
            <img src={logout} className="logout"/> 
            </div>
         </div>
         <div className="main-heading">
             <div>
             <span className="standup-heading">What I Did Yesterday ?</span>
             </div>
             <textarea className="standup-input" type="text" 
              onChange={(e)=>setYesterday(e.target.value)}></textarea>
         </div>
         <div className="main-heading">
             <div>
             <span className="standup-heading">What I Will Do Today ?</span>
             </div>
             <textarea className="standup-input" type="text"
              onChange={(e)=>setToday(e.target.value)}></textarea>
         </div>
         <div className="bttn">
         <Button variant='contained'  fullWidth='true'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"112px",
          height:"43px",marginTop:"15px" }} 
          onClick={submitData} 
          > 
          Submit
        </Button>
        </div>
        <div className="standup-footer">
            <div className="div-last" >
               <img src={historyicon} className="footer-img"/>
               <span className="last-txt"    onClick={handleClick}>Previous Standup</span>
            </div> 
            <img src={calendericon} className="set-footer-img"/>
        </div> 
         </div>
         </>
)
}
export default Standup;