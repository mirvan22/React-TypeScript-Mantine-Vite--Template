import { Box, Divider, NavLink, Paper, Text, Transition } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { FiLogOut } from 'react-icons/fi'
import { useAppDispatch } from '../../Store/hook'
import { AppDispatch } from '../../Store/store'

interface IMenuSection {
  mounted: boolean
}

export const MenuSection = ({ mounted }: IMenuSection) => {
  const dispatch: AppDispatch = useAppDispatch()
  const ref = useClickOutside(() => dispatch({ type: 'counter/menuSectionReducer', payload: false }))
  return (
    <Transition mounted={mounted} transition="pop-bottom-right" duration={200} timingFunction="ease">
      {(styles) => (
        <Paper
          withBorder
          ref={ref}
          style={{ ...styles, height: 300 }}
          p={16}
          sx={{ position: 'absolute', top: 50, right: 20, width: 300, boxShadow: '-1px 2px 5px rgba(0,0,0,0.3)', zIndex: 999999 }}
        >
          <Text weight={500} size="md">
            Halo, Super User
          </Text>
          <Text weight={100} size="sm" italic sx={{ color: 'rgba(0,0,0,0.5)' }}>
            Super User
          </Text>
          <Divider my={20} />

          <Box>
            <NavLink icon={<FiLogOut size={20} />} label="Logout" />
          </Box>
        </Paper>
      )}
    </Transition>
  )
}
