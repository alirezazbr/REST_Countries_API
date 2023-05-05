import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import darkModeReducer from './slices/darkModeReducer'

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
