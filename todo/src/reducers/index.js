import { CHANGE_TODO } from '../actions'
import { TOGGLE_TODO } from '../actions'

const initialState = [
    {
    id: Date.now(),
    todo: 'Walk dog',
    completed: false
    }

]

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case CHANGE_TODO:
            return [
                ...state,
                {
                    id: Date.now(),
                    todo: action.payload,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            const foundTodo = state.find(todo => action.payload === todo.id)
            console.log(foundTodo)
            return {
                 ...state,
                 [foundTodo.completed]: true
                
            }    
        
            default:
            return state
    }
}

export default reducer