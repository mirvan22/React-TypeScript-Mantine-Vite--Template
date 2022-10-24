import { Button, Group, Modal, ScrollArea } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useDispatch } from 'react-redux'

import { closeStack } from '../Store/Reducer/CustomizationReducer'
import { AppDispatch } from '../Store/store'

export interface IFormDialogTemplate {
  children?: JSX.Element | JSX.Element[]
  title?: any
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined
}

interface IAppModal {
  title?: any
  children?: JSX.Element | JSX.Element[] | undefined | null
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const FormDialogTemplate = ({ children, title, size, onSubmit }: IFormDialogTemplate) => {
  const mobile = useMediaQuery('(max-width:768px)')
  return (
    <AppModal title={title} size={size}>
      <form onSubmit={onSubmit}>
        <ScrollArea.Autosize
          maxHeight={mobile ? '' : 'calc(100vh - 250px)'}
          sx={{
            height: mobile ? 'calc(100vh - 112px)' : '',

            overflowY: 'auto',
            maxWidth: '100%',
          }}
        >
          {children}
        </ScrollArea.Autosize>

        <Group position="right" className="main-color" sx={{ borderRadius: '0px 0px 3px 3px', padding: 10 }}>
          <Button type="submit" className=" button--success " variant="filled" size="xs" uppercase>
            Submit
          </Button>
        </Group>
      </form>
    </AppModal>
  )
}

export function DialogTitle(label: string, icon: any) {
  return (
    <>
      <Group p="xs" sx={{ fontSize: '20px' }}>
        {label}
        {icon}
      </Group>
    </>
  )
}

const AppModal = ({ title, children, size }: IAppModal) => {
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
