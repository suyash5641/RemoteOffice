import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import historyicon from '../img/History icon.svg';
import calendericon from '../img/calendericon.svg';
import { useHistory } from 'react-router';
function StandupEdit()
{
    let history=useHistory();
return(
      <>
        <div className="main-body">
         <div className="header-form">
         <div className="div-grp">
             <KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"20px"}}
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
             <input className="standup-input" type="text"></input>
         </div>
         <div className="main-heading">
             <div>
             <span className="standup-heading">What I Will Do Today ?</span>
             </div>
             <input className="standup-input" type="text"></input>
         </div>
         <div className="bttn">
         <Button variant='contained'  fullWidth='true'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"112px",
          height:"43px",marginTop:"15px" } } > 
          Save Changes
        </Button>
        </div>
        <div className="standup-footer">
            <div className="div-last" >
               <img src={historyicon} className="footer-img"/>
               <span className="last-txt">Previous Standup</span>
            </div> 
            <img src={calendericon} className="set-footer-img"/>
        </div> 
         </div>
         </>
)
}
export default StandupEdit;