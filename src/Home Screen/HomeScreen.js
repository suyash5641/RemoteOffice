import React from "react";
import './HomeScreen.css';
import RSlogotop from '../img/RS-logo-top.svg';
import notificationicon from '../img/notification icon.svg';
import Covidimage from '../img/Covidimage.svg';
import newimg from '../img/Leave Illustrator.svg';
import logout from '../img/logout.svg';
import annual from '../img/annual.svg';
import sunbed from '../img/sunbed.svg';
import sneeze from '../img/sneeze.svg';
import mailicon from '../img/mail icon.svg';
import callicon from '../img/Call icon.svg';
import calendericon from '../img/calendericon.svg';
import editicon from '../img/edit icon.svg';
import standup from '../img/Standup Illustrator.svg';
import { useHistory } from "react-router-dom";
import useHomeScreen from "./useHomeScreen";
function HomeScreen()
{
    
   
  const {isOpen,
    phno,
    designation,
    standup_date,
    email,
    name,
    sickleave,
    casualleave,
    totalsickleave,
    totalcasualleave,
    otherleave,
    totalotherleave,
    Info,
    startsize,
    end,
    setIsopen,
    setDesign,
    setNumber,
   }=useHomeScreen();
    let history=useHistory();
    
    function handleClick() {
      history.push("/LeaveEdit");
    }
    return(
        <>
        <div className="Home-body">
          <div className="heading">
            <img src={RSlogotop} alt="logo" className="RSlogotop"/> 
            <div className="div-grp-two">
            <img src={notificationicon}  alt="notification icon" className="notification-icon"/> 
            <img src={logout} alt="logout icon" onClick={()=>{history.push("/")}} className="logout"/> 
            </div>
           </div>
           <div className="intro"> 
               <div className="div-intro"> 
               <div className="t">
               <span className="intro-one">Hi, {name}
               </span><br></br>
               {isOpen && <span className="intro-two">{designation}</span>}
               {!isOpen && <input className="edit" defaultValue={designation} onChange={(e)=>setDesign(e.target.value)}></input>}
               </div>
                <div className="user-img" ></div>
               </div> 
               <div className="icon-last-one">
                <img src={callicon} alt="call icon" />
               {isOpen && <span className="detail" >{phno}</span>} 
               {!isOpen && <input className="edit" defaultValue={phno} onChange={(e)=>setNumber(e.target.value)}></input>}
               </div>
                <div className="icon-last">
                 <div className="first-div">
                   <img src={mailicon} alt="mail icon" />
                   <span className="detail" >{email}</span>
                 </div>
                 <img src={editicon} alt="edit icon"  onClick={()=>{setIsopen(!isOpen)}} className="edit-icon"/>
                </div>

           </div>
          <div className="poster">
             <div>
                <img src={Covidimage} alt="covid "className="covidimage"/>
             </div>
             <div className="text-m">
                <span  className="message">Follow Social Distancing</span>
                <br></br>
                <span  className="message" >& Fight against <span  className="new-message">COVID-19</span></span> 
             </div>
         
          </div> 
        <div className="new-div">
            <div className="start">
                <div className="start-one">
                  <div className="first-divone">
                    <img src={sneeze} alt="sneeze "  className="img-sneeze"  ></img>
                    <span className="sicklogo" >Sick Leave</span>
                  </div>
                    <span className="text-one" >
                    <span className="txt-div">{sickleave}/</span>{totalsickleave}</span>
                </div>
                <div className="start-new1">
                  <div className="first-divone">
                     <img src={sunbed} alt="sunbed"  className="img-sunbed" ></img>
                     <span className="sunbedlogo" >Casual Leave</span>
                  </div>
                     <span className="text-one" >
                     <span className="txt-div">{casualleave}/</span>{totalcasualleave}</span>
                </div>
                <div className="start-new1">
                    <div className="first-divone">
                      <img src={annual} className="img-annual" alt="annual" ></img>
                      <span className="annuallogo" >Annual Leave </span>
                    </div>
                    <span className="text-one-one" >
                    <span className="txt-divone">{otherleave}/</span>{totalotherleave}</span>
                </div>
            </div>
            <div className="setdiv">
                <img src={newimg}  alt="newimg" className="setimg" ></img>
                <span className="text-two"  onClick={handleClick}>Leaves</span>
            </div>

        </div> 
        <div className="div-st">
            <div className="start-divst">
        
                <div className="first-div-one">
                      <div className="full-div"> 
                        <div className="div-last-one">
                           <img className="first-img" alt="calender icon" src={calendericon}/>
                           <span className="first-txt">{standup_date}</span> 
                        </div>
                        <div className="new-text" >
                        <span className="mark"></span><span className="mark-txt">What I did yesterday?</span>
                         <div className="content-new">
                              
                              {[...Array(startsize)]?.map((ele,index)=>( 
                                  
                                    <div className="circle-div" key={index}>
                                      <div className="circle" ></div> 
                                      <span className="d"  >{Info?.data.split("**")[0]?.split("\n")[index]}</span>  
                                    </div>
                                   
                  
                              ) )}
   
                             
                          </div>
                           <span className="mark"></span><span className="mark-txt">What will I do today?</span>
                           <div className="content-new">
                                 
                           {  [...Array(end)].map((ele,index)=>( 
                                  
                                    <div className="circle-div" key={index+10}>
                                      <div className="circle"  ></div> 
                                      <span className="d"  >{Info?.data.split("**")[1]?.split("\n")[index]}</span>  
                                    </div>
                                   
                  
                           ) )}
                          </div>
                      </div> 
                      
                      </div>
                     
                  
                </div> 
                <div className="setdiv-one">
                      <img src={standup}  alt="standup" className="setimg-one" ></img>
                    <div>
                       <span className="text-three" 
                        onClick={()=>{ history.push("/Standup")}}>Standup</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="ft">
            <span className="ft-text">Holidays Calender</span>
            <img src={calendericon} alt="calender" className="setcalendericon"
            onClick={()=>( history.push("/Holiday"))} ></img>
           
        </div>
        </div>
        </>
    )

}
export default HomeScreen;