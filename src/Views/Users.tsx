import { FunctionComponent } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AppSuperTable } from '../Component/AppSuperTable'
import { TitleOutlet } from '../Template/TableOutletTemplate'

export interface Ielements {
  position: number
  mass: number
  symbol: string
  name: string
}

const elements: Ielements[] = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
]

const __TableRoot: AppSuperTable.ITableRoot[] = [
  {
    key: 'Users',
    TableHeadRow: [
      {
        TableHeader: [
          {
            label: 'No',
          },
          {
            label: 'Name',
          },
          {
            label: 'Position',
          },
          {
            label: 'Mass',
          },
          {
            label: 'Symbol',
          },
        ],
      },
    ],
    TableBodyRow: elements.map((row, key) => ({
      TableColumn: [
        {
          label: key + 1,
        },
        {
          label: row.name,
        },
        {
          label: row.position,
        },
        {
          label: row.mass,
        },
        {
          label: row.symbol,
        },
      ],
    })),
  },
]

const Users = () => {
  return (
    <>
      <TitleOutlet label="Users" icon={<FaUserAlt size={30} fill="white" />} />
      <AppSuperTable TableRoot={__TableRoot} />
    </>
  )
}

export default Users as FunctionComponent
