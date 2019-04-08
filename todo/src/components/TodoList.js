import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
    state = {
        newTodoText: ''
    }

    render() {
        return (
            <h1>Todo List </h1>
        )
    }
}

//Step 4 - create the mapStateToProps function that takes in state
//and returns the piece of the state tree needed for this component

const MapStateToProps = state => {
    return {
        todos: state.todos
    }
}

//Step 3 - Import connect and call it twice -
//first call takes in a function and an object
//the function brings in pieces of the state tree to this component
//the object brings in action creators needed in the component

export default connect(MapStateToProps, {})(TodoList)
