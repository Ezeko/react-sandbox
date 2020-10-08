import React, { Component} from 'react';

class CustomButton extends Component {

    render(){
        return(
            <button id={this.props.id} onClick={this.props.handleClick}>{this.props.buttonName}  </button>
        )
    }
}


export default CustomButton;