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
function HomeScreen()
{
    let history = useHistory();
    function handleClick() {
      history.push("/LeaveEdit");
    }
    return(
        <>
        <div>
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
               <span className="intro-one">Hi, Suyash
               </span><br></br>
               <span className="intro-two">Developer</span>
               </div>
                <div className="user-img" ></div>
               </div> 
               <div className="icon-last-one">
                <img src={callicon}/>
                <span className="detail" >8888888888</span>
               </div>
               <div className="icon-last">
            
               <div className="first-div">
                <img src={mailicon}/>
                <span className="detail" >suyash.jai@remotestate.com</span>
                </div>
                <img src={editicon} className="edit-icon"/>
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
            <span className="txt-div">3/</span>7</span>
            </div>
            <div className="start-new1">
            <div className="first-divone">
            <img src={sunbed} className="img-sunbed" ></img>
            <span className="sunbedlogo" >Casual Leave</span>
            </div>
            <span className="text-one" >
                <span className="txt-div">6/</span>7</span>
            </div>
            <div className="start-new1">
            <div className="first-divone">
            <img src={annual} className="img-annual"  ></img>
            <span className="annuallogo" >Annual leave </span>
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
            <div className="start-one">
        
            <div className="first-divone">
             <img className="first-img" src={calendericon}/>
             <span className="first-txt">05/May/2021</span> 
             <div>
             <div className="new-text" >
                          <span>What I did yesterday?</span>
                          <br></br>
                          <span className="text-divone">Made some changes</span>
                          <br></br> 
                        
            </div>
            </div>
             
            

            
          
            </div> 
           
           
            <div className="setdiv-one">
            <img src={standup} className="setimg-one" ></img>
            <div>
            
            <span className="text-three" 
            onClick={()=>{ history.push("/Standup")}}>standup</span>
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