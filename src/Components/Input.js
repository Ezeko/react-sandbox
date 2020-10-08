import React, {Component} from 'react';

class Input extends Component{

    render(){
        //make custom input tag
        return(
            <input type={this.props.type} required = {this.props.required} onChange = {this.props.onChange} id={this.props.id} placeholder ={this.props.placeholder} />
        )
    }
}

export default Input;