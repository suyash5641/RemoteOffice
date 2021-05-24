import React, { useState } from "react";
import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import calendericon from '../img/calendericon.svg';
import Edit from '../img/Edit2icon.svg';
import './Standuphistory.css';
import { useHistory } from "react-router-dom";
import reactDom from 'react-dom';
function Standuphistory()
{
    const[state,Setstate]=useState(0);
    let history=useHistory();
   function Open(v)
   {
      // console.log(v);
       const x=document.getElementById("details"+"-"+v);
       if(state===0)
       {
        x.style.height ="fit-content";
       const z=document.getElementById("show"+"-"+v);
       const c=(x.offsetHeight-35)+"px";
       Setstate(1);
       z.style.marginTop=c;
       }
       else
       {
        x.style.height ="138px";
       const z=document.getElementById("show"+"-"+v);
       Setstate(0);
       z.style.marginTop="78px";
       }
      
   }
    return(
        <>
        <div className="container">
            <div className="header-form"> 
                <div className="div-grp">
                    <KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"16px"}}
                     onClick={()=>{history.goBack()}}/>
                    <span className="txt">Previous Standups</span>
                </div>
                <div className="div-grp-two">
                    <img src={notificationicon} className="notification-icon"/> 
                    <img src={logout} className="logout"/> 
                </div>
            </div> 
            <div className="text-grpfirst">
                 <span className="textsecond">Last five Standups</span> 
                 <img src={calendericon} className="divimg"></img>
            </div>
            <div id="details-zero" className="details" >
                 <div className="text-grpfirst">
                    <div className="text-grpfirst">
                       <img src={calendericon} className="divimgone"></img>
                       <span className="divtextone">24/May/2021</span>
                     
                    </div>
                    <img src={Edit} className="Editicon2"/>
                 </div> 
                 <div className="prev-standup">
                      <div className="standup-content">
                          <span>What I Did Yesterday</span>
                          <br></br>
                          <span>Made some changes in corona app</span>
                          <br></br>
                          <span>as directed</span>
                          <br></br>
                          <span>What Will I Do Today </span>
                          <br></br>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                          <br></br>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                      </div> 
                      <div id="show-zero" className="show" onClick={()=>Open("zero")}>
                          <span >Show...</span>
                      </div>
                 </div>

            </div>
            <div id="details-one" className="details" >
                 <div className="text-grpfirst">
                    <div className="text-grpfirst">
                       <img src={calendericon} className="divimgone"></img>
                       <span className="divtextone">24/May/2021</span>
                     
                    </div>
                    <img src={Edit} className="Editicon2"/>
                 </div> 
                 <div className="prev-standup">
                      <div className="standup-content">
                          <span>What I Did Yesterday</span>
                          <br></br>
                          <span>Made some changes in corona app</span>
                          <br></br>
                          <span>as directed</span>
                          <br></br>
                          <span>What Will I Do Today </span>
                          <br></br>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                          <br></br>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                          <span>Made some changes </span>
                          <br></br>
                          <span>push code </span>
                      </div> 
                      <div id="show-one" className="show" onClick={()=>Open("one")}>
                          <span >Show...</span>
                      </div>
                 </div>

            </div>
            
        </div> 
        
        </>
    )
}
export default Standuphistory;