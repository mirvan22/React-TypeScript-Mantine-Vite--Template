import { Navbar, NavLink, ScrollArea } from '@mantine/core'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuItems } from '../Menu/MenuItems'
import { useAppSelector } from '../Store/hook'

interface ISideBar {
  toggleValue?: number
}

export const SideBar = ({ toggleValue }: ISideBar) => {
  const [active, setActive] = useState(0)
  const location = useLocation()
  const toggle = useAppSelector((state) => state.counter.sidebarToggle)

  return (
    // <Box sx={{ backgroundColor: 'red', position: 'fixed', top: 60, bottom: 0, maxWidth: 300 }}>
    //   <Box sx={{ width: 300 }}>Hello</Box>
    // </Box>
    <Navbar id="sidebar" width={{ base: toggle ? 300 : 55 }} sx={{ position: 'fixed', transitionDuration: '500ms' }}>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {MenuItems.map((row, key) => (
          <NavLink
            key={key}
            label={row.label}
            description={row.description}
            icon={row.icon}
            active={key === active}
            onClick={() => setActive(key)}
            component={Link}
            to={row.path}
          />
        ))}
      </Navbar.Section>
    </Navbar>
  )
}
