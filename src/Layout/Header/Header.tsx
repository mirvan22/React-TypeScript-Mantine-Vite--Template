import { createStyles, Header, Group, Box } from '@mantine/core'

import { MantineLogo } from '@mantine/ds'
import { useDisclosure, useHover, useMediaQuery } from '@mantine/hooks'
import { FaHamburger, FaUserCircle } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../Store/hook'
import { AppDispatch } from '../../Store/store'
import { useGlobalStyle } from '../../Utils/GlobalStyle'
import { MenuSection } from './MenuSection'

const useStyles = createStyles((theme) => ({
  hoverBurger: {
    position: 'relative',
    transitionDuration: '200ms',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
      cursor: 'pointer',
    },
  },

  mantineLogo: {
    'path ~ path': {
      fill: 'white',
    },
  },

  duration: {
    transitionDuration: '300ms',
  },
}))

export const AppHeader = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const { classes: __selfStyle } = useStyles()
  const { classes } = useGlobalStyle()
  const { hovered, ref } = useHover()
  const mobile = useMediaQuery('(max-width:768px)')
  const dispatch: AppDispatch = useAppDispatch()
  const sidebarToggle = useAppSelector((state: any) => state.counter.sidebarToggle)
  const menuSection = useAppSelector((state) => state.counter.menuSection)

  const handleSidebarToggle = () => {
    dispatch({ type: 'counter/sidebarToggle' })
  }

  return (
    <Box id="header">
      <Header height={60}>
        <Group position="apart" sx={{ height: '100%', backgroundColor: 'rgb(26, 27, 30)' }}>
          <Box
            className={__selfStyle.hoverBurger}
            sx={{
              width: sidebarToggle ? (mobile ? '100vw' : 250) : 50,

              height: '100%',
              position: 'relative',
              transitionDuration: '300ms',
            }}
            onClick={() => handleSidebarToggle()}
          >
            <FaHamburger color="white" size={30} />
          </Box>
          <Box
            sx={{
              width: sidebarToggle ? 'calc(100vw - 500px)' : 'calc(100vw - 200px)',
              display: 'flex',

              transitionDuration: '500ms',
            }}
          >
            <MantineLogo className={__selfStyle.mantineLogo} size={30} />
          </Box>

          <Group ref={ref} sx={{ paddingRight: 20 }}>
            <Box
              sx={{ display: 'flex' }}
              onClick={() => {
                dispatch({ type: 'counter/menuSectionReducer', payload: !menuSection })
              }}
            >
              <FaUserCircle
                className={__selfStyle.duration}
                cursor="pointer"
                size={30}
                fill={hovered || menuSection ? 'rgb(51, 154, 240)' : 'white'}
              />
            </Box>
          </Group>
        </Group>
      </Header>

      <MenuSection mounted={menuSection} />
    </Box>
  )
}
