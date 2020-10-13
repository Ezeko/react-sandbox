import React from 'react';

function CustomButton (props) {

    return(
        <button id={props.id} onClick={props.handleClick} className={props.className}>{props.buttonName}  </button>
    )
}


export default CustomButton;