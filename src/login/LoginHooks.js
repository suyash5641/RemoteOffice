import React from "react";
import { useGoogleLogin } from "react-google-login";
import google from "../img/google-symbol.svg";
import Button from "@material-ui/core/Button";
import "./LoginHooks.css";

// refresh token
import { refreshTokenSetup } from "./refreshToken";

const clientId = "837775511971-5a1lpt6urr0rcp8neose7n0t20ktke7v.apps.googleusercontent.com";

function LoginHooks() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name}.`
    // );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <>
      <div className="symbol">
        <Button variant="contained" size="small" style={{ textTransform: "none", backgroundColor: "white", borderRadius: "8px", border: "1px solid #307FE2" }} onClick={signIn}>
          <img src={google} alt="google" className="icon"></img>
          <span className="google-text">Google</span>
        </Button>
      </div>
    </>
  );
}

export default LoginHooks;
