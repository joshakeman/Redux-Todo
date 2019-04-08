import { CHANGE_TODO } from '../actions'

const initialState = [
    {
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
                    todo: action.payload,
                    completed: false
                }
            ]
            default:
            return state
    }
}

export default reducer