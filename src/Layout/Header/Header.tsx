import { createStyles, Header, Group, Button, Box, Burger, Drawer, ScrollArea, SimpleGrid, Paper, Transition } from '@mantine/core'

import { MantineLogo } from '@mantine/ds'
import { useClickOutside, useDisclosure, useHover } from '@mantine/hooks'
import { useState } from 'react'
import { FaHamburger, FaUserCircle } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '../../Store/hook'
import { AppDispatch } from '../../Store/store'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

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
  const { classes } = useStyles()
  const { hovered, ref } = useHover()

  const dispatch: AppDispatch = useAppDispatch()
  const toggle = useAppSelector((state) => state.counter.sidebarToggle)
  const userToggle = useAppSelector((state) => state.counter.userToggle)

  const handleSidebarToggle = () => {
    dispatch({ type: 'counter/sidebarToggle' })
  }

  const clickOutsidePaper = useClickOutside(() => {
    setDropDown(false)
    console.log('Outside Paper')
  })

  const [dropDown, setDropDown] = useState(false)

  return (
    <Box id="header">
      <Header height={60}>
        <Group position="apart" sx={{ height: '100%', backgroundColor: 'rgb(26, 27, 30)' }}>
          <Box
            className={classes.hoverBurger}
            sx={{
              width: toggle ? 300 : 55,
              textAlign: 'end',
              height: '100%',
              position: 'relative',
              transitionDuration: '500ms',
            }}
            onClick={() => handleSidebarToggle()}
          >
            <FaHamburger color="white" size={30} />
          </Box>
          <Box
            sx={{
              width: toggle ? 'calc(100vw - 500px)' : 'calc(100vw - 200px)',
              display: 'flex',

              transitionDuration: '300ms',
              transitionTimingFunction: 'ease-in-out',
            }}
          >
            <MantineLogo className={classes.mantineLogo} size={30} />
          </Box>

          <Group ref={ref} className={classes.hiddenMobile} sx={{ paddingRight: 20 }}>
            <Box
              sx={{ display: 'flex' }}
              onClick={() => {
                setDropDown(true)
              }}
              ref={clickOutsidePaper}
            >
              <FaUserCircle
                className={classes.duration}
                cursor="pointer"
                size={30}
                fill={hovered || dropDown ? 'rgb(51, 154, 240)' : 'white'}
              />
            </Box>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Nest Pisma"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <SimpleGrid cols={1} sx={{ paddingLeft: 5, paddingRight: 5 }}>
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </SimpleGrid>
        </ScrollArea>
      </Drawer>

      <Transition mounted={dropDown} transition="pop-bottom-right" duration={200} timingFunction="ease">
        {(styles) => (
          <Paper
            withBorder
            ref={clickOutsidePaper}
            style={{ ...styles, height: 300 }}
            p={10}
            sx={{ position: 'absolute', top: 50, right: 20, width: 300, boxShadow: '-1px 2px 5px rgba(0,0,0,0.3)' }}
          >
            <Box>Hello</Box>
          </Paper>
        )}
      </Transition>
    </Box>
  )
}
