import  { useState ,useEffect} from "react";
export default function useStanduphistory()
{
    const[state,Setstate]=useState(0);
    const[standUp,setStandUp]=useState([]);
    const valueone=0;
    useEffect(() => {
        async function fetchStandup()
        {
        const access_token=localStorage.getItem('x-api-key');
        const response=await fetch('http://localhost:8080/api/standup',{
            method:'GET',
            headers:{
             'x-api-key':`${access_token}` 
           }
        }) 
        const json=await response.json();
         setStandUp(json);
       }
      fetchStandup();
  
    },[]) 

    return{standUp,state,Setstate ,valueone};
}