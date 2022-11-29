import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="header">
          <h1>Luke's ToDo List</h1>
        </div>

        <ul id="list" style="list-style: none">
          <Todo />
        </ul>
      </div>
    );
  }
}

export default App;
