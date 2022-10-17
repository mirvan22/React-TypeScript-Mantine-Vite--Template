import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface CounterState {
  sidebarToggle: boolean
  loadingOverlay: boolean
  menuSection: boolean
  openStack: any
  modalIsOpen: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  sidebarToggle: true,
  loadingOverlay: false,
  menuSection: false,
  openStack: [],
  modalIsOpen: false,
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    sidebarToggle: (state) => {
      state.sidebarToggle = !state.sidebarToggle
    },

    loadingOverlay: (state, action: PayloadAction<boolean>) => {
      state.loadingOverlay = action.payload
    },
    menuSectionReducer: (state, action: PayloadAction<boolean>) => {
      state.menuSection = action.payload
    },
    openStack: (state, action: PayloadAction<JSX.Element[]>) => {
      state.openStack.push(action.payload)
    },
    closeStack: (state) => {
      state.openStack.pop()
    },
    modalIsOpen: (state, action: PayloadAction<boolean>) => {
      state.modalIsOpen = action.payload
    },
  },
})

export const { sidebarToggle, loadingOverlay, menuSectionReducer, openStack, closeStack, modalIsOpen } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.sidebarToggle

export default counterSlice.reducer
