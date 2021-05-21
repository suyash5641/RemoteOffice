
import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import './Hide.css';
function Hide()
{
  const[isOpen,setIsopen]=useState(false);
  return(
   <div >
     <div >
     <i className="set" onClick={()=>setIsopen(!isOpen)}>
       <EditIcon style={{color:"#307FE2",marginTop:"8px",width:"18px",
        height:"18px"}}/>
    </i>
    {isOpen && <div className="m"> 
    <button className="button-style" onClick={()=>setIsopen(!isOpen)}>x
    </button> 
    <br></br> 
    <span className="text-box">modify leave</span>
    <br></br>
    <span className="text-box">Cancel leave</span>
     </div>}
    
    </div>
  </div>
  );

}
export default Hide;