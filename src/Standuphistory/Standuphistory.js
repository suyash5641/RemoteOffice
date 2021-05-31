import React, { useState ,useEffect} from "react";
import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import calendericon from '../img/calendericon.svg';
import Edit from '../img/Edit2icon.svg';
import './Standuphistory.css';
import { useHistory } from "react-router-dom";
import reactDom from 'react-dom';
import { keys } from "@material-ui/core/styles/createBreakpoints";
import StandupEdit from "../StandupEdit/StandupEdit";
function Standuphistory()
{
    const[state,Setstate]=useState(0);
    const[standUp,setStandUp]=useState([]);
    const[idn,setId]=useState(0);
    let history=useHistory();
    const[curr_date,setN]=useState(new Date());
  
    useEffect(() => {
       const access_token=localStorage.getItem('x-api-key');
        fetch('http://localhost:8080/api/standup',{
            method:'GET',
            headers:{
             'x-api-key':`${access_token}` 
           }
        })
      .then(response => response.json())
      .then(data => setStandUp(data)); 
      const month= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date(),
        mn = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
        setN(day+"/"+month[mn-1]+"/"+date.getFullYear());
       // console.log(day+"/"+month[mn-1]+"/"+date.getFullYear());
    },[])
   // console.log(curr_date); 
    function convert() {
        
      alert("called");
    }
    function handleEdit(pos,t)
    {  
      // console.log(standUp[t].data);
  
    
        history.push(`/StandupEdit/${pos}`);
       
       
    }
   function Open(v)
   {
      
       const x=document.getElementById(v);
       if(state===0)
       {
        x.style.height ="fit-content";
       const z=document.getElementById(v+5);
       const c=(x.offsetHeight-35)+"px";
       Setstate(1);
       z.style.marginTop=c;
       }
       else
       {
        x.style.height ="138px";
       const z=document.getElementById(v+5);
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
            
            {standUp.map((c,k)=>k<2 && (
            <div id={k} className="details" >
            
                
                 <div className="text-grpfirst">
                    <div className="text-grpfirst">
                       <img src={calendericon} className="divimgone"></img>
                       <span className="divtextone">{curr_date}</span>
                     
                    </div>
                    <img src={Edit} onClick={()=>handleEdit(standUp[k].id,k)} className="Editicon2"/> 
                   
                 </div> 
                 <div className="prev-standup">
                      <div className="standup-content">
                          <span className="mark"></span><span>What I Did Yesterday?</span>
                          <br></br>
                          <span className="circle"></span> <span className="d">{standUp[k].data.split(",")[0]}</span>
                          <br></br>
                           <span className="mark"></span><span>What Will I Do Today?</span>
                          <br></br>
                          <span className="circle"></span><span className="d">{standUp[k].data.split(",")[1]}</span>
                          
                      </div> 
                      <div id={k+5} className="show" onClick={()=>Open(k)}>
                          <span >Show...</span>
                      </div>
                 </div>
                 
               
           

            </div>
            ))}

         
             
          
            
        </div> 
        
        </>
    )
}
export default Standuphistory;