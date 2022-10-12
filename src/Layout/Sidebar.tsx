import { Box, Divider, Navbar, NavLink, ScrollArea } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'
import { MenuItems } from '../Menu/MenuItems'
import { useAppDispatch, useAppSelector } from '../Store/hook'
import { AppDispatch } from '../Store/store'
import { useGlobalStyle } from '../Utils/GlobalStyle'

export const SideBar = () => {
  const location = useLocation()
  const toggle = useAppSelector((state) => state.counter.sidebarToggle)
  const { classes, cx } = useGlobalStyle()
  const dispatch: AppDispatch = useAppDispatch()
  const { pathname } = location

  return (
    <>
      <Navbar
        className={classes.hiddenMobile}
        id="sidebar"
        width={{ base: toggle ? 250 : 50 }}
        px={toggle ? 20 : 0}
        sx={{ position: 'fixed', transitionDuration: '300ms' }}
      >
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          {MenuItems.map((r, k) => (
            <Box key={k}>
              <Divider
                my="xs"
                label={r.label}
                labelPosition="left"
                sx={{ transform: toggle ? '' : 'translateX(-100px)', transitionDuration: '300ms' }}
              />
              {r.children.map((row) => (
                <NavLink
                  key={row.key}
                  className={cx(classes.navLink, { [classes.active]: row.path === pathname })}
                  label={row.label}
                  mt={toggle ? 10 : 0}
                  description={row.description}
                  icon={row.icon}
                  sx={{ transitionDuration: '100ms', borderRadius: toggle ? 10 : 0 }}
                  component={Link}
                  to={row.path}
                />
              ))}
            </Box>
          ))}
        </Navbar.Section>
      </Navbar>

      <Navbar
        className={classes.hiddenDesktop}
        id="sidebar"
        px={toggle ? 20 : 0}
        sx={{ position: 'fixed', transitionDuration: '200ms', width: toggle ? '' : 1 }}
      >
        <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
          {MenuItems.map((r, k) => (
            <Box key={k}>
              <Divider
                my="xs"
                label={r.label}
                labelPosition="left"
                sx={{ transform: toggle ? '' : 'translateX(-100px)', transitionDuration: '300ms' }}
              />
              {r.children.map((row) => (
                <NavLink
                  key={row.key}
                  label={row.label}
                  description={row.description}
                  icon={row.icon}
                  className={cx(classes.navLink, { [classes.active]: row.path === pathname })}
                  onClick={() => {
                    dispatch({ type: 'counter/sidebarToggle' })
                  }}
                  component={Link}
                  to={row.path}
                />
              ))}
            </Box>
          ))}
        </Navbar.Section>
      </Navbar>
    </>
  )
}
