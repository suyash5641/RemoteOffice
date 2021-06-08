import "./Setlogin.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "../sdk/ButtonComponent";
//import * as ReactBootstrap from 'react-bootstrap';
function Setlogin() {
  const [userid, setUserid] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [flag, setflag] = useState("");
  //const[loading,setLoading]=useState(false);
  let history = useHistory();
  function handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }
  async function handleClick() {
    // console.log("hello");
    const userinfo = {
      email: userid,
      password: userpassword,
    };
    //setLoading(true);
    //console.log(userinfo);
    const url = "http://52.66.236.104/api/login";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(userinfo),
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("x-api-key", data.token);

        history.push("/HomeScreen");
      })

      .catch((err) => {
        setflag("err");
      });
  }

  return (
    <>
      <form className="form">
        <input type="text" id="inputdefault" className="login" placeholder="Login Id" onChange={(e) => setUserid(e.target.value)}></input>
        <input type="password" id="inputdefault-two" className="login" placeholder="Password" onChange={(e) => setUserpassword(e.target.value)}></input>
        <div>
          <ButtonComponent onClick={handleClick}>Login</ButtonComponent>
        </div>
      </form>
      <div className="error">{flag && <span>Enter valid credentials </span>}</div>
    </>
  );
}

export default Setlogin;
