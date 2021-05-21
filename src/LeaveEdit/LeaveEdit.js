import React, { useState } from "react";
import './LeaveEdit.css';
import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import annual from '../img/annual.svg';
import sunbed from '../img/sunbed.svg';
import sneeze from '../img/sneeze.svg';
import calendericon from '../img/calendericon.svg';
import Hide from './Hide';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
function LeaveEdit()
{

return(
    <>
    <div className="content">
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
        <div className="box">
            <div className="div-one">
            <div className="first-div">
            <img src={sneeze} className="sickimg"  ></img>
            <span className="div-one-text" >Sick Leave</span>
            </div>
            <span className="info" > <span className="info-one" >3</span>/7</span>
            </div>
            <div className="div-one" >
            <div className="first-div">
            <img src={sunbed} className="sickimg"  ></img>
            <span className="div-two-text" >Casual Leave</span>
            </div>
            <span className="info" > <span className="info-one" >3</span>/7</span>
            </div>
            <div className="div-one" >
            <div className="first-div">
            <img src={annual} className="sickimg"  ></img>
            <span className="div-three-text" >Annual Leave</span>
            </div>
            <span className="info" > <span className="info-one" >3</span>/7</span> 
            </div>
            <div className="st" >
            <Button variant='contained'  fullWidth='true'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"180px",
            height:"50px",marginTop:"40px",marginLeft:"10px" } } > 
            Apply Leave
           </Button> 
           </div>
           <br></br>
           <div className="st" >
           <span className="recent">Recent leave history</span>
           </div>
           <div className="leave-history">
               
               <div className="first">
                <div className>
                    <img src={calendericon}/> 
                    <span className="list">05 May 2021</span> 
                    <span className="list-one">To</span> 
                    <img src={calendericon}/> 
                    <span  className="list">08 May 2021</span> 

                </div>
                <Hide/>
               </div>
             <div className="second">
                </div>

           </div>


        </div>

        

        
        
    </div>
    </>
)
}
export default LeaveEdit;