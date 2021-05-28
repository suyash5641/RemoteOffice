import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './Standup.css';
import Button from '@material-ui/core/Button';
import historyicon from '../img/History icon.svg';
import calendericon from '../img/calendericon.svg';
import { useHistory } from "react-router-dom";
function Standup()
{

    let history = useHistory();
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
             <textarea className="standup-input" type="text"></textarea>
         </div>
         <div className="main-heading">
             <div>
             <span className="standup-heading">What I Will Do Today ?</span>
             </div>
             <textarea className="standup-input" type="text"></textarea>
         </div>
         <div className="bttn">
         <Button variant='contained'  fullWidth='true'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"112px",
          height:"43px",marginTop:"15px" } } > 
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