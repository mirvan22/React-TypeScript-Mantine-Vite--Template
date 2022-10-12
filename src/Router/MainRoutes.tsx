import { lazy } from 'react'
import { MainLayout } from '../Layout/MainLayout'

import Loadable from './RouterComponent/Loadable'

// project imports

// dashboard routing
const Dashboard = Loadable(lazy(() => import('../Views/Dashboard')))

const Users = Loadable(lazy(() => import('../Views/Users')))
const Order = Loadable(lazy(() => import('../Views/Users')))

// sample page routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '', element: <Dashboard /> },
    { path: '/users', element: <Users /> },
    { path: '/order', element: <Order /> },
  ],
}

export default MainRoutes
