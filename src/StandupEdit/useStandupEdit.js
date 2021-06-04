import { useState ,useEffect} from "react";
export default function useStandupEdit({Id})
{

    const[today,setToday]=useState("");
    const[yesterday,setYesterday]=useState("");
    useEffect(() => {
    async function EditStandup()
    {
   // console.log(Id);
    const access_token=localStorage.getItem('x-api-key');
    const response=await fetch('http://localhost:8080/api/standup/'+Id,{
        method:'GET',
        headers:{
         'x-api-key':`${access_token}` 
       }
    }) 
    const json=await response.json();
        setYesterday(json.data?.split("**")[0]);
        setToday(json.data?.split("**")[1]);
        
    
   }
   EditStandup();

},[Id]) 
   
return {today,yesterday,setToday,setYesterday}

}