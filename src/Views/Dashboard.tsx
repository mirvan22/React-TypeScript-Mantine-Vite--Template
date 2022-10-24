import { FunctionComponent, useState } from 'react'
import { __IconDashBoard, __IconPlus } from '../Utils/UtilsIcon'
import { TableOutletTemplate } from '../Template/TableOutletTemplate'
import { Loader, ScrollArea } from '@mantine/core'
import { AppTable } from '../Component/AppTable'
import { GridTemplate, IGridElements } from '../Template/GridTemplate'
import { __catEmptyLottie } from '../Assets/Lottie/CatEmptyLottie'
import { DashboardDialog } from '../Dialog/DashboardDialog'
import { elements } from '../TestData'

interface IElements {
  TableElement: () => AppTable.ITableRoot[]
  GridElement: () => IGridElements[]
}
const Dashboard = () => {
  const Elements: IElements = {
    TableElement() {
      return [
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
      ]
    },
    GridElement() {
      return [
        {
          sx: { padding: 10 },
          GridCol: [
            {
              colspan: 'content',
              AppButton: [
                {
                  label: 'Tambah',
                  icon: __IconPlus,
                  disabled: !selected,
                  CrudActionOpenModal: <DashboardDialog selected={selected} />,
                },
              ],
            },
          ],
        },
      ]
    },
  }

  const [selected, setSelected] = useState<any | null>(null)
  const data: any = [{}]
  return (
    <TableOutletTemplate label="Dashboard" icon={__IconDashBoard}>
      <GridTemplate GridRoot={Elements.GridElement()} />
      <ScrollArea.Autosize maxHeight="calc(100vh - 320px)">
        <AppTable TableRoot={Elements.TableElement()} />
      </ScrollArea.Autosize>
    </TableOutletTemplate>
  )
}

export default Dashboard as FunctionComponent
