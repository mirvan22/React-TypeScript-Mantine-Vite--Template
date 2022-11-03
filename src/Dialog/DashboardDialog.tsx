import { useForm } from '@mantine/form'
import { DialogTitle, FormDialogTemplate } from '../Template/FormDialogTemplate'
import { GridTemplate, IGridElements } from '../Template/GridTemplate'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineKey } from 'react-icons/ai'

import { AppDispatch } from '../Store/store'
import { useDispatch } from 'react-redux'
import { POST } from '../Utils/Axios'
import { Icon } from '../Utils/Icon'

interface IDialog {
  SELECTED?: any
  callBack?: () => void
}
interface IElements {
  GridElements: () => IGridElements[]
  onSubmit: () => void
}

interface IInitialValues {
  name: string
  username: string
  password: string
  role: string | null
}

export const DashboardDialog = ({ SELECTED, callBack }: IDialog) => {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: '',
      username: '',
      password: '',
      role: null,
    },
  })

  const Elements: IElements = {
    GridElements() {
      return [
        {
          margin: 'sm',
          GridCol: [
            {
              colspan: 6,
              TextInput: [
                {
                  label: 'Name',
                  placeholder: 'Your Name',
                  icon: <FaUserAlt size={20} />,
                  getValue: { ...form.getInputProps('name') },
                },
              ],
            },
            {
              colspan: 6,
              TextInput: [
                {
                  label: 'Username',
                  placeholder: 'Your Username',
                  icon: <FaUserAlt size={20} />,
                  getValue: { ...form.getInputProps('username') },
                },
              ],
            },
            {
              colspan: 6,
              PasswordInput: [
                {
                  label: 'Password',
                  placeholder: 'Role',
                  icon: <AiOutlineKey size={20} />,
                  getValue: { ...form.getInputProps('password') },
                },
              ],
            },

            {
              colspan: 6,
              AutoComplete: [
                {
                  label: 'Role',
                  placeholder: 'Your Password',
                  icon: <AiOutlineKey size={20} />,
                  data: ['ADMIN', 'SUPER_USER', 'USER'],
                  getValue: { ...form.getInputProps('role') },
                },
              ],
            },
          ],
        },
      ]
    },
    async onSubmit() {
      await POST(
        '/auth/register',
        {
          name: form.values.name,
          username: form.values.username,
          password: form.values.password,
          role: form.values.role,
        } as IInitialValues,
        dispatch
      )
    },
  }

  const dispatch: AppDispatch = useDispatch()
  return (
    <FormDialogTemplate title={DialogTitle('Dashboard', Icon.Hero.Dashboard)} size="lg" onSubmit={form.onSubmit(() => Elements.onSubmit())}>
      <GridTemplate GridRoot={Elements.GridElements()} />
    </FormDialogTemplate>
  )
}
