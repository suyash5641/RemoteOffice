import Group316 from './Group 316.svg';
import './Setlogin.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import ButtonComponent from './sdk/ButtonComponent';

function Setlogin() {
  const [userid,setUserid]=useState("");
  const [userpassword,setUserpassword]=useState("");
  let history = useHistory();
  function handleClick() {
    history.push("/HomeScreen");
   // console.log("hello");
    const userinfo={
      email:userid,
      password:userpassword
    }
   // console.log(userid,userpassword);
   //
    console.log(userinfo);
   fetch('http://localhost:8080/api/login',{
    method:'POST',
    body:JSON.stringify(userinfo),
  }).then(res=>res.json())
     .then(data=> localStorage.setItem('x-api-key',data.token));
 //  localStorage.setItem('x-api-key',res.data.token);
  
  }
  
  

    return (
        <>
        <form className="form">
        <input type="text" id="inputdefault" className="login" placeholder="Login Id" onChange={(e)=>setUserid(e.target.value)}></input>
        <input type="text" id="inputdefault" className="login" placeholder="Password" onChange={(e)=>setUserpassword(e.target.value)}></input>
          <ButtonComponent onClick={handleClick} > 
          Login
        </ButtonComponent>
        </form> 
        
       

       </>
    
    );
  }
  
  export default Setlogin;
  