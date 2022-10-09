import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  sidebarToggle: boolean
  userToggle: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  sidebarToggle: true,
  userToggle: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.sidebarToggle = !state.sidebarToggle
    },

    userToggle: (state) => {
      state.userToggle = !state.userToggle
    },
  },
})

export const { sidebarToggle, userToggle } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.sidebarToggle

export default counterSlice.reducer
