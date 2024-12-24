import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  useReducer  from './user/userSlice';
import {persisteReducer} from 'redux-persist';
import { version } from 'react';
const rootReducer =combineReducers({user: useReducer})
const persistConfig ={
  key :'root',
  storage,
  version :1,

}
const  persisteReducer = persisteReducer(persistConfig , rootReducer)
export const store = configureStore({
  reducer: persisteReducer,
  middleware : (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck : false ,
  }),
})
export const persistor = persistStore(store);