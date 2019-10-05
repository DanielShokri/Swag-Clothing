import types from '../types'

export const updateCollections = (collectionsMap) => ({
    type: types.UPDATE_COLLECTIONS,
    payload: collectionsMap
})