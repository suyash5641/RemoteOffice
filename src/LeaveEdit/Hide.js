
import React, { useState ,useEffect} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import closeicon from '../img/closeicon.svg';
import './Hide.css';
import './LeaveEdit.css';
import { useHistory } from "react-router-dom";
function Hide(props)
{
  const[isOpen,setIsopen]=useState(false);
  let history=useHistory();
  //const[init,setInit]=useState(-1);
    
   /*   if(init>=0)
      {
        const access_token=localStorage.getItem('x-api-key');
      fetch(`http://localhost:8080/api/leave/${init}`, { 
        method: 'DELETE',
        headers:{
          'x-api-key':`${access_token}` 
        }
       })
          .then(() =>console.log('Delete successful'));
        setInit(-1);
      }*/
    function Remove(init)
    {
      console.log(init);
      const access_token=localStorage.getItem('x-api-key');
      fetch(`http://localhost:8080/api/leave/${init}`, { 
        method: 'DELETE',
        headers:{
          'x-api-key':`${access_token}` 
        }
       })
          .then(() =>console.log('Delete successful'));
    }
  
 
  
  function Check()
  {
    setIsopen(!isOpen);
    var x = document.getElementById(props.index);
  if (x.style.display== "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  return(
   <div >
    
    <div id={props.index} className="m"> 
    <img  src={closeicon} className="button-style" onClick={Check}/> 
    <br></br> 
    <span className="text-box" onClick={()=>{  history.push(`/Leavemodify/${props.f}`)}}>modify leave</span>
    <br></br>
    <span className="text-box" onClick={()=>Remove(props.f)}>Cancel leave</span>
     </div>
    
  </div>
  );

}
export default Hide;