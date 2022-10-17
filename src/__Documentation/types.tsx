import { IGridRoot } from '../Component/AppGrid'

/**
 * `GridRoot`. Required column
 * @example
 * Example(1)
const example:IGridRoot[] =[
    {
      column: [    ---> <Grid.Col/> Mantine
        {
          colspan: 12,  ---> "jumlah colomn yg akan di pakai"  1 "Sampai" 12 || 'auto','content'
          input: [    ---> "Element" <TextInput/> "Mantine yg berada didalam" <Grid.Col/>
            {
              label: 'Username',   ---> label(Optional) "Judul yang berada di atas" <TextInput/>,
              description: 'Username is required!', ---> description(Optional),
              placeholder: 'Your Username', ---> placeholder(Optional),
              icon: <FaUserCircle size={20} />, ---> icon(Optional),
              getValue: form.getInputProps('username'),  ---> "Function untuk mengambil value",
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
          autoComplete: [     ---> "Element" <Select/> "Mantine yg berada didalam" <Grid.Col/>
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
          numberInput: [    ---> "Element" <NumberInput/> "Mantine yg berada didalam" <Grid.Col/>
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

  Example(2) "Tanpa keterangan" ==> Copy ,Paste "Untuk melihat hasilnya"
  const exampleGrid: IGridRoot[] = [
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

  return(
    <Box>
        <AppGrid gridRoot={exampleGrid} />
    </Box>
  )
 */
export type IGridRootDocumentation = IGridRoot
