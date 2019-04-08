import { CHANGE_TODO } from '../actions'

const initialState = {
    todos: [
            {
                todo: 'Walk the dog',
                completed: false
            },
        ]
    }

const reducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case CHANGE_TODO:
            return {
                ...state,
                todos: action.payload
            }
            default:
            return state
    }
}

export default reducer