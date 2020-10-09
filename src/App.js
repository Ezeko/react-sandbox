import React, {Component} from 'react';
import './App.css';
import CustomButton from './Components/Button';
import Input from './Components/Input';


class App extends Component {
  state ={
    formValue: ''
  };

  //handles submission of form
  handleSubmit = (e) => {
    let form = e.target;
    form.reset();
    e.preventDefault();
    this.state.formValue ?
    alert(`Your entered value is ${this.state.formValue}`)
    :  console.log(e);
  }

  //handles change in input field
  handleChange = (e) => this.setState({formValue: e.target.value})

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>Form </h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <Input type={'text'} id='input-field' placeholder= 'input field' onChange={this.handleChange} />
          <CustomButton buttonName='Submit' id='submit-button' />
        </form>
        <hr />
        {
          this.state.formValue ? 
          <h1>
            Entered value is: {this.state.formValue}
          </h1>
          : 
          '' 
        }
      </div>
  );
  }
}

export default App;
