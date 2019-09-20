import types from '../types';
import swagService from '../../services/swagService'

const INITIAL_STATE = {
    cartItems: []
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.ADD_ITEM:
            return {
                ...state,
                cartItems: swagService.addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}