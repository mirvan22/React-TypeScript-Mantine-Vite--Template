import { useForm } from '@mantine/form'
import { __IconDashBoard } from '../Utils/UtilsIcon'
import { DialogTitle, FormDialogTemplate } from '../Template/FormDialogTemplate'
import { UseForm } from '@mantine/form/lib/types'
import { GridTemplate, IGridElements } from '../Template/GridTemplate'
import { FaUserAlt } from 'react-icons/fa'
import { AiOutlineKey } from 'react-icons/ai'

interface IDialog {
  selected: any
}
interface IAttribute {
  formik: UseForm
}

export const DashboardDialog = ({ selected }: IDialog) => {
  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      username: '',
      password: '',
    },
  })
  const GridElements: IGridElements[] = [
    {
      margin: 'sm',
      GridCol: [
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
          TextInput: [
            {
              label: 'Password',
              placeholder: 'Your Password',
              icon: <AiOutlineKey size={20} />,
              getValue: { ...form.getInputProps('password') },
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
      <GridTemplate GridRoot={GridElements} />
    </FormDialogTemplate>
  )
}
