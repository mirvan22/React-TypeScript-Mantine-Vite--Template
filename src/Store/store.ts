import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './Reducer/AuthReducer'
import { counterSlice } from './Reducer/CustomizationReducer'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authReducer.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
