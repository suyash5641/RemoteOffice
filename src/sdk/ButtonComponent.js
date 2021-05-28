
import React from "react";
import Button from '@material-ui/core/Button';
function ButtonComponent(props)
{
 return(
    <Button onClick={props.onClick} variant='contained' style={{textTransform: 'none',color:"white", backgroundColor: '#307FE2',height:'40px',
    width:'30%',marginTop:'10px'} } >
        {props.children}
    </Button>
 )
}
export default ButtonComponent;