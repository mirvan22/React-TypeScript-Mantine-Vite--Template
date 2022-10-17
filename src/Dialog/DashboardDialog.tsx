import { useForm, zodResolver } from '@mantine/form'
import { AppGrid } from '../Component/AppGrid'
import { z } from 'zod'
import { FaKey, FaSortNumericDown, FaUserCircle } from 'react-icons/fa'
import { __IconDashBoard } from '../Utils/UtilsIcon'
import { DialogTitle } from './DialogComponent.tsx/DialogTitle'
import { FormDialogTemplate } from '../Template/FormDialogTemplate'
import { UseForm } from '@mantine/form/lib/types'
import { AiOutlineKey } from 'react-icons/ai'
import { IGridRootDocumentation } from '../__Documentation/types'

interface IAttribute {
  formik: UseForm
}

export const DashboardDialog = () => {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      username: '',
      password: '',
      role: null,
      currency: '',
    },
    validate: zodResolver(
      z.object({
        username: z.string().min(1, { message: 'Username Wajib Diisi' }),
        password: z.string().min(1, { message: 'Password Wajib Diisi' }),
        role: z.string({ invalid_type_error: 'Role Wajib Diisi' }),
      })
    ),
  })

  const grid: IGridRootDocumentation[] = [
    {
      column: [
        {
          colspan: 12,
          input: [
            {
              label: 'Username',
              description: 'Username is required!',
              placeholder: 'Your Username',
              icon: <FaUserCircle size={20} />,
              getValue: form.getInputProps('username'),
            },
            {
              label: 'Password',
              description: 'password is required!',
              placeholder: 'Your password',
              icon: <FaKey size={20} />,
              getValue: form.getInputProps('password'),
            },
          ],
        },
        {
          colspan: 6,
          autoComplete: [
            {
              label: 'Role',
              description: 'Role is required!',
              placeholder: 'Role',
              icon: <AiOutlineKey size={20} />,
              data: ['Admin', 'Super User', 'User'],
              getValue: form.getInputProps('role'),
            },
          ],
        },
        {
          colspan: 6,
          numberInput: [
            {
              label: 'Example Number Input',
              description: 'Example',
              icon: <FaSortNumericDown size={20} />,
              getValue: form.getInputProps('currency'),
            },
          ],
        },
      ],
    },
  ]

  return (
    <FormDialogTemplate
      title={DialogTitle('Dashboard', __IconDashBoard)}
      size="lg"
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
      <AppGrid gridRoot={grid} />
    </FormDialogTemplate>
  )
}
