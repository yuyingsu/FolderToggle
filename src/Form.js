import React,{ Component } from "react";

class Form extends Component{

    render(){
        return(
        <form>
        <label for="fname">First name:</label><br></br>
        <input type="text" value={this.props.fName} onChange={this.props.changeFName}></input><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" value={this.props.lName} onChange={this.props.changeLName}></input><br></br>
        <input type="submit" value="Submit" onClick={this.props.changeName}></input>
        <input type="submit" value="Cancel" onClick={this.props.rollBack}></input>
        </form>
        )};

}

export default Form;
