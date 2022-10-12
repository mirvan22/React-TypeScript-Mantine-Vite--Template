import { Box, Paper } from '@mantine/core'
import { FunctionComponent } from 'react'
import { IButton, MCrudAction } from '../Component/MCrudAction'
import { MIconDashBoard, MIconPlus } from '../Component/MIcon'
import MMainTitle from '../Component/MMainTitle'
import { ITableChildTR, ITableRootTR, MTabelRoot, MTableChild } from '../Component/MTable'

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
]

const TableRoot: ITableRootTR[] = [
  {
    name: 'dashboard',
    TH: [{ label: 'No' }, { label: 'Position' }, { label: 'Mass' }, { label: 'Symbol' }, { label: 'Name' }],
  },
]

const TableChild: ITableChildTR[] = elements.map((row, key) => ({
  className: 'hello',
  TD: [{ label: key + 1 }, { label: row.position }, { label: row.mass }, { label: row.symbol }, { label: row.name }],
}))

const crudAction: IButton[] = [{ label: 'Tambah', icon: MIconPlus, className: 'success' }]

const Dashboard = () => {
  return (
    <>
      <MMainTitle label="Dashboard" icon={MIconDashBoard} />
      <Box className="main-shadow">
        <MCrudAction COL={crudAction} />
        <Paper withBorder>
          <MTabelRoot TR={TableRoot}>
            <MTableChild TR={TableChild} />
          </MTabelRoot>
        </Paper>
        <Paper className="main-shadow" p={20} sx={{ backgroundColor: 'rgb(26, 27, 30)' }}></Paper>
      </Box>
    </>
  )
}

export default Dashboard as FunctionComponent
