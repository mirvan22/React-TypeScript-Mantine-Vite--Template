import { Table, TextInput } from '@mantine/core'
import { UseForm } from '@mantine/form/lib/types'
import React, { useState } from 'react'
import { IClassSx } from '../Interface/IClassSx'

export declare namespace AppTable {
  interface IAppTable {
    TableRoot: ITableRoot[]
  }
  interface ITableRoot extends Omit<IClassSx, 'sx'> {
    key?: React.Key | null | undefined
    ref?: React.Ref<HTMLTableElement> | undefined
    TableHeadRow: ITableHeadRow[]
    TableBodyRow: ITableBodyRow[]
  }
  interface ITableHeadRow extends Omit<IClassSx, 'sx'> {
    ref?: React.LegacyRef<HTMLTableRowElement> | undefined
    TableHeader: ITableHeader[]
  }
  interface ITableHeader extends Omit<IClassSx, 'sx'> {
    ref?: React.LegacyRef<HTMLTableHeaderCellElement> | undefined
    label?: React.ReactNode | undefined
    align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
    colSpan?: number | undefined
    rowSpan?: number | undefined
  }

  interface ITableBodyRow extends Omit<IClassSx, 'sx'> {
    ref?: React.LegacyRef<HTMLTableRowElement> | undefined
    selected?: () => void | undefined
    TableColumn: ITableColumn[]
  }
  interface ITableColumn extends Omit<IClassSx, 'sx'> {
    ref?: React.LegacyRef<HTMLTableDataCellElement> | undefined
    label?: React.ReactNode | undefined
    width?: string | number | undefined
    align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
    colSpan?: number | undefined
    rowSpan?: number | undefined
    getValue?: UseForm | undefined
  }
}

export const AppTable = ({ TableRoot }: AppTable.IAppTable) => {
  const [active, setActive] = useState<number | null>(null)
  return (
    <>
      {TableRoot.map((row) => (
        <Table key={row.key} className={row.className} style={row.style} ref={row.ref}>
          <thead>
            {row.TableHeadRow?.map((r, key) => (
              <tr key={key} className={r.className} style={r.style} ref={r.ref}>
                {r.TableHeader.map((table, tableKey) => (
                  <th
                    key={tableKey}
                    className={table.className}
                    style={table.style}
                    ref={table.ref}
                    align={table.align}
                    colSpan={table.colSpan}
                    rowSpan={table.rowSpan}
                  >
                    {table.label}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {row.TableBodyRow.map((r, k) => (
              <tr
                key={k}
                className={` ${k === active ? ' break--mantine--table--active ' : ' break--mantine--table--hover '} ${r.className}`}
                style={r.style}
                ref={r.ref}
                onClick={() => {
                  setActive(k)
                  r.selected?.()
                }}
              >
                {r.TableColumn?.map((col, colKey) => (
                  <td
                    key={colKey}
                    className={` table-color  ${col.className} `}
                    style={{ fontWeight: colKey === 0 ? 700 : 200, ...col.style }}
                    ref={col.ref}
                    width={col.width}
                    align={col.align}
                    colSpan={col.colSpan}
                    rowSpan={col.rowSpan}
                  >
                    {col.getValue ? <TextInput {...col.getValue} /> : col.label}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
    </>
  )
}
