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
            return state.map(todo => action.payload === todo.id ? {...todo, completed: !todo.completed} : todo)
            
        
            default:
            return state
    }
}

export default reducer