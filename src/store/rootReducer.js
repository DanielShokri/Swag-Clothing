import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartReducer']
}

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
    directoryReducer,
    shopReducer
})

export default persistReducer(persistConfig, rootReducer)