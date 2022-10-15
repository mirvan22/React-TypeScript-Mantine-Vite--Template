import { Paper } from '@mantine/core'
import { FunctionComponent } from 'react'
import { IButton, ACrud } from '../Component/ACrud'
import { __IconDashBoard, __IconPlus } from '../Component/AIcon'
import { AMainFooter } from '../Component/AMainFooter'
import AMainTitle from '../Component/AMainTitle'
import { ITableBodyTR, ITableTR, ATable, ATableBody } from '../Component/ATable'
import { DashboardDialog } from '../Dialog/DashboardDialog'
import { useAppDispatch } from '../Store/hook'
import { AppDispatch } from '../Store/store'

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
]

const Dashboard = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const tableHead: ITableTR[] = [
    {
      name: 'dashboard',
      TH: [{ label: 'No' }, { label: 'Position' }, { label: 'Mass' }, { label: 'Symbol' }, { label: 'Name' }],
    },
  ]

  const tableBody: ITableBodyTR[] = elements.map((row, key) => ({
    className: 'hello',
    TD: [{ label: key + 1 }, { label: row.position }, { label: row.mass }, { label: row.symbol }, { label: row.name }],
  }))

  const crudAction: IButton[] = [
    {
      label: 'Tambah',
      icon: __IconPlus,
      className: 'success',
      openModal: <DashboardDialog />,
    },
  ]
  return (
    <Paper withBorder className="shadow--sm">
      {/* Main Title -------------------------------------------*/}
      <AMainTitle label="Dashboard" icon={__IconDashBoard} />

      {/* Crud Action -------- Action di dalam Array Object*/}
      <ACrud Action={crudAction} />

      {/* Table --------- TableHeader di dalam Array Object*/}
      <ATable TableHeader={tableHead}>
        <ATableBody TableBody={tableBody} />
      </ATable>

      {/* Footer -------------------------------------------*/}
      <AMainFooter />
    </Paper>
  )
}

export default Dashboard as FunctionComponent
