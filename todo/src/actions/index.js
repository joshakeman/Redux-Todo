export const CHANGE_TODO = 'CHANGE_TODO'
export const changeTodo = todo => {
    console.log(todo)
    return {
        type: CHANGE_TODO,
        payload: todo
    }
}

export const TOGGLE_TODO = "TOGGLE_TODO"
export const toggleTodo = todo => {
    console.log(todo)
    return {
        type: TOGGLE_TODO,
        payload: todo
    }
}