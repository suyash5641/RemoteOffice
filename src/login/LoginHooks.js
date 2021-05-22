import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import google from './google-symbol.svg';
import Button from '@material-ui/core/Button';
import { borders } from '@material-ui/system';
import './LoginHooks.css';
import {useParams,Link,Switch,useHistory,
    Route} from 'react-router-dom'

// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId =
  '837775511971-5a1lpt6urr0rcp8neose7n0t20ktke7v.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
   // alert(
   //   `Logged in successfully welcome ${res.profileObj.name}.`
   // );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({

    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
      <>
    <div className="symbol">
    <Button variant='contained' size="small" textAlign="center" style={{textTransform: 'none', backgroundColor: 'white',
     border:'1px solid #307FE2',borderRadius: "8px" } } 
    onClick={signIn} borderRadius={20}
     > 
     <img src={google} className="icon" ></img>
     <span className="google-text" >Google</span>
   </Button>
   </div>
    </>
  );
}

export default LoginHooks;