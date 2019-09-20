import types from '../types'

export const setCurrentUser = user => ({
    type: types.SET_CURRENT_USER,
    payload: user
})