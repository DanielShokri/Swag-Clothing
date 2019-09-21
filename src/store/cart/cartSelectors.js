import { createSelector } from 'reselect';

const selectCart = state => state.cartReducer;

export const selectCartItems = createSelector([selectCart], (cartReducer => cartReducer.cartItems));

export const selectCartItemsCount = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0))

export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0))