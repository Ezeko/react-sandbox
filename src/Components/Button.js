import React from 'react';

function CustomButton (props) {

    return(
        <button id={props.id} onClick={props.handleClick}>{props.buttonName}  </button>
    )
}


export default CustomButton;