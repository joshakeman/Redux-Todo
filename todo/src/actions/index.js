export const CHANGE_TODO = 'CHANGE_TODO'

export const changeTodo = todo => {
    console.log(todo)
    return {
        type: CHANGE_TODO,
        payload: { todo, completed: false }
    }
}