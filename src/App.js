<<<<<<< HEAD
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    show: true
  }

  toggle = () => {
    this.setState({show:!this.state.show})
  }

  render(){

    let files=null;

    if(this.state.show){
      files= (
      <ul>
      <li>File1</li>
      <li>File2</li>
      <li>File3</li>
      </ul>
      );
    }

    return (
    <div className="App">
      <header className="App-header">
        <p>Home</p>
        <button onClick={this.toggle}>Toggle</button>
          {files}
      </header>
    </div>
  );
  }
=======
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

>>>>>>> e8ce65212724050e8134bb8a47588948834e3a6c
}

export default App;
