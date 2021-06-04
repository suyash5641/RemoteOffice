					import React, { useState ,useEffect} from "react";
					import './LeaveEdit.css';
					import logout from '../img/logout.svg';
					import notificationicon from '../img/notification icon.svg';
					import annual from '../img/annual.svg';
					import sunbed from '../img/sunbed.svg';
					import sneeze from '../img/sneeze.svg';
					import IconEdit from '../img/IconEdit.svg';
					import calendericon from '../img/calendericon.svg';
					import Hide from './Hide';
					import Button from '@material-ui/core/Button';
					import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
					import { useHistory } from "react-router-dom";
					function LeaveEdit()
					{
					const [leaveinfo,setLeaveInfo]=useState([]);
					const[sickleave,setSickleave]=useState(0);
					const[casualleave,setCasualleave]=useState(0);
					const[totalsickleave,setTotalSickleave]=useState(12);
					const[totalcasualleave,setTotalCasualleave]=useState(13);
					const[otherleave,setOtherleave]=useState(0);
					const[totalotherleave,setTotalOtherleave]=useState(20);
					let history = useHistory();
					function handleClick() {
						history.push("/LeaveForm");
					}
					function convert(str) {
						const month= ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
						const date = new Date(str),
						mn = ("0" + (date.getMonth() + 1)).slice(-2),
						day = ("0" + date.getDate()).slice(-2);
					return [day,month[mn-1],date.getFullYear()].join(" ");
					}
						function Check(key)
					{

						var x = document.getElementById(key);
					// console.log(key);
					// console.log(x.style.display);
					if(x.style.display!=="none" && x.style.display!=="block")
					x.style.display="block";
					else if (x.style.display=== "none") {
						x.style.display="block";
					} else {
						x.style.display="none";
					}
					}
					useEffect(() => {
						const access_token=localStorage.getItem('x-api-key');
						fetch('http://localhost:8080/api/leave',{
							method:'GET',
							headers:{
							'x-api-key':`${access_token}`
						}
						})
					.then(response => response.json())
					.then(data => setLeaveInfo(data));
					},[])
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

					//  console.log(json);

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

					return(
						<>
						<div className="content">
							<div className="header-form">
							<div className="div-grp">
								<KeyboardBackspaceIcon className="arrow" style={{color:"white",marginTop:"16px"}}
								onClick={()=>{history.goBack()}}/>
								<span className="txt">Leave Application</span>
							</div>
							<div className="div-grp-two">
								<img src={notificationicon} alt="notification icon" className="notification-icon"/>
									<img src={logout} alt="logout icon" onClick={()=>{history.push("/")}} className="logout"/>
							</div>
							</div>
							<div className="box">
								<div className="div-one">
									<div className="first-div">
									<img src={sneeze} alt="sneeze" className="sickimg"  ></img>
									<span className="div-one-text" >Sick Leave</span>
									</div>
									<span className="info" > <span className="info-one" >{sickleave}</span>/{totalsickleave}</span>
								</div>
								<div className="div-one" >
									<div className="first-div">
									<img src={sunbed} alt="sunbed" className="sickimg"  ></img>
									<span className="div-two-text" >Casual Leave</span>
									</div>
									<span className="info" > <span className="info-one" >{casualleave}</span>/{totalcasualleave}</span>
								</div>
								<div className="div-one" >
									<div className="first-div">
									<img src={annual} alt="annual" className="sickimg"  ></img>
									<span className="div-three-text" >Annual Leave</span>
									</div>
									<span className="info-div" > <span className="info-divone" >{otherleave}</span>/{totalotherleave}</span>
								</div>
								<div className="st" >
									<Button variant='contained'    style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',width:"180px",
									height:"50px",marginTop:"40px",marginLeft:"10px" } }
									onClick={handleClick}>
									Apply Leave
									</Button>
								</div>
								<br></br>
								<div className="st" >
									<span className="recent">Recent leave history</span>
								</div>


								{leaveinfo.map((c,k)=>(

									<div key={leaveinfo[k].id}>
									<div className="first">
											<div className="first-add" >
										<div className="setflex">

											<img src={calendericon} alt="calender icon" className="first-add-img"/>
											<span className="list"  >{convert(leaveinfo[k].leaveFrom.split("T")[0])}</span>


											<span className="list-one">To</span>


											<img src={calendericon} alt="calender icon" className="first-add-img"/>
											<span  id="list-new"   >{convert(leaveinfo[k].leaveTo.split("T")[0])}</span>
										</div>
									</div>
									<div>
										<img src={IconEdit} alt="edit icon" className="set"    onClick={()=>Check(k)}/>

									</div>
									</div>
									<div className="reset"  >
									<Hide index={k}   f={leaveinfo[k].id}/>
									</div>
									<div className="second"  >
									<span >{leaveinfo[k].reason}</span>
									</div>
									<div className="final"></div>
									</div>

									))}


							</div>





						</div>
						</>
					)
					}
					export default LeaveEdit;