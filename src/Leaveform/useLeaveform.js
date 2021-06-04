import React, { useState } from "react";
export default function useLeaveform()
{
     const [startDate, setStartDate] = useState(new Date()); 
     const [endDate, setEndDate] = useState(new Date()); 
     const [reason,setReason]=useState(""); 
     const [leaveType,setLeaveType]=useState("");
     const [totalDays, setTotalDays] = React.useState(1);
     const[a,setVal]=useState("true");
     const[start,setStart]=useState("Select"); 
     
     return {
         startDate,
         endDate,
         reason,
         leaveType,
         totalDays,
         a,
         start,
         setStartDate,
         setEndDate,
         setReason,
         setLeaveType,
         setVal,
         setStart,
         setTotalDays,


     };

}