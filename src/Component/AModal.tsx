import { Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useDispatch } from 'react-redux'
import { closeStack } from '../Store/Reducer/CustomizationReducer'
import { AppDispatch } from '../Store/store'

interface IAModal {
  title?: any
  children?: JSX.Element | JSX.Element[] | undefined | null
}

export const AModal = ({ title, children }: IAModal) => {
  const dispatch: AppDispatch = useDispatch()
  const mobile = useMediaQuery('(max-width:768px)')
  return (
    <Modal
      fullScreen={mobile}
      className="break--mantine--modal"
      centered
      opened
      size="lg"
      onClose={() => dispatch(closeStack())}
      title={title}
    >
      {children}
    </Modal>
  )
}
