import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Nijas';
import Ninjas from './Nijas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name: 'Leon', age: '50', belt:'Black', id:1},
      {name: 'John', age: '30', belt:'Red', id:2},
      {name: 'GreenMan', age: '22', belt:'Green', id:3}
    ]
  }
  
  AddNinja = (ninja) => {
    console.log("a new ninja :" + ninja);
    console.log("Existing ninjas: " + this.state.ninjas);
    ninja.id = Math.random();
    var ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas : ninjas
    })
    console.log("New njnjas: " + this.state.ninjas);
  }

  deleteNinja = (id) => {
    console.log("click ninja id:" + id)
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Ninjas deleteNinja = {this.deleteNinja} ninjas={this.state.ninjas} />
          {/* pass the props of AddNinja function} */}
          <AddNinja AddNinja = {this.AddNinja}/> 
        </header>
      </div>
    );
  }
}

export default App;
