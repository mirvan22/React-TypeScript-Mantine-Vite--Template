import { Box, Button, Group, TextInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { IColumn, AForm } from '../Component/AForm'
import { useAppDispatch } from '../Store/hook'
import { AppDispatch } from '../Store/store'
import { z } from 'zod'
import { FaKey, FaUserCircle } from 'react-icons/fa'
import { __IconDashBoard } from '../Component/AIcon'
import { useMediaQuery } from '@mantine/hooks'
import { DialogTitle } from './DialogComponent.tsx/DialogTitle'
import { AModal } from '../Component/AModal'

interface IInitialValues {
  username: string
  password: string
}

export const DashboardDialog = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const mobile = useMediaQuery('(max-width:768px)')

  const schema = z.object({
    username: z.string().min(1, { message: 'Username Wajib Diisi' }),
    password: z.string().min(1, { message: 'Password Wajib Diisi' }),
    role: z.string({ invalid_type_error: 'Role Wajib Diisi' }),
  })

  const formik = useForm({
    validateInputOnChange: true,
    initialValues: {
      username: '',
      password: '',
      role: null,
      currency: '',
    },
    validate: zodResolver(schema),
  })

  const form: IColumn[] = [
    {
      gridSpan: 12,
      input: [
        {
          icon: <FaUserCircle size={20} />,
          label: 'Username',
          placeholder: 'Your username',
          getValue: { ...formik.getInputProps('username') },
        },
      ],
    },
    {
      gridSpan: 12,
      passwordInput: [
        {
          icon: <FaKey size={20} />,
          label: 'Password',
          placeholder: 'Your Password',
          getValue: { ...formik.getInputProps('password') },
        },
      ],
    },
    {
      gridSpan: 12,
      autoComplete: [
        {
          label: 'Role',
          placeholder: 'Hak Akses',
          getValue: { ...formik.getInputProps('role') },
        },
      ],
    },
    {
      gridSpan: 6,
      numberInput: [
        {
          label: 'Number Input',
          placeholder: 'Number Input Example',
          getValue: { ...formik.getInputProps('role') },
        },
      ],
    },
  ]

  const formatter = new Intl.NumberFormat('en-ID', {
    style: 'currency',
    currency: 'IDR',
  })

  const handleChange = (e: any) => {
    formik.setFieldValue('currency', formik.values.currency.toString().replace(/\./g, ',') || '0')
    const value = formik.values.currency ? formatter.format(parseFloat(formik.values.currency)).substr(3) : formik.values.currency

    console.log(value)
  }
  return (
    <AModal title={DialogTitle('Dashboard', __IconDashBoard)}>
      <form onSubmit={formik.onSubmit((values) => console.log(values))}>
        <Box
          sx={{
            padding: 10,
            height: mobile ? 'calc(100vh - 127px)' : '',
            maxHeight: mobile ? '' : 'calc(100vh - 250px)',
            overflowY: 'auto',
          }}
        >
          <AForm column={form} />
          <TextInput label="Price" onChange={handleChange} value={formik.values.currency} />
        </Box>
        <Group position="right" className="main-color" sx={{ borderRadius: '0px 0px 3px 3px', padding: 10 }}>
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </AModal>
  )
}
