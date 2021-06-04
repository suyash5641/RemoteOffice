import { useState ,useEffect} from 'react';
export default function useHomeScreen()
{

    const[isOpen,setIsopen]=useState("true");
    const[phno,setNumber]=useState("88888888");
    const[designation,setDesign]=useState("Developer");  
    const[standup_date,setStandupDate]=useState([]); 
    const[email,setEmail]=useState("");
    const[name,setName]=useState(""); 
    const[sickleave,setSickleave]=useState(0);
    const[casualleave,setCasualleave]=useState(0);
    const[totalsickleave,setTotalSickleave]=useState(12);
    const[totalcasualleave,setTotalCasualleave]=useState(13);
    const[otherleave,setOtherleave]=useState(0);
    const[totalotherleave,setTotalOtherleave]=useState(20);
    const[Info,setValue]=useState([]);
    const [startsize,setStartsize]=useState(0);
    const [end,setEnd]=useState(0);
    function convert(str) {
        const month= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = new Date(str),
        mn = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [day,month[mn-1],date.getFullYear()].join("/");
    }
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
        setStandupDate(convert(json[0].createdAt.split("T")[0]));
        setValue(json[0]);
        if(typeof json[0].data === "undefined"){
          console.log("This property is not defined.");
          }
          else{
           setStartsize(Object.keys(json[0].data?.split("**")[0]?.split("\n")).length);
           setEnd(Object.keys(json[0].data?.split("**")[1]?.split("\n")).length);
       
          }
        }
       fetchStandup();
      },[])
  
    useEffect(() => {
      async function fetchUser()
      {
      const access_token=localStorage.getItem('x-api-key');
      const response=await fetch('http://localhost:8080/api/user',{
          method:'GET',
          headers:{
           'x-api-key':`${access_token}` 
         }
      }) 
      const json=await response.json();
    //  console.log(json);
      setNumber(json.phone);
      setDesign(json.position);
      setEmail(json.email); 
      setName(json.name);
    }
    fetchUser();
   },[Info]) 

  useEffect(() => {
    async function fetchLeave()
    {
    const access_token=localStorage.getItem('x-api-key');
    const response=await fetch('http://localhost:8080/api/leave/stat',{
        method:'GET',
        headers:{
         'x-api-key':`${access_token}` 
       }
    }) 
    const json=await response.json();
   // console.log(json);
   if(json[0]?.leaveType==="sick")
   {
   setSickleave(json[0].usedLeaves);
   setTotalSickleave(json[0].allowedLeaves);
     if(json[1]?.leaveType==="casual")
     {
      setCasualleave(json[1].usedLeaves);
      setTotalCasualleave(json[1].allowedLeaves);
if(json[2]?.leaveType==="other")
      {
      setOtherleave(json[2].usedLeaves);
      setTotalOtherleave(json[2].allowedLeaves);
      } 
     }
     else if(json[1]?.leaveType==="other")
     {
     setOtherleave(json[1].usedLeaves);
     setTotalOtherleave(json[1].allowedLeaves); 
     } 


   }
   else  if(json[0]?.leaveType==="casual")
   {
   setCasualleave(json[0].usedLeaves);
   setTotalCasualleave(json[0].allowedLeaves);
       if(json[1]?.leaveType==="other")
       {

       setOtherleave(json[1].usedLeaves);
       setTotalOtherleave(json[1].allowedLeaves);
       }
   }
   else if(json[0]?.leaveType==="other")
{
   setOtherleave(json[0].usedLeaves);
   setTotalOtherleave(json[0].allowedLeaves);
if(json[1]?.leaveType==="casual")
   {
   setCasualleave(json[1].usedLeaves);
   setTotalCasualleave(json[1].allowedLeaves);
   }
}

   }
  
  fetchLeave();
    },[])  

    return{isOpen,
        phno,
        designation,
        standup_date,
        email,
        name,
        sickleave,
        casualleave,
        totalsickleave,
        totalcasualleave,
        otherleave,
        totalotherleave,
        Info,
        startsize,
        end,
        setIsopen,
        setDesign,
        setNumber,

    }
}