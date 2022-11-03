import { FunctionComponent, useEffect, useState } from 'react'
import { TableOutletTemplate } from '../Template/TableOutletTemplate'
import { Loader, ScrollArea } from '@mantine/core'
import { AppTable } from '../Component/AppTable'
import { GridTemplate, IGridElements } from '../Template/GridTemplate'
import { __catEmptyLottie } from '../Assets/Lottie/CatEmptyLottie'
import { DashboardDialog } from '../Dialog/DashboardDialog'
import { GET } from '../Utils/Axios'
import { Icon } from '../Utils/Icon'

interface IElements {
  TableElement: () => AppTable.ITableRoot[]
  GridElement: () => IGridElements[]
}
const Users = () => {
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
                  label: 'Username',
                },
                {
                  label: 'Role',
                },
                {
                  label: 'Status',
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
            : data?.map((row: any, key: number) => ({
                TableColumn: [
                  {
                    label: key + 1,
                  },
                  {
                    label: row.name,
                  },
                  {
                    label: row.username,
                  },
                  {
                    label: row.role,
                  },
                  {
                    label: row.statusAktif ? 'AKTIF' : 'TIDAK AKTIF',
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
                  icon: Icon.Button.Plus,

                  CrudActionOpenModal: <DashboardDialog SELECTED={selected} callBack={() => fetch()} />,
                },
              ],
            },
          ],
        },
      ]
    },
  }

  const [data, setData] = useState(null as any)
  const [selected, setSelected] = useState<any | null>(null)

  function fetch() {
    GET('/user', useEffect, setData)
  }

  fetch()
  return (
    <TableOutletTemplate label="Dashboard" icon={Icon.Hero.User}>
      <GridTemplate GridRoot={Elements.GridElement()} />
      <ScrollArea.Autosize maxHeight="calc(100vh - 320px)">
        <AppTable TableRoot={Elements.TableElement()} />
      </ScrollArea.Autosize>
    </TableOutletTemplate>
  )
}

export default Users as FunctionComponent
