import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/globalReducer'

export const store = configureStore({
  reducer: {
    globalReducer: globalReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
