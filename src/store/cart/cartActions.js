import types from '../types';

export const addItem = item => ({
    type: types.ADD_ITEM,
    payload: item
})

export const deleteItem = item => ({
    type: types.DELETE_ITEM,
    payload: item
})

export const removeItem = item =>({
    type: types.REMOVE_ITEM,
    payload: item
})