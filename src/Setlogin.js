import Group316 from './Group 316.svg';
import './Setlogin.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";

function Setlogin() {
  let history = useHistory();
  function handleClick() {
    history.push("/HomeScreen");
  }

    return (
        <>
        <form className="form">
        <input type="text" id="inputdefault" className="login" placeholder="Login Id"></input>
        <br></br>
        <input type="text" id="inputdefault" className="login" placeholder="Password"></input>
        <br></br>
          <Button variant='contained'  fullWidth='true' style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"112px",
          height:"43px"} }
          onClick={handleClick} > 
          Login
        </Button>
        </form> 
        
       

       </>
    
    );
  }
  
  export default Setlogin;
  