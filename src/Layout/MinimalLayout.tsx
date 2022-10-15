import { LoadingOverlay, Transition } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../Store/hook'

export const MinimalLayout = () => {
  const loadingOverlay = useAppSelector((state) => state.counter.loadingOverlay)
  return (
    <>
      <Transition mounted={loadingOverlay} transition="fade">
        {(styles) => (
          <LoadingOverlay
            transitionDuration={300}
            style={{ ...styles }}
            loaderProps={{ size: 'lg', color: 'blue', variant: 'bars' }}
            overlayOpacity={0.5}
            overlayColor="rgb(0,0,0)"
            overlayBlur={2}
            visible={loadingOverlay}
          />
        )}
      </Transition>
      <Outlet />
    </>
  )
}
