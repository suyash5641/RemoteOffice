import Group306 from "../img/Group 306.svg";
import Setlogin from "./Setlogin";
import Path159 from "../img/Path 159.svg";
import "./Login.css";
import Setfooter from "./Setfooter";
import LoginHooks from "./LoginHooks";
function Login() {
  return (
    <div className="setmain">
      <div className="setbox">
        <header className="upper-section">
          <img src={Path159} alt=" icon" className="image" />
          <img src={Group306} alt=" icon" className="image-two" />
        </header>
        <Setlogin />
        <div className="text-change">
          <span className="text-change-first">Or</span>
          <br></br>
          <span>Sign in with</span>
        </div>
        <div className="google-auth">
          <LoginHooks />
        </div>
      </div>
      <div>
        <Setfooter />
      </div>
    </div>
  );
}

export default Login;
