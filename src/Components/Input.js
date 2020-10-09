import React from 'react';

function Input (props){

    //make custom input tag
    return(
        <input type={props.type} required = {props.required} onChange = {props.onChange} id={props.id} placeholder ={props.placeholder} />
    )
}

export default Input;