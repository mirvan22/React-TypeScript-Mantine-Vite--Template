import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './Reducer/AuthReducer'
import { counterSlice } from './Reducer/CustomizationReducer'

export interface IDispatch {
  type: string
}

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
