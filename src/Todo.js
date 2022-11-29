import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        return (
            <div className="App">
                <div className="main">
                    <form id="todo">
                        <input type="text" className="insert" id="insert" placeholder="Insert..."></input>
                        <input type="button" className="add" id="add" value="Add"></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Todo;
