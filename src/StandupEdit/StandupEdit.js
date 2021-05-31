import React, { useState ,useEffect} from "react";
import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import historyicon from '../img/History icon.svg';
import calendericon from '../img/calendericon.svg';

import { useHistory, useParams } from 'react-router';
function StandupEdit()
{  
    console.log();
   // console.log(props.h);
    const{Id}=useParams();
    const[detail,setD]=useState([]);
    const[today,setToday]=useState("");
    const[yesterday,setYesterday]=useState("");
    const[flag,setFlag]=useState(1);
    const[first,setF]=useState("");
    const[second,setS]=useState("");
    let history=useHistory();
    useEffect(() => {
        const access_token=localStorage.getItem('x-api-key');
         fetch('http://localhost:8080/api/standup/'+Id,{
             method:'GET',
             headers:{
              'x-api-key':`${access_token}` 
            }
         })
       .then(response => response.json())
       .then(data =>setD(data)); 
       
     },[Id]) 
     
    function handleChanges()
    {

  
          const obj={
           data:yesterday+","+today
       }
       console.log(obj);
       const access_token=localStorage.getItem('x-api-key');
       fetch('http://localhost:8080/api/standup/'+Id,{
           method:'PUT',
           headers:{
            'x-api-key':`${access_token}` 
          },
          body:JSON.stringify(obj),

          
       })
    }
    if(detail.data && flag===1)
    {
      //  console.log(detail.data.split(",")[0]);
       // console.log(detail.data.split(",")[1]);
        setF(detail.data.split(",")[0]);
        setS(detail.data.split(",")[1]);
        setFlag(0);
    }
  // console.log(detail.data);
return(
      <>
        <div className="main-body">
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
             <textarea className="standup-input" type="text" defaultValue={first}
              onChange={(e)=>setYesterday(e.target.value)}></textarea>
         </div>
         <div className="main-heading">
             <div>
             <span className="standup-heading">What I Will Do Today ?</span>
             </div>
             <textarea className="standup-input" type="text" defaultValue={second}
              onChange={(e)=>setToday(e.target.value)}></textarea>
         </div>
         <div className="bttn">
         <Button variant='contained'  fullWidth='true'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"155px",
          height:"43px",marginTop:"15px" } }
          onClick={handleChanges} > 
          Save Changes
        </Button>
        </div>
        <div className="standup-footer">
            <div className="div-last" >
               <img src={historyicon} className="footer-img"
               onClick={()=>{ history.push("/Standuphistory")}}/>
               <span className="last-txt">Previous Standup</span>
            </div> 
            <img src={calendericon} className="set-footer-img"/>
        </div> 
         </div>
         </>
)
}
export default StandupEdit;