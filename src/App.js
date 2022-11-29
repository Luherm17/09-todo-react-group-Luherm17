import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="header">
          <h1>Luke's ToDo App</h1>
        </div>

        <ul id="list">
          <NewTodo />
          <Todo />
        </ul>
      </div>
    );
  }
}

export default App;
