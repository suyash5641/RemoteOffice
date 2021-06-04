import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import check from '../img/Complete.svg';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
function Message()
{
    let history=useHistory();

    return(
        <>
        <div className="header-form">
         <div className="div-grp">
         <KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"16px"}} 
          onClick={()=>{history.goBack()}}/>
             <span className="txt">Leave Application</span>
          </div>
          <div className="div-grp-two">
            <img src={notificationicon} alt="notification icon"className="notification-icon"/> 
            <img src={logout} alt="logout icon" className="logout"/> 
          </div>
        </div> 
        <div className="checkdiv">
            <img src={check} alt=" icon" className="img-checkdiv"/>

        </div>
        <div className="display">
            <span>Your leave Application has</span>
             <br></br>
             <span>been deleted</span>
             <br></br>
             <span>Sucessfully</span>
             <div className="">
              <Button variant='contained'  style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"112px",
             height:"43px",marginTop:"15px" } } 
             onClick={()=>{history.push('/LeaveEdit')}}> 
             Continue
            </Button>
             </div>
        </div>
        </>
    )
}
export default  Message;