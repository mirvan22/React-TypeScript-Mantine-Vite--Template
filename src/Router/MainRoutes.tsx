import { lazy } from 'react'
import { MainLayout } from '../Layout/MainLayout'

import Loadable from './RouterComponent/Loadable'

const Dashboard = Loadable(lazy(() => import('../Views/Dashboard')))
const Users = Loadable(lazy(() => import('../Views/Users')))
const Order = Loadable(lazy(() => import('../Views/Users')))
///Seed Component Router Dont Delete This Comment

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    { path: '', element: <Dashboard /> },
    { path: '/users', element: <Users /> },
    { path: '/order', element: <Order /> },
    //Seed Path Router Dont Delete This Comment
  ],
}

export default MainRoutes
