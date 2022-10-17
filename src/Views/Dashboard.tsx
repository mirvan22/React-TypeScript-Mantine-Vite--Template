import { FunctionComponent, useState } from 'react'
import { AppCrud, ICrudAction } from '../Component/AppCrud'
import { __IconDashBoard, __IconPlus } from '../Utils/UtilsIcon'
import { DashboardDialog } from '../Dialog/DashboardDialog'
import { TableOutletTemplate } from '../Template/TableOutletTemplate'
import { Loader, ScrollArea } from '@mantine/core'
import { AppSuperTable } from '../Component/AppSuperTable'
import { __catEmptyLottie } from '../Assets/Lottie/CatEmptyLottie'

const elements = [
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
interface IAttribute {
  OTableRoot: AppSuperTable.ITableRoot[]
  OCrudAction: ICrudAction[]
}
const Dashboard = () => {
  const [selected, setSelected] = useState<any | null>(null)
  const data: any = [{}]
  const Attribute: IAttribute = {
    OTableRoot: [
      {
        key: 'Dashboard',
        TableHeadRow: [
          {
            className: ' break--mantine--table--stickyHeader ',
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
        TableBodyRow: !data
          ? [
              {
                TableColumn: [
                  {
                    label: <Loader size="xl" variant="bars" m={20} />,
                    colSpan: 99,
                    align: 'center',
                  },
                ],
              },
            ]
          : !data.length
          ? [
              {
                TableColumn: [
                  {
                    label: __catEmptyLottie,
                    colSpan: 99,
                  },
                ],
              },
            ]
          : elements.map((row, key) => ({
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
              selected() {
                setSelected(row)
              },
            })),
      },
    ],

    OCrudAction: [
      {
        label: 'Tambah',
        icon: __IconPlus,
        typeColor: 'success',
        openModal: <DashboardDialog />,
        disabled: selected,
      },
    ],
  }

  return (
    <TableOutletTemplate label="Dashboard" icon={__IconDashBoard}>
      <AppCrud Action={Attribute.OCrudAction} />
      <ScrollArea.Autosize maxHeight="calc(100vh - 320px)">
        <AppSuperTable TableRoot={Attribute.OTableRoot} />
      </ScrollArea.Autosize>
    </TableOutletTemplate>
  )
}

export default Dashboard as FunctionComponent
