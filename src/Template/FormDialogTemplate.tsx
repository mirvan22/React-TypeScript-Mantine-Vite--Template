import { Button, Group, ScrollArea } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { AppModal } from '../Component/AppModal'

export interface IFormDialogTemplate {
  children?: JSX.Element | JSX.Element[]
  title?: any
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined
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
