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
}

export default App;
