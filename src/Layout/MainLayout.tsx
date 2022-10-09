import { Box } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../Store/hook'
import { AppHeader } from './Header/Header'
import { SideBar } from './Sidebar'

export const MainLayout = () => {
  const toggle = useAppSelector((state) => state.counter.sidebarToggle)
  return (
    <Box id="mainlayout">
      <AppHeader />
      <SideBar />
      <Box sx={{ marginTop: 20, position: 'absolute', top: 50, right: 20, left: toggle ? 320 : 70, transitionDuration: '500ms' }}>
        <Outlet />
      </Box>
    </Box>
  )
}
