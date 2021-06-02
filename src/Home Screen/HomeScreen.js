import React, { useEffect} from "react";
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
import userimg from '../img/UserImage.svg';
import standup from '../img/Standup Illustrator.svg';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
function HomeScreen()
{
    const[isOpen,setIsopen]=useState("true");
    const[phno,setNumber]=useState("88888888");
    const[designation,setDesign]=useState("Developer");  
    const[standup_date,setStandupDate]=useState([]); 
    const[today,setToday]=useState("");
    const[prev,setPrev]=useState("");
    const[email,setEmail]=useState("");
    const[name,setName]=useState(""); 
    const[sickleave,setSickleave]=useState(0);
    const[casualleave,setCasualleave]=useState(0);
    const[totalsickleave,setTotalSickleave]=useState(0);
    const[totalcasualleave,setTotalCasualleave]=useState(0);
    let history = useHistory();
    function convert(str) {
      const month= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const date = new Date(str),
      mn = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day,month[mn-1],date.getFullYear()].join("/");
  }
    useEffect(() => {
      async function fetchStandup()
      {
      const access_token=localStorage.getItem('x-api-key');
      const response=await fetch('http://localhost:8080/api/standup',{
          method:'GET',
          headers:{
           'x-api-key':`${access_token}` 
         }
      }) 
      const json=await response.json();
      console.log(json[0]);
      setStandupDate(convert(json[0].createdAt.split("T")[0]));
      setPrev(json[0].data.split(",")[0]);
      setToday(json[0].data.split(",")[1]);
    
  }
  
  fetchStandup();

  },[]) 
  useEffect(() => {
    async function fetchUser()
    {
    const access_token=localStorage.getItem('x-api-key');
    const response=await fetch('http://localhost:8080/api/user',{
        method:'GET',
        headers:{
         'x-api-key':`${access_token}` 
       }
    }) 
    const json=await response.json();
    console.log(json);
    setNumber(json.phone);
    setDesign(json.position);
    setEmail(json.email); 
    setName(json.name);


}

fetchUser();

},[]) 
useEffect(() => {
  async function fetchLeave()
  {
  const access_token=localStorage.getItem('x-api-key');
  const response=await fetch('http://localhost:8080/api/leave/stat',{
      method:'GET',
      headers:{
       'x-api-key':`${access_token}` 
     }
  }) 
  const json=await response.json();
  console.log(json);
  setSickleave(json[0].usedLeaves);
  setCasualleave(json[1].usedLeaves);
  setTotalSickleave(json[0].allowedLeaves);
  setTotalCasualleave(json[1].allowedLeaves);


}

fetchLeave();

},[]) 
    function handleClick() {
      history.push("/LeaveEdit");
    }
    return(
        <>
        <div className="Home-body">
          <div className="heading">
            <img src={RSlogotop} className="RSlogotop"/> 
            <div className="div-grp-two">
            <img src={notificationicon} className="notification-icon"/> 
            <img src={logout} className="logout"/> 
            </div>
           </div>
           <div className="intro"> 
               <div className="div-intro"> 
               <div className="t">
               <span className="intro-one">Hi, {name}
               </span><br></br>
               {isOpen && <span className="intro-two">{designation}</span>}
               {!isOpen && <input onChange={(e)=>setDesign(e.target.value)}></input>}
               </div>
                <div className="user-img" ></div>
               </div> 
               <div className="icon-last-one">
                <img src={callicon}/>
               {isOpen && <span className="detail" >{phno}</span>} 
               {!isOpen && <input onChange={(e)=>setNumber(e.target.value)}></input>}
               </div>
                <div className="icon-last">
                 <div className="first-div">
                   <img src={mailicon}/>
                   <span className="detail" >{email}</span>
                 </div>
                 <img src={editicon} onClick={()=>{setIsopen(!isOpen)}} className="edit-icon"/>
                </div>

           </div>
          <div className="poster">
             <div>
                <img src={Covidimage} className="covidimage"/>
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
                    <img src={sneeze} className="img-sneeze"  ></img>
                    <span className="sicklogo" >Sick Leave</span>
                  </div>
                    <span className="text-one" >
                    <span className="txt-div">{sickleave}/</span>{totalsickleave}</span>
                </div>
                <div className="start-new1">
                  <div className="first-divone">
                     <img src={sunbed} className="img-sunbed" ></img>
                     <span className="sunbedlogo" >Casual Leave</span>
                  </div>
                     <span className="text-one" >
                     <span className="txt-div">{casualleave}/</span>{totalcasualleave}</span>
                </div>
                <div className="start-new1">
                    <div className="first-divone">
                      <img src={annual} className="img-annual"  ></img>
                      <span className="annuallogo" >Annual Leave </span>
                    </div>
                    <span className="text-one-one" >
                    <span className="txt-divone">13/</span>21</span>
                </div>
            </div>
            <div className="setdiv">
                <img src={newimg} className="setimg" ></img>
                <span className="text-two"  onClick={handleClick}>Leaves</span>
            </div>

        </div> 
        <div className="div-st">
            <div className="start-divst">
        
                <div className="first-div-one">
                      <div className="full-div"> 
                        <div className="div-last-one">
                           <img className="first-img" src={calendericon}/>
                           <span className="first-txt">{standup_date}</span> 
                        </div>
                        <div className="new-text" >
                          <span>What I did yesterday?</span>
                          <br></br>
                          <span className="text-divone">{prev}</span>
                          <br></br> 
                          <span>What will I do today?</span>
                          <br></br>
                          <span className="text-divone">{today}</span>
                          <br></br> 
                        
                      </div>
                      </div>
                     
                  
                </div> 
                <div className="setdiv-one">
                      <img src={standup} className="setimg-one" ></img>
                    <div>
                       <span className="text-three" 
                        onClick={()=>{ history.push("/Standup")}}>Standup</span>
                    </div>
                </div>
            </div>

        </div>
        <div className="ft">
            <span className="ft-text">Holidays Calender</span>
            <img src={calendericon} className="setcalendericon"
            onClick={()=>( history.push("/Holiday"))} ></img>
           
        </div>
        </div>
        </>
    )

}
export default HomeScreen;