import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import jwt_decode from 'jwt-decode'

// Define a type for the slice state

export interface IAuthUser {
  name: string
  username: string
  statusAktif: boolean
  role: string
  createdAt: Date
  updateAt: Date
  uuid: string
  iat: number
}

export interface IAuthReducer {
  Authorization: string
  user: IAuthUser
}

interface IInitialState {
  auth: IAuthReducer | null
}

export const authControl = (): IAuthReducer | null => {
  if (!localStorage.getItem('role')) return null

  const login = JSON.parse(localStorage.getItem('login') || '')

  try {
    const decoded = jwt_decode(login.Authorization) as IAuthUser
    return { Authorization: login.Authorization, user: { ...decoded } }
  } catch (error) {
    return null
  }
}

const initialState: IInitialState = {
  auth: authControl(),
}

export const authReducer = createSlice({
  name: 'auth',

  initialState,
  reducers: {
    getUser: (state, token: PayloadAction<any>) => {
      if (!token.payload) {
        state.auth = null
      }

      const decoded = jwt_decode(token.payload) as IAuthUser

      state.auth = { Authorization: token.payload, user: { ...decoded } }
    },
  },
})

export const { getUser } = authReducer.actions

export default authReducer.reducer
