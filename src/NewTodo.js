import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
    render() {
        return (
            <div className="NewTodo">
                <div class="main">
                    <form id="todo">
                        <input type="text" class="insert" id="insert" placeholder="Insert..."/>
                        <input type="button" class="add" id="add" value="Add"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewTodo;
