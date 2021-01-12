import React, { Component } from 'react';
import Form from "./Form";
import './App.css';

class App extends Component{

    state = {
      firstName : "",
      lastName : "",
      showName : true,
      showForm : false,
      prevFirstName: "",
      prevLastName: ""
    }

    change = () => {
      this.setState({showForm:!this.state.showForm, showName:!this.state.showName});
    }

    changeName = (event) => {
      this.setState({showForm:!this.state.showForm, showName:!this.state.showName,
        prevFirstName: this.state.firstName, prevLastName: this.state.lastName});
    }

    changeFName= (e) => {
      this.setState({firstName: e.target.value});
    }

    changeLName= (e) => {
      this.setState({lastName: e.target.value});
    }

    rollBack = () => {
      this.setState({showForm:!this.state.showForm, showName:!this.state.showName, 
        firstName: this.state.prevFirstName, lastName: this.state.prevLastName});
    }

    render(){

      let name = null;

      if (this.state.showName) {
        name = (
          <div>
          <div>
          {this.state.firstName}
          </div>
          <div>
          {this.state.lastName}
          </div>
          <button onClick={this.change}>Edit</button>
          </div>
        );
      }

      return(
              <div className="App">
              <header className="App-header">
              {name}
              {this.state.showForm ? (
              <Form changeName={this.changeName} rollBack={this.rollBack} 
                    changeFName={this.changeFName} changeLName={this.changeLName}
                    fName={this.state.firstName} lName={this.state.lastName}/>
              ) : null}
              </header>
              </div>

        )};

}

export default App;
