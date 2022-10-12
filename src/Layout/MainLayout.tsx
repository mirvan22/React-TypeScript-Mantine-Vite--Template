import { Box, LoadingOverlay, Transition } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../Store/hook'
import { AppHeader } from './Header/Header'
import { SideBar } from './Sidebar'

export const MainLayout = () => {
  const user = useAppSelector((state) => state.auth.auth)
  if (!user) {
    return <Navigate to="/login" />
  }
  const toggle = useAppSelector((state) => state.counter.sidebarToggle)
  const loadingOverlay = useAppSelector((state) => state.counter.loadingOverlay)

  const mobile = useMediaQuery('(max-width:768px)')
  return (
    <Box id="mainlayout">
      <Transition mounted={loadingOverlay} transition="fade">
        {(styles) => (
          <LoadingOverlay
            transitionDuration={300}
            style={{ ...styles }}
            loaderProps={{ size: 'lg', color: 'blue', variant: 'bars' }}
            overlayOpacity={0.5}
            overlayColor="rgb(0,0,0)"
            overlayBlur={2}
            visible={toggle}
          />
        )}
      </Transition>

      <Box
        sx={{
          marginTop: 80,
          marginRight: 20,
          marginLeft: toggle ? 270 : mobile ? 20 : 70,
          transitionDuration: '300ms',
        }}
      >
        <Outlet />
      </Box>
      <AppHeader />
      <SideBar />
    </Box>
  )
}
