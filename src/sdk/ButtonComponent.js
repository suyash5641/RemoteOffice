import React from "react";
import Button from "@material-ui/core/Button";
function ButtonComponent(props) {
  //console.log("this was run");
  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      style={{
        textTransform: "none",
        color: "white",
        backgroundColor: "#307FE2",
        padding: "10px 32px ",
        boxShadow: "5px 5px 10px #307FE24D",
        borderRadius: "8px",
        Font: "normal normal 900 17px/27px Lato",
        letterSpacing: "0.77px",
      }}
    >
      {props.children}
    </Button>
  );
}
export default ButtonComponent;
