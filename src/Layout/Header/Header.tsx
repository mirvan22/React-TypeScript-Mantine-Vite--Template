import { createStyles, Header, Group, Box, Drawer, Avatar, Center, Text, Divider } from '@mantine/core'

import { MantineLogo } from '@mantine/ds'
import { useHover, useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'
import { FaHamburger, FaUserCircle } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../Store/hook'
import { AppDispatch } from '../../Store/store'
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
  const { classes: __selfStyle } = useStyles()
  const { hovered, ref } = useHover()
  const mobile = useMediaQuery('(max-width:768px)')
  const dispatch: AppDispatch = useAppDispatch()
  const sidebarToggle = useAppSelector((state: any) => state.counter.sidebarToggle)
  const menuSection = useAppSelector((state) => state.counter.menuSection)
  const user = useAppSelector((state) => state.auth.auth)

  const handleSidebarToggle = () => {
    dispatch({ type: 'counter/sidebarToggle' })
  }

  const [opened, setOpened] = useState(false)

  const splitting = (user && user.user.role.split('_', 2)) || ''
  const getFirst = splitting[0].charAt(0)
  const getLast = splitting[1].charAt(0)
  console.log(splitting)

  return (
    <Box id="header">
      <Header height={60}>
        <Group position="apart" sx={{ height: '100%' }} className="main-color">
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
          {mobile ? (
            <Box
              sx={{
                display: 'flex',

                transitionDuration: '300ms',
              }}
            >
              <MantineLogo className={__selfStyle.mantineLogo} size={30} />
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                transitionDuration: '300ms',
                position: 'absolute',
                left: sidebarToggle ? 280 : 100,
              }}
            >
              <MantineLogo className={__selfStyle.mantineLogo} size={30} />
            </Box>
          )}

          <>
            <Drawer
              opened={opened}
              sx={{
                '.mantine-Paper-root': {
                  boxShadow: '-2px 0px 10px rgba(0,0,0,0.3)',
                  borderRadius: '5px 0px  0px 5px',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(15px)',
                },
                '.mantine-Drawer-closeButton': {
                  display: 'none',
                },
              }}
              overlayColor="rgba(0,0,0,0.3)"
              onClose={() => setOpened(false)}
              size="sm"
              position="right"
            >
              <Center>
                <Avatar color="cyan" radius="xl" size="lg" sx={{ boxShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {getFirst}
                  {getLast}
                </Avatar>
              </Center>
              <Center mt="md">
                <Text weight={500}>{user?.user.name}</Text>
              </Center>
              <Center>
                <Text weight={200} italic size="xs">
                  {user?.user.role}
                </Text>
              </Center>
              <Box px="md">
                <Divider my="xs" />
              </Box>
            </Drawer>

            <Group position="center" pr="sm" ref={ref}>
              <FaUserCircle
                className={__selfStyle.duration}
                cursor="pointer"
                size={30}
                fill={hovered ? 'rgb(51, 154, 240)' : 'white'}
                onClick={() => setOpened(true)}
              />
            </Group>
          </>
        </Group>
      </Header>

      <MenuSection mounted={menuSection} />
    </Box>
  )
}
