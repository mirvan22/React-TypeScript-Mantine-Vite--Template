import { Box, Divider, NavLink, Paper, Text, Transition } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useAppDispatch, useAppSelector } from '../../Store/hook'
import { AppDispatch } from '../../Store/store'

interface IMenuSection {
  mounted: boolean
}

export const MenuSection = ({ mounted }: IMenuSection) => {
  const dispatch: AppDispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.auth)
  const ref = useClickOutside(() => dispatch({ type: 'counter/menuSectionReducer', payload: false }))

  const navigate = useNavigate()

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result: any) => {
      if (result.isConfirmed) {
        localStorage.clear()

        window.location.reload()
      }
    })
  }

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
            Halo, {user?.user.name}
          </Text>
          <Text weight={100} size="sm" italic sx={{ color: 'rgba(0,0,0,0.5)' }}>
            {user?.user.role}
          </Text>
          <Divider my={20} />

          <Box onClick={() => handleLogout()}>
            <NavLink className="break--mantine--nav" icon={<FiLogOut size={20} />} label="Logout" />
          </Box>
        </Paper>
      )}
    </Transition>
  )
}
