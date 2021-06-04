import logout from '../img/logout.svg';
import notificationicon from '../img/notification icon.svg';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import './Holiday.css';
import holidayimg from '../img/holiday.png';
import { useHistory } from "react-router-dom";
function Holiday()
{
    let history=useHistory();

    return(
        <>
        <div className="header-form">
         <div className="div-grp">
         <KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"16px"}} 
          onClick={()=>{history.goBack()}}/>
             <span className="txt">Holidays</span>
          </div>
          <div className="div-grp-two">
            <img src={notificationicon} alt="notification icon" className="notification-icon"/> 
            <img src={logout} alt="logout" className="logout"/> 
         </div>
        </div> 
        <div className="holiday-div">
          <img src={holidayimg} alt="holiday" className="divimage"/>
            
        </div>
        <div className="pos">
            <table>
                <tr className="table-heading">
                  <th>Holidays</th>
                  <th>Date</th>
                </tr>
                <tr  className="table-h" >
                  <td>Republic Day </td>
                  <td>Tue,26 Jan,2021</td>
    
                </tr>
                <tr  className="table-h" >
                  <td>Republic Day </td>
                  <td>Tue,26 Jan,2021</td>
    
                </tr>
                <tr  className="table-h" >
                  <td>Republic Day </td>
                  <td>Tue,26 Jan,2021</td>
    
                </tr>
                <tr  className="table-h" >
                  <td>Republic Day </td>
                  <td>Tue,26 Jan,2021</td>
    
                </tr>
            </table>
        </div>
        </>
    )
}
export default Holiday;