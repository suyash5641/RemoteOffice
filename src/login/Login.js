import Group306 from '../img/Group 306.svg';
import Setlogin from '../Setlogin';
import Path159 from '../img/Path 159.svg';
import './Login.css';
import Setfooter from '../Setfooter';
import google from './google-symbol.svg';
import LoginHooks from './LoginHooks';
function Login() {
  return (
    <div >
      <header> 
      <img src={Path159} className="image" /> 
        <img src={Group306} className="image-two" /> 
        </header>
        <Setlogin/> 
        <div className="text-change" >
          <span className="text-change-first">Or</span>
          <br></br>
          <span>Sign in with</span> 
       </div> 
        <div >
          <LoginHooks />
        </div>
        <div>
          <Setfooter/>
        </div>
   </div>
  );
}

export default Login;
