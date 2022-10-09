import { Login } from '../Auth/Login'
import { MinimalLayout } from '../Layout/MinimalLayout'

export const AuthRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [{ path: '/login', element: <Login /> }],
}