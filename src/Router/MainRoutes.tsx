import { lazy } from 'react'
import { MainLayout } from '../Layout/MainLayout'

import Loadable from './RouterComponent/Loadable'

// project imports

// dashboard routing
const AboutPage = Loadable(lazy(() => import('../Views/About')))

// sample page routing

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [{ path: '/about', element: <AboutPage /> }],
}

export default MainRoutes
