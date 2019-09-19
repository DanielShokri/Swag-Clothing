
const INITIAL_STATE = {
    currUser: null
}

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currUser: action.payload
            }
        default:
            return state;
    }
}