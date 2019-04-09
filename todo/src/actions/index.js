export const CHANGE_TODO = 'CHANGE_TODO'
export const changeTodo = todo => {
    console.log(todo)
    return {
        type: CHANGE_TODO,
        payload: todo
    }
}

export const TOGGLE_TODO = "TOGGLE_TODO"
export const toggleTodo = todoId => {
    console.log(todoId)
    return {
        type: TOGGLE_TODO,
        payload: todoId
    }
}

export const CLEAR_LIST = "CLEAR_LIST"
export const clearList = todo => {
    console.log(todo)
    return {
        type: CLEAR_LIST,
    }
}