import { Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useDispatch } from 'react-redux'
import { closeStack } from '../Store/Reducer/CustomizationReducer'
import { AppDispatch } from '../Store/store'

interface IAppModal {
  title?: any
  children?: JSX.Element | JSX.Element[] | undefined | null
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const AppModal = ({ title, children, size }: IAppModal) => {
  const dispatch: AppDispatch = useDispatch()
  const mobile = useMediaQuery('(max-width:768px)')
  return (
    <Modal
      fullScreen={mobile}
      className="break--mantine--modal"
      centered
      opened
      overlayOpacity={0.5}
      overlayColor="rgb(0,0,0)"
      overlayBlur={1}
      size={size}
      zIndex={99999999}
      onClose={() => dispatch(closeStack())}
      title={title}
    >
      {children}
    </Modal>
  )
}
