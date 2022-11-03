import { FunctionComponent, useState } from 'react'

import { TableOutletTemplate } from '../Template/TableOutletTemplate'
import { Loader, ScrollArea } from '@mantine/core'
import { AppTable } from '../Component/AppTable'
import { GridTemplate, IGridElements } from '../Template/GridTemplate'
import { __catEmptyLottie } from '../Assets/Lottie/CatEmptyLottie'
import { elements } from '../TestData'
import { Icon } from '../Utils/Icon'

interface IElements {
  TableElement: () => AppTable.ITableRoot[]
  GridElement: () => IGridElements[]
}
const Dashboard = () => {
  const Elements: IElements = {
    /** Table */
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

    /** Crud Action */
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
                  icon: Icon.Button.Plus,
                  disabled: !selected,
                  // CrudActionOpenModal: <DashboardDialog selected={selected} />,
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
    <TableOutletTemplate label="Dashboard" icon={Icon.Hero.Dashboard}>
      <GridTemplate GridRoot={Elements.GridElement()} />
      <ScrollArea.Autosize maxHeight="calc(100vh - 320px)">
        <AppTable TableRoot={Elements.TableElement()} />
      </ScrollArea.Autosize>
    </TableOutletTemplate>
  )
}

export default Dashboard as FunctionComponent
