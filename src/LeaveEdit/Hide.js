
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import closeicon from '../img/closeicon.svg';
import './Hide.css';
import './LeaveEdit.css';
function Hide()
{
  const[isOpen,setIsopen]=useState(false);
  function Check()
  {
    setIsopen(!isOpen);
    var x = document.getElementById("m");
  if (x.style.display== "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }
  return(
   <div >
    
    <div id="m"> 
    <img  src={closeicon} className="button-style" onClick={Check}/> 
    <br></br> 
    <span className="text-box">modify leave</span>
    <br></br>
    <span className="text-box">Cancel leave</span>
     </div>
    
  </div>
  );

}
export default Hide;