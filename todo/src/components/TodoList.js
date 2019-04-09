import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

import { changeTodo } from '../actions'
import { toggleTodo } from '../actions'
import { clearList } from '../actions'

class TodoList extends Component {
    state = {
        newTodoText: ''
    }

    changeHandler = e => {
        this.setState ({
            [e.target.name]: e.target.value
        })  
    }

    updateTodo = e => {
        e.preventDefault()
        this.props.changeTodo(this.state.newTodoText)
        this.setState ({
            newTodoText: ''
        })
    }

    toggleTodo = id => {
        this.props.toggleTodo(id)

    }

    clearList = e => {
        e.preventDefault()
        this.props.clearList()
    }

    render() {
        return (
            <div>
                <h1>Todo List </h1>
                <div className="todo-container">
                {this.props.todos.map(todo => <p className="individualTodos" onClick={() => this.toggleTodo(todo.id)}>{todo.todo}</p>)}
                </div>

                <form onSubmit={this.updateTodo}>
                    <input
                    name="newTodoText"
                    onChange={this.changeHandler}
                    placeholder="Add to do..."
                    value={this.state.newTodoText}              
                    ></input>
                    <button type="submit">Add Todo</button>
                    <button onClick={this.clearList}>Clear List</button>
                </form>
            </div>
        )
    }
}

//Step 4 - create the mapStateToProps function that takes in state
//and returns the piece of the state tree needed for this component

const MapStateToProps = state => {
    console.log(state)
    return {
        todos: state
    }
}

//Step 3 - Import connect and call it twice -
//first call takes in a function and an object
//the function brings in pieces of the state tree to this component
//the object brings in action creators needed in the component

export default connect(
    MapStateToProps, 
    {changeTodo, toggleTodo, clearList}
    )(TodoList)
