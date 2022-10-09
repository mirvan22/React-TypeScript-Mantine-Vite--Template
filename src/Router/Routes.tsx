import { useRoutes } from 'react-router-dom'
import { AuthRoutes } from './AuthRoutes'
import MainRoutes from './MainRoutes'

// route

// ==============================|| ROUTING RENDER ||============================== //

export const Routes = () => {
  return useRoutes([MainRoutes, AuthRoutes], '')
}
